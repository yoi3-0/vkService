import React from 'react';
import {Footer, Group, View,  List, CellButton} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import connect from "@vkontakte/vk-connect";


import '../App.css';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import Icon24Repost from '@vkontakte/icons/dist/24/repost';


const Settings = props => (
    <View id={ props.id } activePanel='default' popout={props.popout}>
        <Panel id='default'>
            <PanelHeader>
                Информация
            </PanelHeader>
            <Group title='О нас'>
                <List>
                    <CellButton before={<Icon24Users />} component="a" href="https://vk.com/club187561580">  Открыть сообщество </CellButton>
                    {props.CellBut}
                    <CellButton before={<Icon24Repost />} onClick={ () => connect.send("VKWebAppShare", {"link": "https://vk.com/app7157578"})}> Рассказать друзьям</CellButton>
                </List>
            </Group>
            <Footer>
                Информация взята с wikipedia.org и pitertransport.com
            </Footer>
            <Footer>
               v(102)
            </Footer>
        </Panel>
    </View>
);



export default Settings;
