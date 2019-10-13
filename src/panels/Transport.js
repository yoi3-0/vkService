import React from 'react';
import { View, Panel, PanelHeader, ModalRoot,ModalPage, ModalPageHeader, Group, Gallery,
	HeaderButton, IOS, ANDROID, platform, InfoRow, Button, Cell, Search, List} from '@vkontakte/vkui';

import '../App.css';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Done from '@vkontakte/icons/dist/24/done';

const routes = [
	{id: 999, name: "Трамвай А", cost: '40', park: 'Трамвайный парк №7', sostav1:'ЛВС-86, 71-623',
		finalstop1:'река Оккервиль —', finalstop2:'река Оккервиль', metro1:'Проспект Большевиков', metro2: 'Улица Дыбенко'},
	{id: 1003, name: "Трамвай 3", cost: '40', park: 'Трамвайный парк №3, Трамвайный парк №7', sostav1:'ЛМ-68М2, ЛМ-68М3, ЛМ-99АВН, 71-301', sostav2:'71-623, 71-623-02, 71-631, 71-631-02',
		finalstop1:'площадь Репина —', finalstop2:' Финляндский вокзал', metro1:'Площадь Ленина', metro2: 'Невский проспект', metro3:'Гостиный двор', metro4: 'Сенная площадь'},
	{id: 1006, name: "Трамвай 6", cost: '40', park: 'Трамвайный парк №3, Трамвайный парк №3 (площадка №2)', sostav1:' ЛМ-68М3, ЛМ-99АВН, ЛВС-86, 71-623-03',
		finalstop1:'улица Кораблестроителей —', finalstop2:'Финляндский вокзал', metro1:'Площадь Ленина', metro2:'Горьковская', metro3:'Приморская', metro4:'Василеостровская', metro5: 'Спортивная'},
	{id: 1007, name: "Трамвай 7", cost: '40', park: 'Трамвайный парк №7', sostav1:' ЛМ-68М2, ЛВС-86, ЛВС-97, 71-301', sostav2:'71-623-02, 71-631, 71-631-02',
		finalstop1:'проспект Солидарности —', finalstop2:'Перекупной переулок', metro1:'Площадь Александра Невского', metro2:'Ломоносовская', metro3: 'Новочеркасская', metro4: 'Улица Дыбенко'},
	{id: 1008, name: "Трамвай 8", cost: '40', park: 'Трамвайное депо ООО "ТТК"', sostav1:' Stadler B85600M',
		finalstop1:'Хасанская улица —', finalstop2:'Ладожский вокзал', metro1:'Ладожская'},
	{id: 1009, name: "Трамвай 9", cost: '40', park: 'Трамвайный парк №5', sostav1:' ЛМ-99, ЛВС-86, ЛВС-97',
		finalstop1:'станция Пискарёвка — ', finalstop2:'станция метро Удельная', metro1:'Академическая', metro2:'Озерки', metro3:'Удельная'},
	{id: 1010, name: "Трамвай 10", cost: '40', park: 'Трамвайный парк №3, Трамвайный парк №7', sostav1:'ЛМ-68М3, 71-88, 71-631-02',
		finalstop1:'проспект Солидарности —', finalstop2:'Бокситогорская улица', metro1:'Новочеркасская', metro2:'Проспект Большевиков'},
	{id: 1016, name: "Трамвай 16", cost: '40', park: 'Трамвайный парк №3, Трамвайный парк №8', sostav1:'ЛМ-68М2, ЛМ-68М3, ЛМ-99, ЛМ-99АВН', sostav2:'ЛМ-2008, ЛВС-86',
		finalstop1:'Карбюраторный завод — ', finalstop2:'станция метро Нарвская', metro1:'Пушкинская', metro2:'Звенигородская', metro3:'Технологический институт', metro4:'Лиговский проспект', metro5:'Обводный канал', metro6:'Нарвская'},
	{id: 1018, name: "Трамвай 18", cost: '40', park: 'Трамвайный парк №5', sostav1:'ЛВС-86',
		finalstop1:'улица Шаврова — ', finalstop2:'станция метро Старая Деревня', metro1:'Старая деревня'},
	{id: 1019, name: "Трамвай 19", cost: '40', park: 'Трамвайный парк №5', sostav1:'ЛМ-99, ЛВС-86',
		finalstop1:'Лахтинский разлив — ', finalstop2:'платформа Старая Деревня', metro1:'Старая деревня', metro2:'Беговая'},
	{id: 1020, name: "Трамвай 20", cost: '40', park: 'Трамвайный парк №3, СТТП', sostav1:' ЛМ-68М2, ЛМ-68М3, ЛМ-99, ЛВС-86',
		finalstop1:'проспект Культуры — ', finalstop2:'Финляндский вокзал', metro1:'Лесная', metro2:'Выборгская', metro3:'Площадь Ленина', metro4:'Озерки', metro5:'Удельная'},
	{id: 1021, name: "Трамвай 21", cost: '40', park: 'Трамвайный парк №3', sostav1:'ЛМ-68М2, ЛМ-99АВН, ЛВС-86',
		finalstop1:'Придорожная аллея —', finalstop2:'Приморский проспект', metro1:'Проспект Просвещения', metro2:'Озерки', metro3:'Удельная', metro4:'Чёрная речка'},
	{id: 1023, name: "Трамвай 23", cost: '40', park: 'Трамвайный парк №3, Трамвайный парк №7', sostav1:'ЛМ-68М2, ЛМ-99, 71-301, 71-407, 71-623', sostav2:'71-623-02, ЛВС-86, ЛВС-97',
		finalstop1:'проспект Солидарности —', finalstop2:'Финляндский вокзал', metro1:'Площадь Ленина', metro2:'Новочеркасская', metro3:'Улица Дыбенко'},
	{id: 1024, name: "Трамвай 24", cost: '40', park: 'Трамвайный парк №7', sostav1:'ЛМ-99, ЛВС-86',
		finalstop1:'станция метро Рыбацкое  —', finalstop2:'Перекупной переулок', metro1:'Площадь Александра Невского', metro2:'Пролетарская', metro3:'Рыбацкое'},
	{id: 1025, name: "Трамвай 25", cost: '40', park: 'Трамвайный парк №1', sostav1:'ЛМ-99АВН, ЛМ-2008, ЛВС-2005, ЛВС-86',
		finalstop1:'станция метро Купчино — ', finalstop2:'улица Марата', metro1:'Купчино', metro2:'Лиговский проспект', metro3:'Волковская', metro4:'Обводный канал', metro5:'Бухарестская', metro6:'Международная', metro7:'Проспект Славы'},
	{id: 1027, name: "Трамвай 27", cost: '40', park: 'Трамвайный парк №7', sostav1:'ЛМ-99, ЛВС-86, ЛВС-97, 71-631, 71-631-02',
		finalstop1:'станция метро Рыбацкое -', finalstop2:'река Оккервиль', metro1:'Проспект Большевиков', metro2:'Пролетарская', metro3:'Рыбацкое', metro4:'Ломоносовская'},
	{id: 1029, name: "Трамвай 29", cost: '40', park: 'Трамвайный парк №1', sostav1:'ЛМ-99АВН, ЛМ-2008',
		finalstop1:'Мясокомбинат —', finalstop2:'трамвайный парк №1', metro1:'Звёздная', metro2:'Московская', metro3:'Парк Победы', metro4:'Электросила', metro5:'Московские ворота'},
	{id: 1036, name: "Трамвай 36", cost: '40', park: 'Трамвайный парк №8', sostav1:'ЛМ-99, ЛВС-86, ЛВС-97',
		finalstop1:'Оборонная улица -', finalstop2:'Стрельна', metro1:'Кировский завод', metro2:'Автово'},
	{id: 1038, name: "Трамвай 38", cost: '40', park: 'Трамвайный парк №3, СТТП', sostav1:'ЛМ-99, ЛМ-99АВН, ЛВС-86, ЛВС-97',
		finalstop1:'станция Пискарёвка — ', finalstop2:'станция Кушелевка', metro1:'Академическая', metro2:'Политехническая', metro3:'Площадь Мужества'},
	{id: 1039, name: "Трамвай 39", cost: '40', park: 'Трамвайный парк №7', sostav1:'71-631-02',
		finalstop1:'трамвайный парк №7 — ', finalstop2:'станция метро Новочеркасская', metro1:'Пролетарская', metro2:'Ломоносовская', metro3: 'Новочеркасская'},
	{id: 1040, name: "Трамвай 40", cost: '40', park: 'Трамвайный парк №3, Трамвайный парк №5', sostav1:'ЛМ-68М2, ЛМ-99АВН, 71-623-03, ЛВС-86',
		finalstop1:'Тихорецкий проспект —', finalstop2:'улица Кораблестроителей', metro5:'Петроградская', metro4:'Горьковская', metro1:'Приморская', metro2:'Василеостровская', metro3: 'Спортивная', metro6:'Чёрная речка', metro7:'Площадь Мужества', metro8:'Политехническая'},
	{id: 1041, name: "Трамвай 41", cost: '40', park: 'Трамвайный парк №8', sostav1:'ЛМ-99, ЛВС-86, ЛВС-97',
		finalstop1:'завод "Северная Верфь" -', finalstop2:'площадь Тургенева', metro1:'Кировский завод'},
	{id: 1043, name: "Трамвай 43", cost: '40', park: 'Трамвайный парк №1', sostav1:'ЛМ-99АВН, ЛМ-2008',
		finalstop1:'станция метро Купчино —', finalstop2:'станция метро Московские ворота', metro1:'Московские ворота', metro2:'Электросила', metro3:'Бухарестская', metro4:'Международная', metro5:'Проспект Славы', metro6:'Купчино'},
	{id: 1045, name: "Трамвай 45", cost: '40', park: 'Трамвайный парк №1', sostav1:'ЛМ-99АВН, ЛМ-2008',
		finalstop1:'станция метро Купчино — ', finalstop2:'проспект Юрия Гагарина', metro1:'Московская',metro2:'Парк Победы', metro3:'Бухарестская', metro4:'Международная', metro5:'Проспект Славы',metro6:'Дунайкая', metro7:'Купчино'},
	{id: 1047, name: "Трамвай 47", cost: '40', park: 'Трамвайный парк №5', sostav1:'ЛВС-86, ЛВС-97',
		finalstop1:'улица Шаврова —', finalstop2:'Удельный парк', metro1:'Пионерская', metro2:'Комендантский проспект'},
	{id: 1048, name: "Трамвай 48", cost: '40', park: 'Трамвайный парк №5', sostav1:'ЛМ-99, ЛВС-86, БКМ-843',
		finalstop1:'Лахтинский разлив —', finalstop2:'станция Кушелевка', metro1:'Чёрная речка', metro2:'Беговая'},
	{id: 1049, name: "Трамвай 49", cost: '40', park: 'Трамвайный парк №1', sostav1:'ЛМ-99АВН, ЛМ-2008, ЛВС-86, ЛВС-97', sostav2:'ЛВС-2005',
		finalstop1:'Малая Балканская улица —', finalstop2:'улица Марата', metro1:'Дунайская', metro2:'Лиговский проспект', metro3:'Волковская', metro4:'Обводный канал', metro5:'Бухарестская', metro6:'Международная', metro7:'Проспект Славы'},
	{id: 1051, name: "Трамвай 51", cost: '40', park: 'СТТП', sostav1:'ЛМ-99',
		finalstop1:'Суздальский проспект —', finalstop2:'станция Пискарёвка', metro1:'Гражданский проспект'},
	{id: 1052, name: "Трамвай 52", cost: '40', park: 'Трамвайный парк №8', sostav1:'ЛВС-86, ЛВС-97',
		finalstop1:'завод "Северная Верфь" —', finalstop2:'станция Сосновая Поляна', metro1:'Автово'},
	{id: 1055, name: "Трамвай 55", cost: '40', park: 'Трамвайный парк №5', sostav1:'ЛВС-86, ЛВС-97, 71-631, 71-631-02',
		finalstop1:'Придорожная аллея —', finalstop2:'Придорожная аллея —', metro1:'Политехническая', metro2: 'Площадь Мужества', metro3:'Проспект Просвещения', metro4:'Пионерская', metro5:'Комендантский проспект'},
	{id: 1057, name: "Трамвай 57", cost: '40', park: 'СТТП', sostav1:'ЛМ-99',
		finalstop1:'Тихорецкий проспект — ', finalstop2:'проспект Луначарского', metro1:'Академическая'},
	{id: 1058, name: "Трамвай 58", cost: '40', park: 'СТТП', sostav1:'ЛМ-99, ЛМ-99АВН, ЛВС-86, ЛВС-97',
		finalstop1:'проспект Культуры —', finalstop2:'улица Жени Егоровой', metro1:'Озерки', metro2:'Проспект Просвещения'},
	{id: 1059, name: "Трамвай 59", cost: '40', park: 'Трамвайное депо ООО"ТТК"', sostav1:' Stadler B85600M',
		finalstop1:'Ладожский вокзал —', finalstop2:'улица Электропультовцев', metro1:'Ладожская'},
	{id: 1060, name: "Трамвай 60", cost: '40', park: 'Трамвайный парк №8', sostav1:'ЛВС-86, Alstom Citadis 301 CIS, 71-931М',
		finalstop1:'завод "Северная Верфь" — ', finalstop2:'ЛЭМЗ', metro1:'Автово'},
	{id: 1061, name: "Трамвай 61", cost: '40', park: 'Трамвайный парк №5, CТТП', sostav1:'ЛМ-99, ЛМ-99АВН, ЛВС-86',
		finalstop1:'Суздальский проспект —', finalstop2:'станция метро Выборгская', metro1:'Политехническая', metro2: 'Площадь Мужества',metro3:'Лесная', metro4:'Выборгская'},
	{id: 1062, name: "Трамвай 62", cost: '40', park: 'Трамвайный парк №1', sostav1:'ЛМ-99АВН, ЛМ-2008, ЛВС-86, ЛВС-97, ЛВС-2005',
		finalstop1:'станция метро Купчино — ', finalstop2:'Малая Балканская улица', metro1:'Купчино', metro2:'Дунайская'},
	{id: 1063, name: "Трамвай 63", cost: '40', park: 'Трамвайное депо ООО"ТТК"', sostav1:' Stadler B85600M',
		finalstop1:'Ладожский вокзал —', finalstop2:'улица Передовиков', metro1:'Ладожская'},
	{id: 1064, name: "Трамвай 64", cost: '40', park: 'Трамвайное депо ООО"ТТК"', sostav1:' Stadler B85600M',
		finalstop1:'Ладожский вокзал —', finalstop2:'Ладожский вокзал', metro1:'Ладожская'},
	{id: 1100, name: "Трамвай 100", cost: '40', park: 'СТТП', sostav1:'ЛМ-99АВН, ЛВС-86, 71-923, 71-931', sostav2:'71-931М',
		finalstop1:'Придорожная аллея — ', finalstop2:' станция Ручьи', metro1:'Гражданский проспект', metro2: 'Проспект Просвещения'},
];
const osName=platform();
const IS_PLATFORM_ANDROID = (osName === ANDROID);
const IS_PLATFORM_IOS = (osName === IOS);





