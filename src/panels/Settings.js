import React from 'react';
import {Footer,  Div, Group, View, Button, List, CellButton} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import connect from "@vkontakte/vk-connect";


import '../App.css';


const Settings = props => (
    <View id={ props.id } activePanel='default'>
        <Panel id='default'>
            <PanelHeader>
                Информация
            </PanelHeader>
            <Group title='О нас'>
                <List>
                    <CellButton component="a" href="https://vk.com/club187561580">  Открыть сообщество </CellButton>
                    <CellButton onClick={() => connect.send("VKWebAppAddToFavorites", {})}> Добавить в избранное</CellButton>
                </List>
            </Group>
            <Footer>
                Информация взята с wikipedia.org и pitertransport.com
            </Footer>
        </Panel>
    </View>
);



export default Settings;
