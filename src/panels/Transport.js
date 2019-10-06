import React from 'react';
import { View, Panel, PanelHeader, Button, Cell, Search, List} from '@vkontakte/vkui';

import '../App.css';
const routes = [
	{id: 1003, name: "Трамвай 3"},
	{id: 1016, name: "Трамвай 16"},
	{id: 2035, name: "Троллейбус 35"},
	{id: 3074, name: "Автобус 74"}
];
class SimpleSearch extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			search: ''
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange (search) { this.setState({ search }); }

	get thematics () {
		const search = this.state.search.toLowerCase();
		return routes.filter(({name}) => name.toLowerCase().indexOf(search) > -1);
	}

	render() {
		return (
			<div>
				<PanelHeader>
					Маршруты
				</PanelHeader>
				<Search value={this.state.search} onChange={this.onChange}/>
				{this.thematics.length > 0 &&
				<List>
					{this.thematics.map(thematic => <Cell key={thematic.id}>{thematic.name}</Cell>)}
				</List>
				}
			</div>
		);
	}
}


const Transport = props => (
	<View id={ props.id } activePanel='default'>
		<Panel id='default'>
			<SimpleSearch/>
		</Panel>
	</View>
);

export default Transport;
