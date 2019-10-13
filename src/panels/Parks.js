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
            'Со 2 июня 2016 года вторая площадка возобновила работу.'},
	{id: '5', name: 'Трамвайный парк № 5 (Ланской; имени Калинина)', info: ''},
	{id: '7', name: 'Трамвайный парк № 7 (имени Володарского)', info: ''},
	{id: '8', name: 'Трамвайный парк № 8 (бывший №9 им. Котлякова)', info: ''},
	{id: '10', name: 'Совмещённый трамвайно-троллейбусный парк', info: ''},
	{id: '11', name: 'Трамвайный парк ООО«ТКК»', info: ''},
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
		this.TramPark5 = this.TramPark5.bind(this);
		this.TramPark7 = this.TramPark7.bind(this);
		this.TramPark8 = this.TramPark8.bind(this);
		this.TramPark0 = this.TramPark0.bind(this);
		this.TramPark11 = this.TramPark11.bind(this);
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
	TramPark5 () {
		this.setState({ activePark: '5'});
		this.openInfo();
	}
	TramPark7 () {
		this.setState({ activePark: '7'});
		this.openInfo();
	}
	TramPark8 () {
		this.setState({ activePark: '8'});
		this.openInfo();
	}
	TramPark0 () {
		this.setState({ activePark: '10'});
		this.openInfo();
	}

	TramPark11 () {
		this.setState({ activePark: '11'});
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
						>
							Трамвайный парк №1 <hr/>
							<InfoRow title='Расположение'>
								Московский проспект, 83
							</InfoRow>
							<InfoRow title='Телефон'>
								8 (812) 244-18-20
							</InfoRow>
							<InfoRow title='Обслуживает маршруты'>
								49, 43, 45, 25, 62, 29, 25, <u> 16 </u>
							</InfoRow>
							<InfoRow title='Подвижной состав'>
								ЛВС-86, ЛВС-97, ЛМ-99АВН, ЛВС-2005, ЛМ-2008
							</InfoRow>
							<InfoRow title='Дата открытия'>
								Октябрь 1907 года
							</InfoRow>
						</Cell
>
					</Group>
					<Group className='park_info'>
						<Cell

							size="l"
							asideContent={<Icon24MoreVertical onClick={this.TramPark3}/>}
						>
							Трамвайный парк №3 <hr/>
							<InfoRow title='Расположение'>
								Большая Посадская улица, 24/2.
							</InfoRow>
							<InfoRow title='Телефон'>
								8 (812) 232-36-16
							</InfoRow>
							<InfoRow title='Обслуживает маршруты'>
								3, 6, 10, 16, 20, 21, 23, 38, 40
							</InfoRow>
							<InfoRow title='Подвижной состав'>
								ЛВС-86, ЛМ-99АВН, 71-88, ЛМ-68М3, ЛМ-68М2
							</InfoRow>
							<InfoRow title='Дата открытия'>
								1876 год
							</InfoRow>
						</Cell>
					</Group>
					<Group className='park_info'>
						<Cell

							size="l"
							asideContent={<Icon24MoreVertical onClick={this.TramPark5}/>}
						>
							Трамвайный парк №5 <hr/>
							<InfoRow title='Расположение'>
								Сердобольская улица, 2г
							</InfoRow>
							<InfoRow title='Телефон'>
								8 (812) 232-36-16
							</InfoRow>
							<InfoRow title='Обслуживает маршруты'>
								9, 18, 19, 40, 47, 48 , 55, 61
							</InfoRow>
							<InfoRow title='Подвижной состав'>
								ЛВС-86, ЛМ-68М2, ЛМ-99К, 71-631, 71-631-02, 84300М
							</InfoRow>
							<InfoRow title='Дата открытия'>
								1917 год
							</InfoRow>
						</Cell>
					</Group>
					<Group className='park_info'>
						<Cell

							size="l"
							asideContent={<Icon24MoreVertical onClick={this.TramPark7}/>}
						>
							Трамвайный парк №7 <hr/>
							<InfoRow title='Расположение'>
								улица Грибакиных, 3
							</InfoRow>
							<InfoRow title='Телефон'>
								8 (812) 244-18-20
							</InfoRow>
							<InfoRow title='Обслуживает маршруты'>
								3, 7, 10, 23, 24, 27, 39, 65
							</InfoRow>
							<InfoRow title='Подвижной состав'>
								ЛВС-86, ЛМ-68М2, ЛМ-99К, ЛВС-97, 71-301, 71-631, 71-633
							</InfoRow>
							<InfoRow title='Дата открытия'>
								1931 год
							</InfoRow>
						</Cell>
					</Group>
					<Group className='park_info'>
						<Cell

							size="l"
							asideContent={<Icon24MoreVertical onClick={this.TramPark8}/>}
						>
							Трамвайный парк №8 <hr/>
							<InfoRow title='Расположение'>
								проспект Стачек, 114
							</InfoRow>
							<InfoRow title='Телефон'>
								8 (812) 783-11-28
							</InfoRow>
							<InfoRow title='Обслуживает маршруты'>
								16, 36, 41, 52, 56, 60
							</InfoRow>
							<InfoRow title='Подвижной состав'>
								ЛВС-86, ЛМ-68М2, ЛМ-99К, ЛВС-97, Alstom Citadis 301, 71-931М
							</InfoRow>
							<InfoRow title='Дата открытия'>
								1931 год
							</InfoRow>
						</Cell>
					</Group>
					<Group className='park_info'>
						<Cell

							size="l"
							asideContent={<Icon24MoreVertical onClick={this.TramPark0}/>}
						>
							Совмещённый трамвайно-троллейбусный парк <hr/>
							<InfoRow title='Расположение'>
								Гражданский проспект, 131
							</InfoRow>
							<InfoRow title='Телефон'>
								8 (812) 531-74-81
							</InfoRow>
							<InfoRow title='Обслуживает маршруты'>
								20, 38, 51, 57, 58, 61, 100
							</InfoRow>
							<InfoRow title='Подвижной состав'>
								ЛВС-86, ЛВС-97, ЛМ-99, 71-931, 71-923, 71-922
							</InfoRow>
							<InfoRow title='Дата открытия'>
								1931 год
							</InfoRow>
						</Cell>
					</Group>
					<Group className='park_info'>
						<Cell

							size="l"
							asideContent={<Icon24MoreVertical onClick={this.TramPark11}/>}
						>
							Трамвайный парк ООО«ТКК»<hr/>
							<InfoRow title='Расположение'>
								улица Потапова, 25
							</InfoRow>
							<InfoRow title='Телефон'>
								8 (812) 667-88-68
							</InfoRow>
							<InfoRow title='Обслуживает маршруты'>
								8, 59, 63, 64
							</InfoRow>
							<InfoRow title='Подвижной состав'>
								Stadler B85600M
							</InfoRow>
							<InfoRow title='Дата открытия'>
								Сентябрь 2019
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
						{this.state.activePark<10? 'История парка №'+this.state.activePark: this.state.activePark==10? 'История СТТП': 'История трамвайного депо ООО"ТТК"' }
					</PanelHeader>
                    {this.infobase.map(infobase =>
					<p key={infobase.id} >
						<h4 key={infobase.id}> {infobase.name}</h4>
                    {infobase.info}
                        </p>)}
				</Panel>
			</View>
		)
	}
}

export default Parks;

