import "./App.scss";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import RegisterBanner from "./components/RegisterBanner/RegisterBanner";
import VideoBanner from "./components/VideoBanner/VideoBanner";
import { Layout, Space } from "antd";
import Courses from "./components/Courses/Courses";
import Review from "./components/Review/Review";
import Facts from "./components/Facts/Facts";
import Features from "./components/Features/Features";
import Clients from "./components/Clients/Clients";
import JoinNow from "./components/JoinNow/JoinNow";
const { Header, Content } = Layout;

function App() {
  return (
    <div>
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Header className="headerStyle">
            <RegisterBanner />
            <NavBar />
          </Header>
          <Content>
            <Courses className={"course"} />
            <VideoBanner />
            <Features className={"features"} />
            <Facts className={"facts"} />
            <Review className={"reviews"} />
            <Clients className={"clients"} />
            <JoinNow className={"join-now"} />
          </Content>
          <Footer className={"footer"} />
        </Layout>
      </Space>
    </div>
  );
}

export default App;
