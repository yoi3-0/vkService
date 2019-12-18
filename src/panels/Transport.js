import React from 'react';
import {
	View, Panel, PanelHeader, ModalRoot, ModalPage, ModalPageHeader, Group,Alert, Placeholder, Snackbar,
	HeaderButton, IOS, ANDROID, platform, Separator ,InfoRow, Button, Cell, Avatar, Search, List, Div
} from '@vkontakte/vkui';

import '../App.css';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon16Place from '@vkontakte/icons/dist/16/place';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24DoNotDisturb from '@vkontakte/icons/dist/24/do_not_disturb';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';

const routes = [
	{id: 998, name: "Трамвай Т1", cost: '100', park: 'Трамвайный парк №3', sostav1:'ЛМ-33 (реплика)', col1:'red', col2:'red',
		schedule: 'От музея ГЭТ в 10:00, 13:00, 16:00, 19:00',  lchange: 'Маршрут запущен в октябре 2019 г.',
		finalstop1:'музей ГЭТ —', finalstop2:'Инженерная улица', metro1:'Василеостровская', metro2: 'Спортивная', metro3: 'Горьковская', metro4: 'Площадь Ленина'},
	{id: 999, name: "Трамвай А", cost: '40', park: 'Трамвайный парк №7', sostav1:'ЛВС-86, 71-623', col1:'yellow', col2:'yellow', working_days: '',
		lchange: 'В 2001 г. изменена конечная остановка',
		finalstop1:'река Оккервиль —', finalstop2:'река Оккервиль', metro1:'Проспект Большевиков', metro2: 'Улица Дыбенко'},
	{id: 1003, name: "Трамвай 3", cost: '40', park: 'Трамвайные парк №3, №7',
		sostav1:'ЛМ-68М2, ЛМ-68М3, ЛМ-99АВН, 71-301', sostav2:'71-623, 71-623-02, 71-631, 71-631-02', col1:'yellow', col2:'blue', lchange:'Продлён в 2016 г.',
		finalstop1:'площадь Репина —', finalstop2:' Финляндский вокзал', metro1:'Площадь Ленина', metro2: 'Невский проспект', metro3:'Гостиный двор', metro4: 'Сенная площадь'},
	{id: 1006, name: "Трамвай 6", cost: '40', park: 'Трамвайный парк №3',
		sostav1:' ЛМ-68М3, ЛМ-99АВН, ЛВС-86, 71-623-03', col1:'blue', col2:'blue', lchange:'Продлён в 2017 г.',
		finalstop1:'улица Кораблестроителей —', finalstop2:'Финляндский вокзал', metro1:'Площадь Ленина', metro2:'Горьковская', metro3:'Приморская', metro4:'Василеостровская', metro5: 'Спортивная'},
	{id: 1007, name: "Трамвай 7", cost: '40', park: 'Трамвайный парк №7',
		sostav1:' ЛМ-68М2, ЛВС-86, ЛВС-97, 71-301', sostav2:'71-623-02, 71-631, 71-631-02', col1:'green', col2:'green', lchange:'Урезан в 2019 г.',
		finalstop1:'проспект Солидарности —', finalstop2:'Перекупной переулок', metro1:'Площадь Александра Невского', metro2:'Ломоносовская', metro3: 'Новочеркасская', metro4: 'Улица Дыбенко'},
	{id: 1008, name: "Трамвай 8", cost: '40', park: 'Трамвайное депо ООО "ТТК"', sostav1:' Stadler B85600M', col1:'green', col2:'yellow', lchange:'Вновь открыт в 2018 г.',
		finalstop1:'Хасанская улица —', finalstop2:'Ладожский вокзал', metro1:'Ладожская'},
	{id: 1009, name: "Трамвай 9", cost: '40', park: 'Трамвайный парк №5', sostav1:' ЛМ-99, ЛВС-86, ЛВС-97', col1:'white', col2:'white', lchange:'Изменён в 2013 г.',
		finalstop1:'станция Пискарёвка — ', finalstop2:'станция метро Удельная', metro1:'Академическая', metro2:'Озерки', metro3:'Удельная'},
	{id: 1010, name: "Трамвай 10", cost: '40', park: 'Трамвайные парки №3, №7',
		sostav1:'ЛМ-68М3, 71-88, 71-631-02', col1:'green', col2:'blue', lchange:'Урезан в 2019 г.',
		finalstop1:'проспект Солидарности —', finalstop2:'Бокситогорская улица', metro1:'Новочеркасская', metro2:'Проспект Большевиков'},
	{id: 1016, name: "Трамвай 16", cost: '40', park: 'Трамвайные парки №1, №3, №8', lchange:'Продлён в 2013 г.',
		sostav1:'ЛМ-68М2, ЛМ-68М3, ЛМ-99, ЛМ-99АВН', sostav2:'ЛМ-2008, ЛВС-86',  col1:'white', col2:'green',
		finalstop1:'Карбюраторный завод — ', finalstop2:'станция метро Нарвская', metro1:'Пушкинская', metro2:'Звенигородская', metro3:'Технологический институт', metro4:'Лиговский проспект', metro5:'Обводный канал', metro6:'Нарвская'},
	{id: 1018, name: "Трамвай 18", cost: '40', park: 'Трамвайный парк №5', sostav1:'ЛВС-86',  col1:'white', col2:'blue', lchange:'Изменён в 2018 г.',
		finalstop1:'улица Шаврова — ', finalstop2:'станция метро Старая Деревня', metro1:'Старая деревня'},
	{id: 1019, name: "Трамвай 19", cost: '40', park: 'Трамвайный парк №5', sostav1:'ЛМ-99, ЛВС-86',  col1:'blue', col2:'white', lchange:'Вновь открыт в 2000 г.',
		finalstop1:'Лахтинский разлив — ', finalstop2:'платформа Старая Деревня', metro1:'Старая деревня', metro2:'Беговая'},
	{id: 1020, name: "Трамвай 20", cost: '40', park: 'Трамвайный парк №3, СТТП', sostav1:' ЛМ-68М2, ЛМ-68М3, ЛМ-99, ЛВС-86',  col1:'green', col2:'white',
		lchange:'Изменён в 2004 г.',
		finalstop1:'проспект Культуры — ', finalstop2:'Финляндский вокзал', metro1:'Лесная', metro2:'Выборгская', metro3:'Площадь Ленина', metro4:'Озерки', metro5:'Удельная'},
	{id: 1021, name: "Трамвай 21", cost: '40', park: 'Трамвайный парк №3', sostav1:'ЛМ-68М2, ЛМ-99АВН, ЛВС-86',  col1:'yellow', col2:'white', lchange:'Изменён в 2006 г.',
		finalstop1:'Придорожная аллея —', finalstop2:'Приморский проспект', metro1:'Проспект Просвещения', metro2:'Озерки', metro3:'Удельная', metro4:'Чёрная речка'},
	{id: 1023, name: "Трамвай 23", cost: '40', park: 'Трамвайные парки №3, №7', lchange:'Изменён в 2000 г.',
		sostav1:'ЛМ-68М2, ЛМ-99, 71-301, 71-407, 71-623', sostav2:'71-623-02, ЛВС-86, ЛВС-97',  col1:'blue', col2:'green',
		finalstop1:'проспект Солидарности —', finalstop2:'Финляндский вокзал', metro1:'Площадь Ленина', metro2:'Новочеркасская', metro3:'Улица Дыбенко'},
	{id: 1024, name: "Трамвай 24", cost: '40', park: 'Трамвайный парк №7', sostav1:'ЛМ-99, ЛВС-86',  col1:'blue', col2:'yellow', lchange:'Продлён в 2017 г.',
		finalstop1:'станция метро Рыбацкое  —', finalstop2:'Перекупной переулок', metro1:'Площадь Александра Невского', metro2:'Пролетарская', metro3:'Рыбацкое'},
	{id: 1025, name: "Трамвай 25", cost: '40', park: 'Трамвайный парк №1', lchange:'Урезан в 2007 г.',
		sostav1:'ЛМ-99АВН, ЛМ-2008, ЛВС-2005, ЛВС-86',  col1:'red', col2:'green',
		finalstop1:'станция метро Купчино — ', finalstop2:'улица Марата', metro1:'Купчино', metro2:'Лиговский проспект', metro3:'Волковская', metro4:'Обводный канал', metro5:'Бухарестская', metro6:'Международная', metro7:'Проспект Славы'},
	{id: 1027, name: "Трамвай 27", cost: '40', park: 'Трамвайный парк №7', lchange:'Изменён в 1993 г.',
		sostav1:'ЛМ-99, ЛВС-86, ЛВС-97, 71-631, 71-631-02',  col1:'red', col2:'blue',
		finalstop1:'станция метро Рыбацкое -', finalstop2:'река Оккервиль', metro1:'Проспект Большевиков', metro2:'Пролетарская', metro3:'Рыбацкое', metro4:'Ломоносовская'},
	{id: 1029, name: "Трамвай 29", cost: '40', park: 'Трамвайный парк №1', sostav1:'ЛМ-99АВН, ЛМ-2008',  col1:'blue', col2:'blue', lchange:'Урезан в 2006 г.',
		finalstop1:'Мясокомбинат —', finalstop2:'Трамвайный парк №1', metro1:'Звёздная', metro2:'Московская', metro3:'Парк Победы', metro4:'Электросила', metro5:'Московские ворота'},
	{id: 1036, name: "Трамвай 36", cost: '40', park: 'Трамвайный парк №8', sostav1:'ЛМ-99, ЛВС-86, ЛВС-97',  col1:'red', col2:'red', lchange:'Изменён в 2006 г.',
		finalstop1:'Оборонная улица -', finalstop2:'Стрельна', metro1:'Кировский завод', metro2:'Автово'},
	{id: 1038, name: "Трамвай 38", cost: '40', park: 'Трамвайный парк №3, СТТП', sostav1:'ЛМ-99, ЛМ-99АВН, ЛВС-86, ЛВС-97',  col1:'blue', col2:'yellow',
		lchange:'Урезан в 2018 г.',
		finalstop1:'станция Пискарёвка — ', finalstop2:'станция Кушелевка', metro1:'Академическая', metro2:'Политехническая', metro3:'Площадь Мужества'},
	{id: 1039, name: "Трамвай 39", cost: '40', park: 'Трамвайный парк №7', sostav1:'71-631-02',  col1:'red', col2:'red', lchange:'Продлён в 2006 г.',
		finalstop1:'трамвайный парк №7 — ', finalstop2:'станция метро Новочеркасская', metro1:'Пролетарская', metro2:'Ломоносовская', metro3: 'Новочеркасская'},
	{id: 1040, name: "Трамвай 40", cost: '40', park: 'Трамвайные парк №3, №5',
		sostav1:'ЛМ-68М2, ЛМ-99АВН, 71-623-03, ЛВС-86',  col1:'green', col2:'green', lchange:'Изменён в 2017 г.',
		finalstop1:'Тихорецкий проспект —', finalstop2:'улица Кораблестроителей', metro5:'Петроградская', metro4:'Горьковская', metro1:'Приморская', metro2:'Василеостровская', metro3: 'Спортивная', metro6:'Чёрная речка', metro7:'Площадь Мужества', metro8:'Политехническая'},
	{id: 1041, name: "Трамвай 41", cost: '40', park: 'Трамвайный парк №8', sostav1:'ЛМ-99, ЛВС-86, ЛВС-97',  col1:'green', col2:'green', lchange:'Урезан в 2019 г.',
		finalstop1:'завод "Северная Верфь" -', finalstop2:'площадь Тургенева', metro1:'Кировский завод'},
	{id: 1043, name: "Трамвай 43", cost: '40', park: 'Трамвайный парк №1', sostav1:'ЛМ-99АВН, ЛМ-2008',  col1:'white', col2:'white', lchange:'Урезан в 2006 г.',
		finalstop1:'станция метро Купчино —', finalstop2:'станция метро Московские ворота', metro1:'Московские ворота', metro2:'Электросила', metro3:'Бухарестская', metro4:'Международная', metro5:'Проспект Славы', metro6:'Купчино'},
	{id: 1045, name: "Трамвай 45", cost: '40', park: 'Трамвайный парк №1', sostav1:'ЛМ-99АВН, ЛМ-2008',  col1:'red', col2:'red', lchange:'Продлён в 1986 г.',
		finalstop1:'станция метро Купчино — ', finalstop2:'проспект Юрия Гагарина', metro1:'Московская',metro2:'Парк Победы', metro3:'Бухарестская', metro4:'Международная', metro5:'Проспект Славы',metro6:'Дунайкая', metro7:'Купчино'},
	{id: 1047, name: "Трамвай 47", cost: '40', park: 'Трамвайный парк №5', sostav1:'ЛВС-86, ЛВС-97', col1:'red', col2:'red', lchange:'Вновь открыт в 2018 г.',
		finalstop1:'улица Шаврова —', finalstop2:'Удельный парк', metro1:'Пионерская', metro2:'Комендантский проспект'},
	{id: 1048, name: "Трамвай 48", cost: '40', park: 'Трамвайный парк №5', sostav1:'ЛМ-99, ЛВС-86, БКМ-843', col1:'blue', col2:'blue', lchange:'Вновь открыт в 1993 г.',
		finalstop1:'Лахтинский разлив —', finalstop2:'станция Кушелевка', metro1:'Чёрная речка', metro2:'Беговая'},
	{id: 1049, name: "Трамвай 49", cost: '40', park: 'Трамвайный парк №1', lchange:'Урезан в 1992 г.',
		sostav1:'ЛМ-99АВН, ЛМ-2008, ЛВС-86, ЛВС-97', sostav2:'ЛВС-2005', col1:'blue', col2:'red',
		finalstop1:'Малая Балканская улица —', finalstop2:'улица Марата', metro1:'Дунайская', metro2:'Лиговский проспект', metro3:'Волковская', metro4:'Обводный канал', metro5:'Бухарестская', metro6:'Международная', metro7:'Проспект Славы'},
	{id: 1051, name: "Трамвай 51", cost: '40', park: 'СТТП', sostav1:'ЛМ-99', col1:'red', col2:'yellow', lchange:'Урезан 2006 г.',
		finalstop1:'Суздальский проспект —', finalstop2:'станция Пискарёвка', metro1:'Гражданский проспект'},
	{id: 1052, name: "Трамвай 52", cost: '40', park: 'Трамвайный парк №8', sostav1:'ЛВС-86, ЛВС-97', col1:'green', col2:'red', lchange:'Изменён в 1992 г.',
		finalstop1:'завод "Северная Верфь" —', finalstop2:'станция Сосновая Поляна', metro1:'Автово'},
	{id: 1055, name: "Трамвай 55", cost: '40', park: 'Трамвайный парк №5', lchange:'Пролён в 2018 г.',
		sostav1:'ЛВС-86, ЛВС-97, 71-631, 71-631-02', col1:'red', col2:'blue',
		finalstop1:'Придорожная аллея —', finalstop2:'Придорожная аллея —', metro1:'Политехническая', metro2: 'Площадь Мужества', metro3:'Проспект Просвещения', metro4:'Пионерская', metro5:'Комендантский проспект'},
	{id: 1056, name: "Трамвай 56", cost: '40', park: 'Трамвайный парк №8', sostav1:'ЛВС-86, ЛВС-97', col1:'yellow', col2:'green', working_days: '',
		lchange:'Урезан в 2003 г.',
		finalstop1:'завод "Северная Верфь" —', finalstop2:'улица Маршала Казакова, 22', metro1:'Автово'},
	{id: 1057, name: "Трамвай 57", cost: '40', park: 'СТТП', sostav1:'ЛМ-99', col1:'blue', col2:'white', lchange:'Вновь открыт в 2009 г.',
		finalstop1:'Тихорецкий проспект — ', finalstop2:'проспект Луначарского', metro1:'Академическая'},
	{id: 1058, name: "Трамвай 58", cost: '40', park: 'СТТП', sostav1:'ЛМ-99, ЛМ-99АВН, ЛВС-86, ЛВС-97', col1:'blue', col2:'red', lchange:'Продлён в 2005 г.',
		finalstop1:'проспект Культуры —', finalstop2:'улица Жени Егоровой', metro1:'Озерки', metro2:'Проспект Просвещения'},
	{id: 1059, name: "Трамвай 59", cost: '40', park: 'Трамвайное депо ООО"ТТК"', sostav1:' Stadler B85600M', col1:'yellow', col2:'white', lchange:'Вновь открыт в 2019 г.',
		finalstop1:'Ладожский вокзал —', finalstop2:'улица Электропультовцев', metro1:'Ладожская'},
	{id: 1060, name: "Трамвай 60", cost: '40', park: 'Трамвайный парк №8', lchange:'Продлён в 2019 г.',
		sostav1:'ЛВС-86, Alstom Citadis 301 CIS, 71-931М', col1:'white', col2:'blue',
		finalstop1:'завод "Северная Верфь" — ', finalstop2:'ЛЭМЗ', metro1:'Автово'},
	{id: 1061, name: "Трамвай 61", cost: '40', park: 'Трамвайный парк №5, CТТП', sostav1:'ЛМ-99, ЛМ-99АВН, ЛВС-86', col1:'yellow', col2:'yellow',
		lchange:'Продлён в 2018 г.',
		finalstop1:'Суздальский проспект —', finalstop2:'станция метро Выборгская', metro1:'Политехническая', metro2: 'Площадь Мужества',metro3:'Лесная', metro4:'Выборгская'},
	{id: 1062, name: "Трамвай 62", cost: '40', park: 'Трамвайный парк №1', lchange:'Изменён в 1986 г.',
		sostav1:'ЛМ-99АВН, ЛМ-2008, ЛВС-86, ЛВС-97, ЛВС-2005', col1:'green', col2:'green',
		finalstop1:'станция метро Купчино — ', finalstop2:'Малая Балканская улица', metro1:'Купчино', metro2:'Дунайская'},
	{id: 1063, name: "Трамвай 63", cost: '40', park: 'Трамвайное депо ООО"ТТК"', sostav1:' Stadler B85600M', col1:'blue', col2:'red', lchange:'Вновь открыт в 2019 г.',
		finalstop1:'Ладожский вокзал —', finalstop2:'улица Передовиков', metro1:'Ладожская'},
	{id: 1064, name: "Трамвай 64", cost: '40', park: 'Трамвайное депо ООО"ТТК"', sostav1:' Stadler B85600M', col1:'red', col2:'yellow', lchange:'Вновь открыт в 2019 г.',
		finalstop1:'Ладожский вокзал —', finalstop2:'станция Ржевка', metro1:'Ладожская'},
	{id: 1065, name: "Трамвай 65", cost: '40', park: 'Трамвайный парк №7', sostav1:'ЛМ-99, ЛВС-86', col1:'green', col2:'white', working_days: '', lchange:'Изменён в 2017 г.',
		finalstop1:'река Оккервиль —', finalstop2:'Невский завод', metro1:'Проспект Большевиков', metro2:'Новочеркасская', metro3:'Площадь Александра Невского'},
	{id: 1100, name: "Трамвай 100", cost: '40', park: 'СТТП', sostav1:'ЛМ-99АВН, ЛВС-86, 71-923, 71-931', sostav2:'71-931М', col1:'white', col2:'yellow',
		lchange:'Изменён в 2009 г.',
		finalstop1:'Придорожная аллея — ', finalstop2:' станция Ручьи', metro1:'Гражданский проспект', metro2: 'Проспект Просвещения'},
];
const osName=platform();
const IS_PLATFORM_ANDROID = (osName === ANDROID);
const IS_PLATFORM_IOS = (osName === IOS);
const TextButton = props => (
    <div>
        Маршрут
        <Button
            className="Header_button"
            before={<Icon16Place/>}
            onClick={props.routepic}
        >
            Карта
        </Button>
    </div>
);


