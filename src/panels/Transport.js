import React from 'react';
import { View, Panel, PanelHeader, Button } from '@vkontakte/vkui';

import '../App.css';

const Transport = props => (
	<View id={ props.id } activePanel='default'>
		<Panel id='default'>
			<PanelHeader noShadow={ true }>
				Маршруты
			</PanelHeader>
			<Button
				size='xl'
				level='secondary'
				onClick={ props.go }
				data-to='eyes'
			>
				60 секунд спокойствия
			</Button>
		</Panel>
	</View>
);

export default Transport;
