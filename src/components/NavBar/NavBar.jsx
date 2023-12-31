import React, { useState, useEffect } from "react";
import { Menu, Button, Drawer } from "antd";

import { MenuOutlined, CloseOutlined, LoginOutlined } from "@ant-design/icons";
import "./NavBar.scss";
import Logo from "../../assets/images/logo.svg";

const defaultMenu = [
  {
    key: "1",
    title: "Courses",
    route: "/LearningLanding",
    items: [
      { key: "1-1", title: "View Immersive Learning", route: "/LearningLanding", subMenu: true },
      {
        key: "1-1-1",
        title: "Full Stack Web & Software Engineer Bootcamp",
        route: "/LearningLanding",
      },
      { key: "1-2", title: "View On-Site Bootcamps", route: "/LearningLanding", subMenu: true },
      { key: "1-2-1", title: "Software Engineer", route: "/LearningLanding" },
      { key: "1-3", title: "View Online Bootcamps", route: "/LearningLanding", subMenu: true },
      { key: "1-3-1", title: "Web Developer", route: "/LearningLanding" },
      { key: "1-3-2", title: "Software Engineer", route: "/LearningLanding" },
      { key: "1-3-3", title: "Data Science", route: "/LearningLanding" },
      {
        key: "1-4",
        title: "Stellenbosch University in Partnership with HyperionDev",
        route: "/LearningLanding",
        subMenu: true
      },
      { key: "1-4-1", title: "Web Developer", route: "/LearningLanding" },
      { key: "1-4-2", title: "Software Engineer", route: "/LearningLanding" },
      { key: "1-4-3", title: "Data Science", route: "/LearningLanding" },
    ],
  },
  { key: "2", title: "Pricing", route: "/LearningLanding" },
  { key: "3", title: "Our Method", route: "/LearningLanding" },
  { key: "4", title: "For Employers", route: "/LearningLanding" },
  { key: "5", title: "Contact Us", route: "/LearningLanding" },
];

function NavBar() {
 
  const { SubMenu } = Menu;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 880);
  const [visible, setVisible] = useState(false);

  const [localMenu, setlocalMenu] = useState([]);

  useEffect(() => {
    const cachedMenu = localStorage.getItem("menu");

    if (cachedMenu) {
      setlocalMenu(JSON.parse(cachedMenu));
    } else {
      localStorage.setItem("menu", JSON.stringify(defaultMenu));
      setlocalMenu(defaultMenu);
    }
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 880);
    };

    window.addEventListener("resize", handleResize);

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
              {localMenu.map((item) => {
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
              <Menu.Item key={"login"} className={'icon-animate'} >
                <LoginOutlined style={{marginRight: '5px'}}/>
                <a href="/LearningLanding">Login</a>
              </Menu.Item>
            </Menu>
          </Drawer>
          <Button
            onClick={showDrawer}
            type="text"
            icon={<MenuOutlined />}
          />
        </>
      ) : (
        <>
          <Menu mode="horizontal" className="desktop-menu" role="menu">
            {localMenu.map((item) => {
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
          <Button className={'icon-animate'} icon={<LoginOutlined />}>Login</Button>
        </>
      )}
    </div>
  );
}

export default NavBar;
