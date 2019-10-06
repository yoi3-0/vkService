import React from 'react';
import {platform, IOS, View, Avatar} from '@vkontakte/vkui';
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
                Настройки
            </PanelHeader>
            <div className='settings_user'>
                <Avatar
                    size={ 80 }
                    className='settings_user_avatar'
                />
                <p className='settings_user_name'>Ivan Ivanovich</p>
            </div>
        </Panel>
    </View>
);



export default Settings;
