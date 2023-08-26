import logo from "./logo.svg";
import "./App.scss";
import FooterComponent from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import RegisterBanner from "./components/RegisterBanner/RegisterBanner";
import VideoBanner from "./components/VideoBanner/VideoBanner";
import { ConfigProvider, Layout, Space } from "antd";
import Courses from "./components/Courses/Courses";
import Review from "./components/Review/Review";
import Awards from "./components/Awards/Awards";
import Facts from "./components/Facts/Facts";
import Clients from "./components/Clients/Clients";
import JoinNow from "./components/JoinNow/JoinNow";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div>
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Header
            className="headerStyle"
            style={{
              background: "#FFFFFF",
            }}
          >
            <RegisterBanner />
            <NavBar />
          </Header>
          <Content className="contentStyle">
            <Courses />
            {/* <Awards /> */}
            <Facts />
            <Review />
            <Clients className={'clients'}/>
            <JoinNow />
          </Content>
          <Footer style={{ padding: "0" }}>
            <FooterComponent />
          </Footer>
        </Layout>
      </Space>
    </div>
  );
}

export default App;
