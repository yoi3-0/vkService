import React from 'react';
import connect from '@vkontakte/vk-connect';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

import {Root, Epic, Tabbar, TabbarItem, Alert, CellButton} from '@vkontakte/vkui';

import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28Place from '@vkontakte/icons/dist/28/place';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';

import Transport from './panels/Transport';
import Parks from './panels/Parks';
import Settings from './panels/Settings';



class App extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.getUrlVars());
		this.state = {
			activeView: 'default',
			activeStory: 'transport',
			popout: null,
			snackbar: null,
			urlVars: this.getUrlVars(),
			urlObj: this.objToQueryString(this.getUrlVars()),
			user: null,
			schedule: [],
			CellBut:   <CellButton before={<Icon24Favorite />} onClick={ () => connect.send("VKWebAppAddToFavorites", {})}> Добавить в избранное</CellButton>,
			translations: {
				parks: 'Парки',
				routes: 'Маршруты',
				info: 'Информация',
				need_accept_notifications: 'Надо разрешить уведомления',
				accept_notifications: 'Розрешить',

			}
		};
		this.openAlert = this.openAlert.bind(this);
		this.closePopout = this.closePopout.bind(this);
	}
	openAlert () {
		this.setState({ popout:
				<Alert
					actions={[{
						title: 'ОК',
						autoclose: true,
						style: 'cancel'
					}]}
					onClose={this.closePopout}
				>
					<p>Сервис в списке избранных!</p>
				</Alert>
		});
	}
	closePopout () {
		this.setState({ popout: null });
	}

	getUrlVars() {
		let urlVar = window.location.search;
		let dict = {};
		let arrayVar = (urlVar.substr(1)).split('&');
		if (arrayVar[0] === '') return false;
		for (let i = 0; i < arrayVar.length; i++) {
			let valueAndKey = arrayVar[i].split('=');
			dict[valueAndKey[0]] = valueAndKey[1];
		}
		return dict;
	}

	objToQueryString(obj) {
		const keyValuePairs = [];
		for (let i = 0; i < Object.keys(obj).length; i += 1) {
			keyValuePairs.push(`${encodeURIComponent(Object.keys(obj)[i])}=${encodeURIComponent(Object.values(obj)[i])}`);
		}
		return keyValuePairs.join('&');
	}

	componentDidMount() {
		console.log(this.state.urlVars);
		connect.subscribe((event) => {
			switch (event.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					 break;
				case 'VKWebAppUpdateConfig':
					let schemeAttribute = document.createAttribute('scheme');
					schemeAttribute.value = (event.detail.data.scheme ? event.detail.data.scheme : 'client_light');
					document.body.attributes.setNamedItem(schemeAttribute); break;
				case 'VKWebAppAddToFavoritesResult': console.log(event.detail.data.result); this.setState({CellBut:<CellButton disabled before={<Icon24Favorite />} >Сервис уже в списке избранных</CellButton>});
					break;
				default: console.log(event.detail.type);
					break;
			}
			console.log('new message', event.detail.type);

		});


		this.setState({ popout: null });
	}

	onStoryChange = (e) => {
		this.setState({ activeStory: e.currentTarget.dataset.story });
	};

	go = (e) => {
		this.setState({ activeView: e.currentTarget.dataset.to })
	};


	render() {
		return (
			<Root activeView={this.state.activeView}>
				<Epic
					id='default'
					activeStory={this.state.activeStory}
					tabbar={
						<Tabbar>
							<TabbarItem
								onClick={ this.onStoryChange }
								selected={ this.state.activeStory === 'transport' }
								data-story='transport'
								text={this.state.translations.routes}
							>
								<Icon28Newsfeed />
							</TabbarItem>

							<TabbarItem
								onClick={ this.onStoryChange }
								selected={ this.state.activeStory === 'parks' }
								data-story='parks'
								text= {this.state.translations.parks}
							>
								<Icon28Place/>
							</TabbarItem>

							<TabbarItem
								onClick={ this.onStoryChange }
								selected={ this.state.activeStory === 'settings' }
								data-story='settings'
								text={this.state.translations.info}
							>
								<Icon28InfoOutline />
							</TabbarItem>
						</Tabbar>
					}>
					<Transport id='transport' go={ this.go } />
					<Parks id='parks' go={ this.go } />
					<Settings id='settings' popout={this.state.popout} schedule={ this.state.schedule } CellBut={this.state.CellBut} go={ this.go } />
				</Epic>
			</Root>
		);
	}
}

export default App;
