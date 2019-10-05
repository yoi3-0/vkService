import React from 'react';
import { View, Panel, PanelHeader, Button } from '@vkontakte/vkui';

const Transport = props => (
	<View id={ props.id } activePanel='default'>
		<Panel id='default' className='panel_blue'>
			<PanelHeader noShadow={ true }>
				Тренировки
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