class Transport extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			activePanel:'default',
			activeModal: null,
			modalHistory: [],
			search: '',
            activeRoute:''
		};
		this.modalBack = () => {
			this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
		};
		this.onChange = this.onChange.bind(this);
		this.metro = this.metro.bind(this);
	}


	setActiveModal(activeModal) {
		activeModal = activeModal || null;
		let activeRoute='';
		let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

		if (activeModal === null) {
			modalHistory = [];
		} else if (modalHistory.indexOf(activeModal) !== -1) {
            activeRoute=activeModal[activeModal.length-1];
			modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
		} else {
            activeRoute=activeModal;
			modalHistory.push(activeModal);
			activeModal='tram'
		}
		//if (activeRoute==) activeRoute='A';
		this.setState({
            activeRoute,
			activeModal,
			modalHistory
		});
	};
	onChange (search) { this.setState({ search }); }

	get thematics () {
		const search = this.state.search.toLowerCase();
		return routes.filter(({name}) => name.toLowerCase().indexOf(search) > -1);
	}

	get infobase () {
		return routes.filter(({id})=> id===this.state.activeRoute);
	}

	metro(){

	}

	render()
	{
		const modal=(
			<ModalRoot activeModal={this.state.activeModal} >
				<ModalPage
					className='modal-page'
					id={'tram'}
					settlingHeight='30' //ono rabotaet ili net? chto za fignya???
					onClose={this.modalBack}
					header={
						<ModalPageHeader
							left={IS_PLATFORM_ANDROID && <HeaderButton onClick={this.modalBack}><Icon24Cancel /></HeaderButton>}
							right={<HeaderButton onClick={this.modalBack}>{IS_PLATFORM_IOS ? 'Готово' : <Icon24Done />}</HeaderButton>}
						>
							Трамвай {this.state.activeRoute-1000>-1? this.state.activeRoute-1000 : (this.state.activeRoute-1000===-1? 'A': ' ') }
						</ModalPageHeader>
					}
				>


					<div className='route-info'>
						<Group title='Маршрут'>
							{this.infobase.length > 0?
								<list>
									{this.infobase.map(infobase =>
										<Cell key={infobase.id} >
											<InfoRow title='Конечные остановки'>
												{infobase.finalstop1} <br/> {infobase.finalstop2}
											</InfoRow>
										</Cell>)}
									{this.infobase.map(infobase =>
										<Cell key={infobase.id} >
											<InfoRow title='Станции метро по пути следования' className='route-infoline'>
												{infobase.metro1}
												{'metro2' in infobase? <br/> : ''} {infobase.metro2}
												{'metro3' in infobase? <br/> : ''} {infobase.metro3}
												{'metro4' in infobase? <br/> : ''} {infobase.metro4}
												{'metro5' in infobase? <br/> : ''} {infobase.metro5}
												{'metro6' in infobase? <br/> : ''} {infobase.metro6}
												{'metro7' in infobase? <br/> : ''} {infobase.metro7}
												{'metro8' in infobase? <br/> : ''} {infobase.metro8}
													</InfoRow>
										</Cell>)}
								</list>:
								<inforow className='zaglushka'>
									Нет информации о пути следования
								</inforow>
							}
						</Group>
						<Group title='Другая информация'>
							{this.infobase.length > 0?
								<list>
									{this.infobase.map(infobase =>
										<Cell key={infobase.id} >
											<InfoRow title='Стоиимость проезда'>
												{infobase.cost}
											</InfoRow>
										</Cell>)}
									{this.infobase.map(infobase =>
										<Cell key={infobase.id} >
											<InfoRow title='Обслуживающие парки'>
												{infobase.park}
											</InfoRow>
										</Cell>)}
									{this.infobase.map(infobase =>
										<Cell key={infobase.id} >
											<InfoRow title='Подвижной состав'>
												{infobase.sostav1}
												{'sostav1' in infobase? <br/> : ''} {infobase.sostav2}
											</InfoRow>
										</Cell>)}
								</list>:
								<inforow className='zaglushka'>
									О данном маршруте нет дополнительной информации
								</inforow>
							}
						</Group>
					</div>
				</ModalPage>
			</ModalRoot>
		);


											//RETURN!!!!!!!!!!!!!!
											//RETURN!!!!!!!!!!!!!!
											//RETURN!!!!!!!!!!!!!!
											//RETURN!!!!!!!!!!!!!!
											//RETURN!!!!!!!!!!!!!!
		return (
			<View id={this.props.id} activePanel={this.state.activePanel} modal={modal}>
				<Panel id='default'>
					<div>
						<PanelHeader>
							Маршруты
						</PanelHeader>
						<Search value={this.state.search} onChange={this.onChange}/>
						{this.thematics.length > 0 ?
						<List>
							{this.thematics.map(thematic => <Cell key={thematic.id} onClick={() => this.setActiveModal(thematic.id)} >{thematic.name}</Cell>)}
						</List>:
							<InfoRow className='zaglushka'>
								Маршрут не найден.
							</InfoRow>
						}
					</div>
				</Panel>
			</View>
		);
	}
}

export default Transport;
