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

const parkinfo = [
    {id: '1', name: 'Трамвайный парк №1 (имени Коняшина)', info: 'Открыт в октябре 1907 года под названием «Московский трамвайный парк».\n' +
            'В 1922 году название «Московский» упразднено, вместо него парку присвоен № 1 и имя И. И. Коняшина. ' +
            ' В 1935 году из первого парка выделен в самостоятельную единицу грузовой трамвайный парк, получивший имя Е. И. Красуцкого, однако в 1971 году оба парка снова объединились.' +
            ' В  1997 году в Петербурге прекращены грузовые трамвайные перевозки, и парк № 1 стал чисто пассажирским.'},
    {id: '3', name: 'Трамвайный парк №1 (имени Коняшина)', info: 'Открыт в 1876 году как «Петербургский коночный парк»,' +
            ' с 1909 года — «Петербургский трамвайный парк». В 1922 году название «Петербургский» упразднено, вместо него парку присвоен номер «3» и имя К. Н. Блохина.' +
            'В 2003 году трамвайные парки №2 и №3 были объединены под номером «3», с этого момента трамвайный парк № 3 стал первой площадкой выпуска вагонов, а территория парка №2 — второй площадкой. ' +
            '15 января 2007 года площадка №2 была закрыта, начиная с этого времени и до возобновления работы у трампарка № 3 вновь осталась только одна площадка. ' +
            'Со 2 июня 2016 года вторая площадка возобновила работу.'}
];

class Parks extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			popout: null,
			activePanel:'default',
			activePark: null
		};
		this.openInfo = this.openInfo.bind(this);
		this.TramPark1 = this.TramPark1.bind(this);
		this.TramPark3 = this.TramPark3.bind(this);
	}
    get infobase () {
        return parkinfo.filter(({id})=> id===this.state.activePark);
    }

	openInfo () {
		this.setState({ popout:
				<ActionSheet onClose={() => this.setState({ popout: null })}>
					<ActionSheetItem  autoclose onClick={() =>this.setState({activePanel:'park-history'})}>
						История предприятия
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
				<Panel id='park-history'>
					<PanelHeader
						left={<HeaderButton onClick={ () => this.setState({activePanel:'default', activePark: null})}>
							{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
						</HeaderButton>}
					>
						История парка №{this.state.activePark}
					</PanelHeader>
                    {this.infobase.map(infobase =>
					<p key={infobase.id} >
                    {infobase.info}
                        </p>)}
				</Panel>
			</View>
		)
	}
}

export default Parks;

