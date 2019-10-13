import React from 'react';
import {platform, Footer, IOS, Div, Cell, Group, View, Avatar, Button} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import '../App.css';

const osName = platform();

const Settings = props => (
    <View id={ props.id } activePanel='default'>
        <Panel id='default'>
            <PanelHeader >
                Информация
            </PanelHeader>
            <Group title='О нас'>
                <Cell
                    size="l"
                    bottomContent={                         //Zamenit'
                        <Div className='sub_buttons'>
                            <Button size="l" stretched component="a" href="https://vk.me/club186987863" >Написать разработчику</Button>
                            <Button size="l" level="secondary"  stretched component="a" href="https://vk.com/club186987863" >Открыть сообщество</Button>
                        </Div>
                    }>
                </Cell>
            </Group>
            <Footer>
                Информация взята с wikipedia.org и pitertransport.com
            </Footer>
        </Panel>
    </View>
);



export default Settings;
