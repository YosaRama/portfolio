import { Layout } from "antd";
import Header from "./header";
import Footer from "./footer";

const { Content } = Layout;

function PageLayout(props) {
  return (
    <Layout>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </Layout>
  );
}

export default PageLayout;
