import React from 'react';
import {
	View,
	Panel,
	PanelHeader,
	ActionSheet,
	Group,
	ActionSheetItem,
	Cell,
	Button,
	Div,
	InfoRow,
	platform,
	IOS
} from '@vkontakte/vkui';

import Icon24MoreVertical from '@vkontakte/icons/dist/24/more_vertical';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';


import '../App.css';
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";

const osName=platform();

const parkinfo = [
    {id: '1', name: 'Трамвайный парк №1 (имени Коняшина)', info: 'Открыт в октябре 1907 года под названием «Московский трамвайный парк». ' +
            'В 1922 году название «Московский» упразднено, вместо него парку присвоен №1 и имя И. И. Коняшина. ' +
            'В 1935 году из первого парка выделен в самостоятельную единицу грузовой трамвайный парк, получивший имя Е. И. Красуцкого, однако в 1971 году оба парка снова объединились.' +
            ' В  1997 году в Петербурге прекращены грузовые трамвайные перевозки, и парк №1 стал только пассажирским.'},
	{id: '2', name: 'Василеостровский трамвайный парк', info: 'Из стен этого парка 29 сентября 1907 года вышли вагоны на первые регулярные рейсы. ' +
			'В 1926 году парку было присвоено имя Александра Леонова, 15 апреля 1942 года после приостановления трамвайного движения во время блокады Ленинграда был одним из парков, возобновивших выпуск трамваев на линии.' +
			' В 1990-е годы получил №2. В 2003 году трамвайный парк № 2 был объединён с трамвайным парком № 3 имени К. Н. Блохина и формально функционировал как площадка № 2 трамвайного парка № 3.\n' +
			' В 2003—2005 годах из-за ремонта Среднего проспекта был изолирован от основной трамвайной сети и обслуживал единственный маршрут.\n' +
			' 15 января 2007 года парк был официально закрыт. Тем не менее, он продолжал использоваться для оборота подвижного состава, периодически обслуживал отрезанные из-за ремонтов на Петроградском острове маршруты Васильевского острова. В зданиях депо расположен Музей электрического транспорта Санкт-Петербурга ' +
			'В 2014 году Ансамбль трампарка № 2  стал  памятником культурного наследия регионального значения. '+
			'Незадолго до начала реконструкции Тучкова моста, 2 июня 2016 года, парк официально возобновил свою работу как площадка № 2 трамвайного парка № 3. Для возобновления работы из других парков были переданы вагоны ЛМ-68М3 и 71-623-03.'},
    {id: '3', name: 'Трамвайный парк №3 (имени Блохина)', info: 'Открыт в 1876 году как «Петербургский коночный парк»,' +
            ' с 1909 года — «Петербургский трамвайный парк».  На трамвае  20-го или 21-го маршрута В.И. Ленин ехал от 1-го Муринского проспекта до Боткинской улицы, когда пробирался с последней конспиративной квартиры в штаб революции — Смольный. Поехал бы он и дальше, через Литейный мост, но было поздно — вагон шёл в парк.' +
			' В 1922 году название «Петербургский» упразднено, вместо него парку присвоен номер «3» и имя К. Н. Блохина.' +
            ' В 2003 году трамвайные парки №2 и №3 были объединены под номером «3», с этого момента трамвайный парк № 3 стал первой площадкой выпуска вагонов, а территория парка №2 — второй площадкой. ' +
            '15 января 2007 года площадка №2 была закрыта, начиная с этого времени и до возобновления работы у трампарка № 3 вновь осталась только одна площадка. ' +
            'Со 2 июня 2016 года вторая площадка возобновила работу.'},
	{id: '5', name: 'Трамвайный парк №5 (Ланской; имени Калинина)', info: 'Открыт в сентябре 1917 года под именем «Ланской трамвайный парк». ' +
			'В 1922 году название «Ланской» упразднено, вместо него парку присвоен № 5 и имя М. И. Калинина. После распада СССР у парка убрали имя Калинина, оставив номер и восстановив название «Ланской». ' +
			'В 2009 году у парка появился филиал на улице Шаврова. С декабря 2002 года по 2009 год вагоны парка имели собственную окраску: цвет вагонов был белым, в самом низу располагалась красная полоса.'},
	{id: '7', name: 'Трамвайный парк №7 (имени Володарского)', info: 'Открыт в ноябре 1931 года, парку сразу был присвоен №7 и имя В. Володарского. ' +
			'В 1994 году у парка появился филиал на конечной станции у метро «Рыбацкое». С 1997 по 2009 год вагоны парка имели собственную окраску: она была аналогична обычной, но цветовая гамма вагонов была голубой.'},
	{id: '8', name: 'Трамвайный парк №8 (бывший №9 им. Котлякова)', info: 'Открыт в январе 1916 года как депо «Княжево» Ораниенбаумской электрической линии (ОРАНЭЛ). В начале 1930-х годов ОРАНЭЛа передана в трамвайное ведомство, название «Княжево» упразднено,' +
			' и вместо него парку присвоен №9 и имя И. Е. Котлякова, однако вплоть до 1 июня 1958 года территория парка использовалась только как площадка отстоя.' +
			' В 2003 году парки №8 и №9 были объединены под №8, с этого момента трамвайный парк №9 номинально перестал существовать, теперь его название звучит как «площадка №2 трамвайного парка №8». Вскоре после объединения, ' +
			'вторая площадка стала единственной площадкой парка №8 с выпуском вагонов, первая площадка служит для технических целей.'},
	{id: '10', name: 'Совмещённый трамвайно-троллейбусный парк', info: 'Открыт в октябре 1981 года, был первым совмещёным парком, номинально парк имеет №10, но, как правило, парк по номеру не называют, употребляя сокращение СТТП.' +
			'Вагоны парка имеют бортовые номера 0xxx.'},
	{id: '11', name: 'Трамвайное депо ООО «ТКК»', info: 'В 1979 году было принято решение о строительстве ещё одного парка в нежилой зоне Ржевки для обслуживания быстрорастущих жилых массивов на Ржевке и в Весёлом Посёлке, парк получил условный номер 11. ' +
			'В конце 1980-х годов началось строительство, шло оно очень медленно и в 1995 году было заморожено.' +
			' В 2017 году начато строительство нового трамвайного парка для частного перевозчика «ТКК». При этом снос старых сооружений не предполагался.' +
			' 1 сентября 2019 года трамвайный парк был введён в эксплуатацию.'},
];

