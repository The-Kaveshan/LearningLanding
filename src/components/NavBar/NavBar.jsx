import React, { useState, useEffect } from "react";
import { Menu, Button, Drawer } from "antd";

import { MenuOutlined, CloseOutlined, LoginOutlined } from "@ant-design/icons";
import "./NavBar.scss";
import Logo from "../../assets/images/logo.svg";

function NavBar() {
  const items = [
    {
      key: "1",
      title: "Courses",
      route: "/",
      items: [
        { key: "1-1", title: "View Immersive Learning", route: "/", subMenu: true },
        {
          key: "1-1-1",
          title: "Full Stack Web & Software Engineer Bootcamp",
          route: "/",
        },
        { key: "1-2", title: "View On-Site Bootcamps", route: "/", subMenu: true },
        { key: "1-2-1", title: "Software Engineer", route: "/" },
        { key: "1-3", title: "View Online Bootcamps", route: "/", subMenu: true },
        { key: "1-3-1", title: "Web Developer", route: "/" },
        { key: "1-3-2", title: "Software Engineer", route: "/" },
        { key: "1-3-3", title: "Data Science", route: "/" },
        {
          key: "1-4",
          title: "Stellenbosch University in Partnership with HyperionDev",
          route: "/",
          subMenu: true
        },
        { key: "1-4-1", title: "Web Developer", route: "/" },
        { key: "1-4-2", title: "Software Engineer", route: "/" },
        { key: "1-4-3", title: "Data Science", route: "/" },
      ],
    },
    { key: "2", title: "Pricing", route: "/" },
    { key: "3", title: "Our Method", route: "/" },
    { key: "4", title: "For Employers", route: "/" },
    { key: "5", title: "Contact Us", route: "/" },
  ];
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
        <img src={Logo} alt="Company Logo" />
      </div>
      {isMobile ? (
        <>
          <Drawer
            title={
              <div className="navbar-logo">
                <img src={Logo} alt="Company Logo" />
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
            <Menu
              className={"mobile-menu"}
              mode="inline"
              onClick={(e) => e.domEvent.stopPropagation()}
              role="menu"
            >
              {items.map((item) => {
                // For items with children, use a SubMenu
                if (item.items) {
                  return (
                    <Menu.SubMenu title={item.title} key={item.key}>
                      {item.items.map((subItem) => (
                        <Menu.Item key={subItem.key} className={ subItem.subMenu ? 'sub-menu' : ''}>
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
              <Menu.Item key={"login"}>
                <LoginOutlined style={{marginRight: '5px'}}/>
                <a href={"/"}>Login</a>
              </Menu.Item>
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
          <Menu mode="horizontal" className="desktop-menu" role="menu">
            {items.map((item) => {
              if (item.items) {
                return (
                  <SubMenu key={item.key} title={item.title}>
                    {item.items.map((subItem) => (
                      <Menu.Item key={subItem.key} className={ subItem.subMenu ? 'sub-menu' : ''}>
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
          <Button style={{ borderRadius: 0}} icon={<LoginOutlined />}>Login</Button>
        </>
      )}
    </div>
  );
}

export default NavBar;
