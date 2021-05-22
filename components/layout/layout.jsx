import { Layout } from "antd";
import Header from "./header";

const { Content, Footer } = Layout;

function PageLayout(props) {
  return (
    <Layout>
      <Header />
      <Content style={{ padding: "50px 50px" }}>{props.children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default PageLayout;
