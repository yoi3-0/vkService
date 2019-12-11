import React from 'react';
import {
	View,
	Panel,
	ScreenSpinner,
	PanelHeader,
} from '@vkontakte/vkui';
import '../App.css';

class Map extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			popout: null,
			activePanel:'default',
			activePark: null,
            activeIframe: <iframe
				onload={console.log('ya!')}
				readyState={console.log('yes!')}
				id='theonlyone'
				title='theonlyone'
				className='mapview'
				src = "https://yandex.ru/map-widget/v1/?um=constructor%3A773a061a84c6813492a565182b867299a5a1cd6155fa1afb0d2c78d2c2a79aca&amp;source=constructor"
				frameBorder = "0"/>,
		};
	}

	render() {
		return (
			<View id={this.props.id} popout={this.state.popout} activePanel={this.state.activePanel}>
				<Panel id='default'>
					<PanelHeader>
						Карта маршрутов
					</PanelHeader>
					{ this.state.activeIframe.onload? alert('no'):  this.state.activeIframe}
				</Panel>
			</View>
		)
	}
}

export default Map;

