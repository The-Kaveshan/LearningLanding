import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './NavBar.css';
import Logo from '../../assets/logo.svg';

function NavBar({ items }) {
    const [visible, setVisible] = useState(false);

    const toggleMenu = () => {
        setVisible(!visible);
    };

    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src={Logo} alt="Logo" />
            </div>
            <Button className="menu-toggle" onClick={toggleMenu} type="text" icon={<MenuOutlined />} />
            <Menu 
                mode="horizontal" 
                className={`desktop-menu ${visible ? 'show' : ''}`}
            >
                {items.map(item => (
                    <Menu.Item key={item.key}>
                        <a href={item.route}>{item.title}</a>
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    );
}

export default NavBar;
