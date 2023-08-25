import React, { useState, useEffect } from "react";
import { Menu, Button, Drawer, Collapse } from "antd";

import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import "./NavBar.scss";
import Logo from "../../assets/logo.svg";

function NavBar({ items }) {
  const { SubMenu } = Menu;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [visible, setVisible] = useState(false);
  
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      // Set isMobile to true if window width is <= 768px
      setIsMobile(window.innerWidth <= 768);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      {isMobile ? (
        <>
          <Drawer
            title={
              <div className="navbar-logo">
                <img src={Logo} alt="Logo" />
              </div>
            }
            placement="right"
            closable={true}
            onClose={onClose}
            open={visible}
            width="100%"
            closeIcon={<CloseOutlined className="drawer-close-icon" />}
            className="custom-drawer"
          >
            <Menu className={'mobile-menu'} mode="inline" onClick={(e) => e.domEvent.stopPropagation()}>
              {items.map((item) => {
                // For items with children, use a SubMenu
                if (item.children) {
                  return (
                    <Menu.SubMenu title={item.title} key={item.key}>
                      {item.children.map((subItem) => (
                        <Menu.Item key={subItem.key}>
                          <a href={subItem.route}>{subItem.title}</a>
                        </Menu.Item>
                      ))}
                    </Menu.SubMenu>
                  );
                }

                // For items without children, render them as regular Menu.Items
                return (
                  <Menu.Item key={item.key}>
                    <a href={item.route}>{item.title}</a>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Drawer>
          <Button
            className="mobile-menu-toggle"
            onClick={showDrawer}
            type="text"
            icon={<MenuOutlined />}
          />
        </>
      ) : (
        <>
          <Menu mode="horizontal" className="desktop-menu">
            {items.map((item) => {
              if (item.children) {
                return (
                  <SubMenu key={item.key} title={item.title}>
                    {item.children.map((subItem) => (
                      <Menu.Item key={subItem.key}>
                        <a href={subItem.route}>{subItem.title}</a>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                );
              }
              return (
                <Menu.Item key={item.key}>
                  <a href={item.route}>{item.title}</a>
                </Menu.Item>
              );
            })}
          </Menu>
        </>
      )}
    </div>
  );
}

export default NavBar;