class Transport extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			activePanel:'default',
			activeModal: null,
			modalHistory: [],
			search: '',
            activeRoute:'',
			activeIframe: null,
			snackbar: null,
			popout: null,
		};
		this.modalBack = () => {
			this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
			this.setState({snackbar:null});
		};
		this.openAlert = this.openAlert.bind(this);
		this.closePopout = this.closePopout.bind(this);
		this.onChange = this.onChange.bind(this);
		this.metro = this.metro.bind(this);
        this.routepic = this.routepic.bind(this);
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
					<h2>Ограничение на количество символов</h2>
					<p>Нельзя вводить больше 15 символов в поиск.</p>
				</Alert>
		});
	}
	closePopout () {
		this.setState({ popout: null });
	}
    routepic()
    {
    	let activeModal=null;
    	let modalHistory=[];       //time to kostil
    	console.log('history cleared');
		this.setState({
			activePanel: 'route_map', activeModal, modalHistory,
			},);
    	switch (this.state.activeRoute-1000) {
			case -2: this.setState({
				activeIframe: <iframe
					id='-2'
					title='-2'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A4ae9074308f16ab69d665940e713eeba3ee49c32e97e9f0ebb33def3e219830a&amp;source=constructor"
					width="364" height="279" frameBorder="0"/>
			},); break;
			case -1: this.setState({
				activeIframe: <iframe
					id='-1'
					title='-1'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A63846009f7e77a55a9e219f609f3832491a0417e2b54b9819ceb00b42b0220d0&amp;source=constructor"
					width="396" height="290" frameBorder="0"/>
			},); break;
			case 3: this.setState({
				activeIframe: <iframe
					id='3'
					title='3'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A7f91a9199ab9f441e076e1c00f06506acd1958131fae5c035865d631ed1bcc04&amp;source=constructor"
					width="504" height="519" frameBorder="0"/>
			},); break;
			case 6: this.setState({
				activeIframe: <iframe
					id='6'
					title='6'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Afc7f6f3aa10d404b524e231bb874cd992e95a06cd03f73d289fd0722cf3a1425&amp;source=constructor"
					width="770" height="376" frameBorder="0"/>
			},); break;
			case 7: this.setState({
				activeIframe: <iframe
					id='7'
					title='7'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A32e7eec6a3f33ae4a5d004c76fb816b4dce0bf5eea5fd7645d274a97ea6cbcdd&amp;source=constructor"
					width="468" height="408" frameBorder="0"/>
			},); break;
			case 8: this.setState({
				activeIframe: <iframe
					if='8'
					title='8'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad41bafc0fbdd89fa0e7b11c84b74359b332ce7b8f40d55214e1262cb47d84169&amp;source=constructor"
					width="658" height="374" frameBorder="0"/>
			},); break;
			case 9: this.setState({
				activeIframe: <iframe
					id='9'
					title='9'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A929466ef9c2d8228afde0d6133fcdc657d7e9c1d2cbca5506f7b7b58667872b1&amp;source=constructor"
					width="480" height="400" frameBorder="0"/>
			},); break;  														 //check next
			case 10: this.setState({
				activeIframe: <iframe
					id='10'
					title='10'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A683b4a25b6424b46b06f15b849764f0fcc88ee47452527e1c34fd7e7cf0b4e8b&amp;source=constructor"
					width="568" height="541" frameBorder="0"/>
			},); break;
			case 16: this.setState({
				activeIframe: <iframe
					if='16'
					title='16'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A4bd146a667ac3738c36019924cef94b80c43bec49c06b32a1525bda352bab5a4&amp;source=constructor"
					width="637" height="382" frameBorder="0"/>
			},); break;
			case 18: this.setState({
				activeIframe: <iframe
					if='18'
					title='18'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A6ae1029660ec803d4016cb980ba9d08d896df5c61241eb70c2fa7e29310889e9&amp;source=constructor"
					width="421" height="435" frameBorder="0"/>
			},); break;
			case 19: this.setState({
				activeIframe: <iframe
					id='19'
					title='19'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A3b17109f41809759cf80f7422d9cb581944f121659d29990628cb18111148b6d&amp;source=constructor"
					width="901" height="341" frameBorder="0"/>
			},); break;
			case 20: this.setState({
				activeIframe: <iframe
					id='20'
					title='20'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A6c552aaf9b8e635b2c7c75167474166bdf0dabf6274aaf09046cec5946fc5b63&amp;source=constructor"
					width="527" height="569" frameBorder="0"/>
			},); break;
			case 21: this.setState({
				activeIframe: <iframe
					id='21'
					title='21'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A479e9bc43fd1fd0d460ea954e1246b39d7cefae1e5d16b7ff8c1c4def16448a8&amp;source=constructor"
					width="406" height="512" frameBorder="0"/>
			},); break;
			case 23: this.setState({
				activeIframe:
					<iframe
					id='23'
					title='23'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeb574e1854c4f8850b5ccdade5e1e2cc5e78f54b91fae4a9943ab15e0af8bf17&amp;source=constructor"
					width="510" height="416" frameBorder="0"/>
			},); break;
			case 24: this.setState({
				activeIframe: <iframe
					if='24'
					title='24'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Af9c0774caae457282d004d46d8c9d4a7ea20a9d39557f053bed475a1229585ef&amp;source=constructor"
					width="340" height="339" frameBorder="0"/>
			},); break;
			case 25: this.setState({
				activeIframe: <iframe
					id='25'
					title='25'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa445a311322353b6315e0409c74ac4568b105e362e5ff6bf268fa30acc72497f&amp;source=constructor"
					width="365" height="340" frameBorder="0"/>
			},); break;
			case 27: this.setState({
				activeIframe: <iframe
					if='27'
					title='27'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A000016f800b2f19645d821ad900aa0443b491e6bc23270259b1b67ea5e9d2d29&amp;source=constructor"
					width="320" height="322" frameBorder="0"/>
			},); break;
			case 29: this.setState({
				activeIframe: <iframe
					id='29'
					title='29'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A90206a751e8dde7390eba3e30ce5a6757c25b7b13a85286807539d3564483254&amp;source=constructor"
					width="425" height="477" frameBorder="0"/>
			},); break;
			case 36: this.setState({
				activeIframe: <iframe
					if='36'
					title='36'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A086c352ba47b5cccb73d7ddbc63be8761825bd92843e04bcd3381d1d1d828573&amp;source=constructor"
					width="691" height="357" frameBorder="0"/>
			},); break;
			case 38: this.setState({
				activeIframe: <iframe
					id='38'
					title='38'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Abcfb23aa46ef64e3d258c61d3889b3b729f24edb6fc54db7f09482ec0a5f8c01&amp;source=constructor"
					width="371" height="320" frameBorder="0"/>
			},); break;
			case 39: this.setState({
				activeIframe: <iframe
					if='39'
					title='39'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A3262833b49476a1f2ea90588000b41ff634a145be52b0d41bb406af99e654eca&amp;source=constructor"
					width="383" height="501" frameBorder="0"/>
			},); break;
			case 40: this.setState({
				activeIframe: <iframe
					id='40'
					title='40'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A174983bbfb82adaa4616b80cd0559058fe872806ffb7ae86db42afb77a8645c2&amp;source=constructor"
					width="523" height="523" frameBorder="0"/>
			},); break;
			case 41: this.setState({
				activeIframe: <iframe
					id='41'
					title='41'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Aed6d7ee2421eb71cde0a81015b3e80e9d1fa611e974ea262ec53402838f9141b&amp;source=constructor"
					width="481" height="553" frameBorder="0"/>
			},); break;
			case 43: this.setState({
				activeIframe: <iframe
					if='43'
					title='43'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Aebf58b6761b0adeb3352273f729efb30c41300e525e42a885c54d7fff8adcea4&amp;source=constructor"
					width="410" height="410" frameBorder="0"/>
			},); break;
			case 45: this.setState({
				activeIframe: <iframe
					id='45'
					title='45'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A58fd35639f1f307d775409e397f7ec34f2d4a57fa6179af755a12138423ad484&amp;source=constructor"
					width="350" height="394" frameBorder="0"/>
			},); break;
			case 47: this.setState({
				activeIframe: <iframe
					if='47'
					title='47'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Ace56d304ae55a970fb85bcb8f8f3d0511873bfc72f8f838f5ade082da25d44bd&amp;source=constructor"
					width="500" height="400" frameBorder="0"/>
			},); break;
			case 48: this.setState({
				activeIframe: <iframe
					id='49'
					title='49'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae304a3f380bc285f30523a6da3e7c2e47b1caaf13264abf85fb7ec0d97e59ff3&amp;source=constructor"
					width="527" height="329" frameBorder="0"/>
			},); break;
			case 49: this.setState({
				activeIframe: <iframe
					id='49'
					title='49'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A9788b15f77f05569caa6fbed9882d187637f3286821d9a40cdbe8e0f92c75e87&amp;source=constructor"
					width="451" height="618" frameBorder="0"/>
			},); break;
			case 51: this.setState({
				activeIframe: <iframe
					id='51'
					title='51'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A76423a4fb4ec85102a4bb38d29336304f726e84ea7c8c90751d84b33b69ea13e&amp;source=constructor"
					width="320" height="448" frameBorder="0"/>
			},); break;
			case 52: this.setState({
				activeIframe: <iframe
					id='52'
					title='52'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A09efbf0f49e87a0b32e948120cfdfb5371aced9d84d444d5a0275b483cd7c359&amp;source=constructor"
					width="480" height="392" frameBorder="0"/>
			},); break;
			case 55: this.setState({
				activeIframe: <iframe
					id='55'
					title='55'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A3f4072e4cd2d51aa408fcdb87bccae573beb2b06819811961a980827a3f0650a&amp;source=constructor"
					width="499" height="405" frameBorder="0"/>
			},); break;
			case 56: this.setState({
				activeIframe: <iframe
					id='56'
					title='56'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A97aa4967e8dea2783108c09bb90530b22d910ac29e6ddd9aacfa1a47ad528e71&amp;source=constructor"
					width="425" height="335" frameBorder="0"/>
			},); break;
			case 57: this.setState({
				activeIframe: <iframe
					id='57'
					title='57'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A61ac44914eb559cf4a5ce5a9bc43087c11521035a2859372f5385c488d5e6bdf&amp;source=constructor"
					width="474" height="319" frameBorder="0"/>
			},); break;
			case 58: this.setState({
				activeIframe: <iframe
					id='58'
					title='58'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab237d950809e63145544eaee765eed75107dde775b8314485c01b1ac63fb83ec&amp;source=constructor"
					width="551" height="398" frameBorder="0"/>
			},); break;
			case 59: this.setState({
				activeIframe: <iframe
					id='59'
					title='59'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A13a65ba7e3f815dc316acc26302dccf0427e5c3d61ff5d5275f101badfbaeb8b&amp;source=constructor"
					width="320" height="274" frameBorder="0"/>
			},); break;
			case 60: this.setState({
				activeIframe: <iframe
					id='60'
					title='60'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A03f5d3847937ec496ab8f0001858a75e97f19effca82dc50b9e22d166eb93a7e&amp;source=constructor"
					width="448" height="290" frameBorder="0"/>
			},); break;
			case 61: this.setState({
				activeIframe: <iframe
					id='61'
					title='61'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A159c280897e489c8f205bcdad76898a73781c13f15c7479c0d69cf6f3e53a441&amp;source=constructor"
					width="367" height="503" frameBorder="0"/>
			},); break;
			case 62: this.setState({
				activeIframe: <iframe
					id='62'
					title='62'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A28cbc9163e4cb1ce6e2549af13e51295a12ad252a4ae9a37aeca7553ef981447&amp;source=constructor"
					width="604" height="335" frameBorder="0"/>
			},); break;
			case 63: this.setState({
				activeIframe: <iframe
					id='63'
					title='63'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A42b224d258928bcca43aeffc93b19aa4762c95cb44c12dd787f06460d2fc44f9&amp;source=constructor"
					width="399" height="347" frameBorder="0"/>
			},); break;
			case 64: this.setState({
				activeIframe: <iframe
					id='64'
					title='64'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a3338bb4700e44a0ca428acf696d0ebb0a091a0be512bfc24a15c224c60872e&amp;source=constructor"
					width="395" height="313" frameBorder="0"/>
			},); break;
			case 65: this.setState({
				activeIframe: <iframe
					id='65'
					title='65'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A4c09fcc48d6a5d0d1fe9d61773167ea0273ea6b6310e74fc7e649ce31d77c7fd&amp;source=constructor"
					width="387" height="289" frameBorder="0"/>
			},); break;
			case 100: this.setState({
				activeIframe: <iframe
					id='100'
					title='100'
					className='mapview'
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A8d0ec041c05db62e0fb533a75aea684900d2836b1355e0e1b9f6c39342f9feb3&amp;source=constructor"
					width="411" height="345" frameBorder="0"/>
			},); break;
			default: this.setState({
				activeIframe: <Placeholder> Карта маршрута не найдена! Пожалуйста, сообщите, если Вы заметили это сообщение. </Placeholder>
			},); break;
		}
    }

	setActiveModal(activeModal) {
		activeModal = activeModal || null;
		let activeRoute='';
		let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];
		let s= new Date().toLocaleString();    												//time
		console.log(s);
		let newstr = s.slice(s.indexOf(",")+2);
		console.log(newstr>'00:20:00' && newstr<'05:00:00');  //snackbar вылазит как говно! проверку пнренести в if
		if (newstr>'00:20:00' && newstr<'05:00:00') this.setState({snackbar:    //this.routes.{this.state.activeRoute}.time
				<Snackbar before={<Avatar size={24} style={{backgroundColor: 'var(--accent)'}}><Icon24DoNotDisturb fill="#fff" width={14} height={14} /></Avatar>}>Маршут сейчас не работает! </Snackbar>});
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
	onChange (search) { if (search.length>15){this.openAlert()}  else      //FIX PLS!
		this.setState({ search }); }

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
					onClose={this.modalBack}
					header={
						<ModalPageHeader
							left={IS_PLATFORM_ANDROID && <HeaderButton onClick={this.modalBack}><Icon24Cancel /></HeaderButton>}
							right={<HeaderButton onClick={this.modalBack}>{IS_PLATFORM_IOS ? 'Готово' : <Icon24Done />}</HeaderButton>}
						>
							{this.infobase.map(infobase =>
							<div className='container' key={infobase.id}>
								Трамвай {this.state.activeRoute-1000>-1? this.state.activeRoute-1000 : (this.state.activeRoute-1000===-1? 'A': 'Т1') }
								<Avatar size={24}  style={{ marginLeft: '10px' , border: '1px solid black', background: infobase.col1 }}/>
								<Avatar size={24} style={{ marginLeft: '3px' ,border: '1px solid black', background: infobase.col2 }}/>
							</div>
							)}
						</ModalPageHeader>
					}
				>

					<div className='route-info'>
						<Group title={<TextButton routepic={this.routepic}/>}>
							{this.infobase.length > 0?
								<List>
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
									{this.infobase.map(infobase =>
										<Cell key={infobase.id} >
											<InfoRow title='График работы'>
												{'working_days' in infobase? 'По будням' : 'Ежедневно'}
												<br/>
												{'schedule' in infobase? infobase.schedule : ''}
											</InfoRow>
										</Cell>)}
								</List>:
								<InfoRow className='zaglushka' title='Ошибка'>
									Нет информации о пути следования
								</InfoRow>
							}
                            <Separator style={{ margin: '5px 0' }} />
                            {this.infobase.length > 0?
								<List>
									{this.infobase.map(infobase =>
										<Cell key={infobase.id} >
											<InfoRow title='Стоимость проезда'>
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
												{'sostav2' in infobase? <br/> : ''} {infobase.sostav2}
											</InfoRow>
										</Cell>
									)}
									{this.infobase.map(infobase =>
										<Cell key={infobase.id} >
											<InfoRow title='Последнее изменение маршрута'>
												{infobase.lchange}
											</InfoRow>
										</Cell>
									)}
								</List>:
								<InfoRow className='zaglushka' title='Ошибка'>
									О данном маршруте нет дополнительной информации
								</InfoRow>
							}
						</Group>
					</div>
				</ModalPage>
				<ModalPage
					className='modal-page'
					id={'Bugreport'}
					onClose={this.modalBack}
					header={
						<ModalPageHeader
							left={IS_PLATFORM_ANDROID && <HeaderButton onClick={this.modalBack}><Icon24Cancel /></HeaderButton>}
							right={<HeaderButton onClick={this.modalBack}>{IS_PLATFORM_IOS ? 'Готово' : <Icon24Done />}</HeaderButton>}
						>
							<Div className='ModalText'>Сообщить о проблеме</Div>
						</ModalPageHeader>
					}
				>
					<Div>
					<Group>
						<Placeholder>Чтобы сообщить об ошибке, напишите нам в личные сообщения </Placeholder>
						<Button size="l"  className='BugBut'  component="a" href="https://vk.me/club187561580">Перейти в диалог</Button>
					</Group>
					</Div>
				</ModalPage>
			</ModalRoot>
		);


											//RETURN!!!!!!!!!!!!!!
											//RETURN!!!!!!!!!!!!!!
											//RETURN!!!!!!!!!!!!!!
											//RETURN!!!!!!!!!!!!!!
											//RETURN!!!!!!!!!!!!!!
		return (
			<View id={this.props.id} activePanel={this.state.activePanel} modal={modal} popout={this.state.popout}>
				<Panel id='default'>
					<div>
						<PanelHeader
						left={<HeaderButton onClick={() => this.setState({activeModal:'Bugreport'})} ><Icon24Bug/></HeaderButton>}
						>
							Маршруты
						</PanelHeader>
						<Search value={this.state.search} onChange={this.onChange}/>
						{this.thematics.length > 0 ?
						<List>
							{this.thematics.map(thematic => <Cell key={thematic.id} onClick={() => this.setActiveModal(thematic.id)} >{thematic.name}</Cell>)}
						</List>:
								<Placeholder> Маршрут не найден. </Placeholder>
						}
					</div>
				</Panel>
				<Panel id='route_map'>
					<PanelHeader
						left={<HeaderButton onClick={ () => this.setState({activePanel:'default', activePark: null})}>
							{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
						</HeaderButton>}
					>
						Карта маршрута {this.state.activeRoute-1000>-1? this.state.activeRoute-1000 : (this.state.activeRoute-1000===-1? 'A': 'Т1') }
					</PanelHeader>
					<div className='mapview'>
					{this.state.activeIframe}
					</div>
					{this.state.snackbar}
				</Panel>
			</View>
		);
	}
}

export default Transport;
