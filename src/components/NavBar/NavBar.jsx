import React, { useState, useEffect } from "react";
import { Menu, Button, Drawer, Collapse } from "antd";

import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import "./NavBar.css";
import Logo from "../../assets/logo.svg";

function NavBar({ items }) {
  const [visible, setVisible] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const [activeKey, setActiveKey] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const { SubMenu } = Menu;

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

  const handleMenuClick = (e) => {
    // If the clicked item has submenu, stop the Drawer from closing
    if (e.keyPath.length > 1) {
      e.domEvent.stopPropagation();
    }
  };

  const handleSubMenuHover = (key, isHovering) => {
    if (isHovering) {
      setOpenKeys((prevKeys) => [...prevKeys, key]);
    } else {
      setOpenKeys((prevKeys) => prevKeys.filter((k) => k !== key));
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      {isMobile ? (
        // Mobile view components here (e.g., Drawer)
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
            visible={visible}
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
        // Desktop view components here (e.g., regular Menu)
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
