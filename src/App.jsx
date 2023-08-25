import logo from "./logo.svg";
import "./App.css";
import FooterComponent from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import { Layout, Space } from "antd";

const { Header, Footer, Content } = Layout;

function App() {
  const menuItems = [
    { key: "1", title: "Home", route: "/" },
    { key: "2", title: "About", route: "/about" },
    { key: "3", title: "Services", route: "/services" },
    { key: "4", title: "Contact", route: "/contact" },
  ];

  return (
    <div className="App">
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Header className='headerStyle' style={{ background: '#FFFFFF' }}>
            <NavBar items={menuItems} />
          </Header>
          <Content className="contentStyle">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </Content>
          <Footer className="footerStyle">
            <FooterComponent />
          </Footer>
        </Layout>
      </Space>
    </div>
  );
}

export default App;
