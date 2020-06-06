import React, { FC } from 'react'
import { Menu } from 'antd';
import {NavLink} from 'react-router-dom'
import {
    AppstoreOutlined,
    SettingOutlined,
    OrderedListOutlined,
    CarryOutOutlined,
    BellOutlined,
    IdcardOutlined,
    ShrinkOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

export const Sider: FC = () => {
    const handleClick = () => {
        console.log('click ');
    };

    return (
        <Menu
            onClick={() => handleClick()} style={{ width: 256 }} defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']} mode="inline"  >
            <SubMenu key="sub1"  title={
                <span>
                    <OrderedListOutlined />
                    <span>
                        Lista de Tareas
                    </span>
                </span>}>
                <Menu.Item className='submenu' key="g1" title="Pendientes" icon={<BellOutlined />}>
                   <NavLink to='/important'> Pendientes</NavLink>
                    </Menu.Item>
                <Menu.Item className='submenu' key="g2" title="Completadas" icon={<CarryOutOutlined />}>
                    <NavLink to='/planned'> Completadas </NavLink>
                    </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Graficas">
                <Menu.Item className='submenu' key="5">Option 5</Menu.Item>
                <Menu.Item className='submenu' key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                    <Menu.Item className='submenu' key="7">Option 7</Menu.Item>
                    <Menu.Item className='submenu' key="8">Option 8</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu
                key="sub4"
                title={
                    <span>
                        <SettingOutlined />
                        <span>Cofiguraciones</span>
                    </span>
                }
            >
                <Menu.Item className='submenu' key="9" icon={<ShrinkOutlined />}>Idioma</Menu.Item>
                <Menu.Item className='submenu' key="10" icon={<IdcardOutlined />}>Usuarios</Menu.Item>
                <Menu.Item className='submenu' key="11" icon={<ShrinkOutlined />}>Entidad</Menu.Item>
                <Menu.Item className='submenu' key="12" icon={<ShrinkOutlined />}>Cierre</Menu.Item>
            </SubMenu>
        </Menu>
    );
}
