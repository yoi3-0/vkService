import React from 'react';
import { View, Panel, PanelHeader, ModalRoot,ModalPage, ModalPageHeader, Group, Gallery,
	HeaderButton, IOS, ANDROID, platform, InfoRow, Button, Cell, Search, List} from '@vkontakte/vkui';

import '../App.css';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Done from '@vkontakte/icons/dist/24/done';

const routes = [
	{id: 1000, name: "Трамвай А"},
	{id: 1003, name: "Трамвай 3"},
	{id: 1006, name: "Трамвай 6"},
	{id: 1007, name: "Трамвай 7"},
	{id: 1009, name: "Трамвай 9"},
	{id: 1010, name: "Трамвай 10"},
	{id: 1016, name: "Трамвай 16"},
	{id: 1018, name: "Трамвай 18"},
	{id: 1019, name: "Трамвай 19"},
	{id: 1020, name: "Трамвай 20"},
	{id: 1022, name: "Трамвай 22"},
	{id: 1023, name: "Трамвай 23"},
	{id: 1024, name: "Трамвай 24"},
	{id: 1025, name: "Трамвай 25"},
	{id: 1027, name: "Трамвай 27"},
	{id: 1029, name: "Трамвай 29"},
	{id: 1030, name: "Трамвай 30"},
	{id: 1036, name: "Трамвай 36"},
	{id: 1038, name: "Трамвай 38"},
	{id: 1039, name: "Трамвай 39"},
	{id: 1040, name: "Трамвай 40"},
	{id: 1041, name: "Трамвай 41"},
	{id: 1043, name: "Трамвай 43"},
	{id: 1045, name: "Трамвай 45"},
	{id: 1047, name: "Трамвай 47"},
	{id: 1048, name: "Трамвай 48"},
	{id: 1049, name: "Трамвай 49"},
	{id: 1051, name: "Трамвай 51"},
	{id: 1052, name: "Трамвай 52"},
	{id: 1055, name: "Трамвай 55"},
	{id: 1067, name: "Трамвай 57"},
	{id: 1068, name: "Трамвай 58"},
	{id: 1060, name: "Трамвай 60"},
	{id: 1061, name: "Трамвай 61"},
	{id: 1062, name: "Трамвай 62"},
	{id: 1100, name: "Трамвай 100"},
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
					className='modal-page'
					id={'t1003'}
					onClose={this.modalBack}
					header={
						<ModalPageHeader
							left={IS_PLATFORM_ANDROID && <HeaderButton onClick={this.modalBack}><Icon24Cancel /></HeaderButton>}
							right={<HeaderButton onClick={this.modalBack}>{IS_PLATFORM_IOS ? 'Готово' : <Icon24Done />}</HeaderButton>}
						>
							Трамвай 3
						</ModalPageHeader>
					}
				>
					<div className='route-info'>
					<Group title='Маршрут'>
						<List >
							<Cell>
								<InfoRow title='Конечные остановки'>
									Площадь Репина - площадь Ленина
								</InfoRow>
							</Cell>
							<Cell>
								<InfoRow title='Станции метро по пути следования'>
									Сенная площадь<br/>
									Гостиный двор<br/>
									Площадь Ленина
								</InfoRow>
							</Cell>
						</List>
					</Group>
					<Group title='Другая информация'>
						<list>
							<Cell>
								<InfoRow title='Стоиимость проезда'>
									40 рублей
								</InfoRow>
							</Cell>
							<Cell>
								<InfoRow title='Обслуживающие парки'>
									Трамвайный парк #3, Трамвайный парк #7
								</InfoRow>
							</Cell>
							<Cell>
								<InfoRow title='Подвижной состав'>
									ЛМ-68М2, ЛМ-68М3, ЛМ-99АВН, 71-301, 71-623, 71-623-02, 71-631, 71-631-02
								</InfoRow>
							</Cell>
						</list>
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
						{this.thematics.length > 0 &&
						<List>
							{this.thematics.map(thematic => <Cell key={thematic.id} onClick={() => this.setActiveModal('t'+thematic.id)} >{thematic.name}</Cell>)}
						</List>
						}
					</div>
				</Panel>
			</View>
		);
	}
}

export default Transport;
