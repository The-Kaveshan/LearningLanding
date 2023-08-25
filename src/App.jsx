import logo from "./logo.svg";
import "./App.css";
import FooterComponent from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import { Layout, Space } from "antd";

const { Header, Footer, Content } = Layout;

function App() {
  const menuItems = [
    {
      key: "1",
      title: "Courses",
      route: "/",
      children: [
        { key: "1-1", title: "View Immersive Learning", route: "/" },
        { key: "1-1-1", title: "Full Stack Web & Software Engineer Bootcamp", route: "/" },
        { key: "1-2", title: "View On-Site Bootcamps", route: "/" },
        { key: "1-2-1", title: "Software Engineer", route: "/" },
        { key: "1-3", title: "View Online Bootcamps", route: "/" },
        { key: "1-3-1", title: "Web Developer", route: "/" },
        { key: "1-3-2", title: "Software Engineer", route: "/" },
        { key: "1-3-3", title: "Data Science", route: "/" },
        { key: "1-4", title: "Stellenbosch University in Partnership with HyperionDev", route: "/" },
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

  return (
    <div className="App">
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Header className="headerStyle" style={{ background: "#FFFFFF" }}>
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
