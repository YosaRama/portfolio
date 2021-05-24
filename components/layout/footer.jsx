import { Col, Row } from "antd";
import { Footer } from "antd/lib/layout/layout";
import SocialMedia from "../lib/social-media";

function PageFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <Footer>
      <Row>
        <Col span={12}>
          <p style={{ margin: "0" }}>
            &copy;{currentYear} by Yosa Rama. All rights reserved
          </p>
        </Col>
        <Col span={12}>
          <SocialMedia />
        </Col>
      </Row>
    </Footer>
  );
}

export default PageFooter;
