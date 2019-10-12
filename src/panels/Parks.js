import React from 'react';
import {
	View,
	Panel,
	PanelHeader,
	ActionSheet,
	Group,
	ActionSheetItem,
	Avatar,
	List,
	Cell,
	Button,
	InfoRow,
	platform,
	IOS
} from '@vkontakte/vkui';

import Icon24MoreVertical from '@vkontakte/icons/dist/24/more_vertical';
import Icon16Pin from '@vkontakte/icons/dist/16/pin';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import '../App.css';
import t10031 from '../img/t10031.png';
import Transport from "./Transport";
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";

const osName=platform();
const blueBackground = {
	backgroundColor: 'var(--accent)'
};


class Parks extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			popout: null,
			activePanel:'default',
			activePark: null
		};
		this.openInfo = this.openInfo.bind(this);
		this.TramPark1 = this.TramPark3.bind(this);
		this.TramPark3 = this.TramPark3.bind(this);
	}
	openInfo () {
		this.setState({ popout:
				<ActionSheet onClose={() => this.setState({ popout: null })}>
					<ActionSheetItem  autoclose onClick={() =>this.setState({activePanel:'photo'})}>
						Открыть фотографию
					</ActionSheetItem>
					{osName === IOS && <ActionSheetItem autoclose theme="cancel">Отменить</ActionSheetItem>}
				</ActionSheet>
		});
	}
	TramPark1 () {
		this.setState({ activePark: '1'});
		this.openInfo();
	}
	TramPark3 () {
		this.setState({ activePark: '3'});
		this.openInfo();
	}


	render() {
		return (

			<View id={this.props.id} activePanel={this.state.activePanel} popout={this.state.popout}>
				<Panel id='default'>
					<PanelHeader>
						Трамвайные парки
					</PanelHeader>
					<Group className='park_info'>
						<Cell

							size="l"
							asideContent={<Icon24MoreVertical onClick={this.TramPark1}/>}
							bottomContent={
								<div style={{display: 'flex'}}>
									<Button size="m">Добавить</Button>
									<Button size="m" level="secondary" style={{marginLeft: 8}}>Скрыть</Button>
								</div>
							}
						>
							Трамвайный парк №1 <hr/>
							<InfoRow title='Расположение'>
								Московский проспект 1234567
							</InfoRow>
							<InfoRow title='Телефон'>
								88005553535
							</InfoRow>
							<InfoRow title='Обслуживает маршруты'>
								49, 43, 45, 25, 62, 29, 25, <u> 16 </u>
							</InfoRow>
							<InfoRow title='Подвижной состав'>
								ЛВС-86
							</InfoRow>
							<InfoRow title='Дата открытия'>
								5 февраля 1800
							</InfoRow>
						</Cell
>
					</Group>
					<Group className='park_info'>
						<Cell

							size="l"
							asideContent={<Icon24MoreVertical onClick={this.TramPark3}/>}
							bottomContent={
								<div style={{display: 'flex'}}>
									<Button size="m" >Добавить</Button>
									<Button size="m" level="secondary" style={{marginLeft: 8}}>Скрыть</Button>
								</div>
							}
						>
							Трамвайный парк №3 <hr/>
							<InfoRow title='Расположение'>
								Московский проспект 1234567
							</InfoRow>
							<InfoRow title='Телефон'>
								88005553535
							</InfoRow>
							<InfoRow title='Обслуживает маршруты'>
								49, 43, 45, 25, 62, 29, 25, <u> 16 </u>
							</InfoRow>
							<InfoRow title='Подвижной состав'>
								ЛВС-86
							</InfoRow>
							<InfoRow title='Дата открытия'>
								5 февраля 1800
							</InfoRow>
						</Cell>
					</Group>
				</Panel>
				<Panel id='photo'>
					<PanelHeader
						left={<HeaderButton onClick={ () => this.setState({activePanel:'default', activePark: null})}>
							{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
						</HeaderButton>}
					>
						Фогорафии парка
					</PanelHeader>

					<p className='settings_user_name'>Ivan Ivanovich</p>
				</Panel>
			</View>
		)
	}
}

export default Parks;

