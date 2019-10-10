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
	Snackbar,
	platform,
	IOS
} from '@vkontakte/vkui';

import Icon24MoreVertical from '@vkontakte/icons/dist/24/more_vertical';
import Icon16Pin from '@vkontakte/icons/dist/16/pin';

import '../App.css';
import t10031 from '../img/t10031.png';

const osname=platform();
const blueBackground = {
	backgroundColor: 'var(--accent)'
};


class Parks extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			popout: null,
			snackbar: null
		};
		this.openInfo = this.openInfo.bind(this);
		this.notNow = this.notNow.bind(this);
	}
	componentDidMount() {
		this.notNow()
	}
	openInfo () {
		this.setState({ popout:
				<ActionSheet onClose={() => this.setState({ popout: null })}>
					<ActionSheetItem autoclose>
						Редактировать
					</ActionSheetItem>
					<ActionSheetItem autoclose theme="destructive">
						Выйти
					</ActionSheetItem>
					{osname === IOS && <ActionSheetItem autoclose theme="cancel">Отменить</ActionSheetItem>}
				</ActionSheet>
		});
	}
	notNow () {
		if (this.state.snackbar) return;
		this.setState({ snackbar:
				<Snackbar
					layout="vertical"
					onClose={() => this.setState({ snackbar: null })}
					before={<Avatar size={24} style={blueBackground}><Icon16Pin fill="#fff" width={14} height={14} /></Avatar>}
				>
					В данный момент парк не обслуживает данный маршрут
				</Snackbar>
		});
	}

	render() {
		return (

			<View id={this.props.id} activePanel='default' popout={this.state.popout}>
				<Panel id='default'>
					<PanelHeader>
						Трамвайные парки
					</PanelHeader>
					<Group className='park_info'>
						<Cell
							before={<img src={t10031} className='park_pic' alt='Трамвайный парк №1'/>}
							size="l"
							asideContent={<Icon24MoreVertical onClick={this.openInfo}/>}
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
						</Cell>
					</Group>
					<Group className='park_info'>
						<Cell
							before={<img src={t10031} className='park_pic' alt='Трамвайный парк №3'/>}
							size="l"
							asideContent={<Icon24MoreVertical onClick={this.openInfo}/>}
							bottomContent={
								<div style={{display: 'flex'}}>
									<Button size="m" onClick={this.notNow}>Добавить</Button>
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
					{this.state.snackbar}
				</Panel>
			</View>
		)
	}
}

export default Parks;

