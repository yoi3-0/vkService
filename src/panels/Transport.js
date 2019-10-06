import React from 'react';
import { View, Panel, PanelHeader, ModalRoot,ModalPage, ModalPageHeader, HeaderButton, IOS, ANDROID, platform, Button, Cell, Search, List} from '@vkontakte/vkui';

import '../App.css';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Done from '@vkontakte/icons/dist/24/done';

const routes = [
	{id: 1003, name: "Трамвай 3"},
	{id: 1016, name: "Трамвай 16"},
	{id: 2035, name: "Троллейбус 35"},
	{id: 3074, name: "Автобус 74"}
];
const osName=platform();
const IS_PLATFORM_ANDROID = (osName === ANDROID);
const IS_PLATFORM_IOS = (osName === IOS);
const MODAL_PAGE_CH='change';



class Transport extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			activePanel:'default',
			activeModal: null,
			modalHistory: [],
			search: ''
		};
		this.modalBack = () => {
			this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
		};
		this.onChange = this.onChange.bind(this);
	}


	setActiveModal(activeModal) {
		activeModal = activeModal || null;
		let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

		if (activeModal === null) {
			modalHistory = [];
		} else if (modalHistory.indexOf(activeModal) !== -1) {
			modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
		} else {
			modalHistory.push(activeModal);
		}

		this.setState({
			activeModal,
			modalHistory
		});
	};
	onChange (search) { this.setState({ search }); }

	get thematics () {
		const search = this.state.search.toLowerCase();
		return routes.filter(({name}) => name.toLowerCase().indexOf(search) > -1);
	}

	render()
	{
		const modal=(
			<ModalRoot activeModal={this.state.activeModal} >
				<ModalPage
					id={MODAL_PAGE_CH}
					onClose={this.modalBack}
					header={
						<ModalPageHeader
							left={IS_PLATFORM_ANDROID && <HeaderButton onClick={this.modalBack}><Icon24Cancel /></HeaderButton>}
							right={<HeaderButton onClick={this.modalBack}>{IS_PLATFORM_IOS ? 'Готово' : <Icon24Done />}</HeaderButton>}
						>
							Маршрут test
						</ModalPageHeader>
					}
				>
				</ModalPage>
			</ModalRoot>
		);

		return (
			<View id={this.props.id} activePanel={this.state.activePanel} modal={modal}>
				<Panel id='default'>
					<div>
						<PanelHeader>
							Маршруты
						</PanelHeader>
						<Search value={this.state.search} onChange={this.onChange}/>
						{this.thematics.length > 0 &&
						<List>
							{this.thematics.map(thematic => <Cell key={thematic.id} onClick={() => this.setActiveModal(MODAL_PAGE_CH)} >{thematic.name}</Cell>)}
						</List>
						}
					</div>
				</Panel>
			</View>
		);
	}
}

export default Transport;