class Parks extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			popout: null,
			activePanel:'default',
			activePark: null,
            activeIframe: null,
		};
		this.openInfo = this.openInfo.bind(this);
        this.MapView = this.MapView.bind(this);
		this.TramPark1 = this.TramPark1.bind(this);
		this.TramPark2 = this.TramPark2.bind(this);
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
    MapView(){
	    console.log('map for #',this.state.activePark);
	    switch(this.state.activePark)
        {
            case '1': this.setState({activeIframe:
                    <iframe
                        id='1'
                        className='mapview'
                        title='1'
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aab5dbe04d64cf3da0d0cf0292a13ed265aa650da4c64c674acc4a34d61914260&amp;source=constructor"
                        width="500" height="400" frameBorder="0"/>
            }); break;
            case '2': this.setState({activeIframe:
                    <iframe
                        id='3'
                        className='mapview'
                        title='3'
                        src = "https://yandex.ru/map-widget/v1/?um=constructor%3A9c78e8072ae3800b96805da604be955108dad0b5cd412b4f9bf8b310ae1d52e4&amp;source=constructor"
                        width = "500" height = "400" frameBorder = "0" />
            }); break;
            case '3': this.setState({activeIframe:
                    <iframe
                        id='3'
                        className='mapview'
                        title='3'
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A5e086c17843b382deca48fee8630ecdfddb71ad2b577ea4f9a3512fdca019622&amp;source=constructor"
                        width="500" height="400" frameBorder="0"/>
            }); break;
            case '5': this.setState({activeIframe:
                    <iframe
                        id='5'
                        className='mapview'
                        title='5'
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aab96bd2dc0f0f777c8e3de8e3c1fa2a8ef41579cecf766be0c2c139020a48ea9&amp;source=constructor"
                        width="500" height="400" frameBorder="0"/>
            }); break;
            case '7': this.setState({activeIframe:
                    <iframe
                        id='7'
                        className='mapview'
                        title='7'
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A6f2eae47d8264de236fdf9ee206a667d4ed9acd4293b1eaf7090b9e0d8bca983&amp;source=constructor"
                        width="500" height="400" frameBorder="0"/>
            }); break;
            case '8': this.setState({activeIframe:
                    <iframe
                        id='8'
                        className='mapview'
                        title='8'
						src="https://yandex.ru/map-widget/v1/?um=constructor%3Abf470f0676a1546b4d71ef70b683b1589c1635ac5aa469e2bc1dc14ea72f197a&amp;source=constructor"
                        width="500" height="400" frameBorder="0"/>
            }); break;
            case '10': this.setState({activeIframe:
                    <iframe
                        id='10'
                        className='mapview'
                        title='10'
						src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae26e9b951e420eb6cc78da7c2fd6eec8ad21b478d641a6824e3295c2f777d25d&amp;source=constructor"
                        width="500" height="400" frameBorder="0"/>
            }); break;
            case '11': this.setState({activeIframe:
                    <iframe
                        id='11'
                        className='mapview'
                        title='11'
						src="https://yandex.ru/map-widget/v1/?um=constructor%3A187db803f08a62fd862413419dbb58d995622b16e9bf1ab0394369ade5c37459&amp;source=constructor"
                        width="500" height="400" frameBorder="0"/>
            }); break;
            default: this.setState({activeIframe: 'Карта не найдена! Сообщите об ошибке, пожалуйста.'
            }); break;
        }
        this.setState({activePanel: 'park_map'})
    }
	openInfo () {
		this.setState({ popout:
				<ActionSheet onClose={() => this.setState({ popout: null })}>
                    <ActionSheetItem  autoclose onClick={this.MapView}>
                        Показать на карте
                    </ActionSheetItem>
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
	TramPark2 () {
		this.setState({ activePark: '2'});
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
						>
							Трамвайный парк №1 <hr/>
							<InfoRow title='Расположение'>
								Московский проспект, 83
							</InfoRow>
							<InfoRow title='Телефон'>
								8 (812) 244-18-20
							</InfoRow>
							<InfoRow title='Обслуживает маршруты'>
								49, 43, 45, 25, 62, 29, 25, 16
							</InfoRow>
							<InfoRow title='Подвижной состав'>
								ЛВС-86, ЛВС-97, ЛМ-99АВН, ЛВС-2005,<br/>  ЛМ-2008
							</InfoRow>
							<InfoRow title='Дата открытия'>
								Октябрь 1907 года
							</InfoRow>
							<Button size="xl" level="secondary" onClick={this.TramPark1}>Дополнительная информация</Button>
						</Cell
>
					</Group>
					<Group className='park_info'>
						<Cell

							size="l"
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
								ЛВС-86, ЛМ-99АВН, 71-88, ЛМ-68М3, <br/> ЛМ-68М2
							</InfoRow>
							<InfoRow title='Дата открытия'>
								1876 год
							</InfoRow>
							<Button size="xl" level="secondary" onClick={this.TramPark3}>Дополнительная информация</Button>
						</Cell>
					</Group>
					<Group className='park_info'>
						<Cell

							size="l"
						>
							Трамвайный парк № 3, площадка № 2 <hr/>
							<InfoRow title='Расположение'>
								Средний проспект В.О., 77/79.
							</InfoRow>
							<InfoRow title='Телефон'>
								8 (812) 321-54-05
							</InfoRow>
							<InfoRow title='Обслуживает маршруты'>
								T1, 6, 40
							</InfoRow>
							<InfoRow title='Подвижной состав'>
								71-623-03, ЛВС-86К, ЛМ-68М3 <br/> 71-134А
							</InfoRow>
							<InfoRow title='Дата открытия'>
								1907 год
							</InfoRow>
							<Button size="xl" level="secondary" onClick={this.TramPark2}>Дополнительная информация</Button>
						</Cell>
					</Group>
					<Group className='park_info'>
						<Cell

							size="l"
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
								ЛВС-86, ЛМ-68М2, ЛМ-99К, 71-631,<br/>  71-631-02, 84300М
							</InfoRow>
							<InfoRow title='Дата открытия'>
								1917 год
							</InfoRow>
							<Button size="xl" level="secondary" onClick={this.TramPark5}>Дополнительная информация</Button>
						</Cell>
					</Group>
					<Group className='park_info'>
						<Cell

							size="l"
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
								ЛВС-86, ЛМ-68М2, ЛМ-99К, ЛВС-97,<br/>  71-301, 71-631, 71-633
							</InfoRow>
							<InfoRow title='Дата открытия'>
								1931 год
							</InfoRow>
							<Button size="xl" level="secondary" onClick={this.TramPark7}>Дополнительная информация</Button>
						</Cell>
					</Group>
					<Group className='park_info'>
						<Cell

							size="l"
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
								ЛВС-86, ЛМ-68М2, ЛМ-99К, ЛВС-97, <br/>  Alstom Citadis 301, 71-931М
							</InfoRow>
							<InfoRow title='Дата открытия'>
								1916 год
							</InfoRow>
							<Button size="xl" level="secondary" onClick={this.TramPark8}>Дополнительная информация</Button>
						</Cell>
					</Group>
					<Group className='park_info'>
						<Cell

							size="l"
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
								ЛВС-86, ЛВС-97, ЛМ-99, 71-931, <br/> 71-923, 71-922
							</InfoRow>
							<InfoRow title='Дата открытия'>
								1981 год
							</InfoRow>
							<Button size="xl" level="secondary" onClick={this.TramPark0}>Дополнительная информация</Button>
						</Cell>
					</Group>
					<Group className='park_info'>
						<Cell

							size="l"
						>
							Трамвайное депо ООО «ТКК»<hr/>
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
							<Button size="xl" level="secondary" onClick={this.TramPark11}>Дополнительная информация</Button>
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
					<Group key={infobase.id} >
						<Div>
							<h4 > {infobase.name}</h4>
							{infobase.info}
						</Div>
                        </Group>)}
				</Panel>
                <Panel id='park_map'>
                    <PanelHeader
                        left={<HeaderButton onClick={ () => this.setState({activePanel:'default', activePark: null})}>
                            {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                        </HeaderButton>}
                    >
                        {this.state.activePark<10? 'Парк №'+this.state.activePark: this.state.activePark==10? 'СТТП': 'Трамвайное депо ООО"ТТК"' } на карте
                    </PanelHeader>
                    <div className='mapview'>
                        {this.state.activeIframe}
                    </div>
                </Panel>
			</View>
		)
	}
}

export default Parks;

