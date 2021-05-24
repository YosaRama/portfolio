import { Row, Col } from "antd";
import s from "./social.module.scss";

function SocialMedia() {
  return (
    <Row className={s.socialSection}>
      <Col className={s.socialContainer}>
        <a href="https://www.instagram.com/yosarama_official/" target="_blank">
          <img src="/images/instagram.png" />
        </a>
      </Col>
      <Col className={s.socialContainer}>
        <a
          href="https://www.linkedin.com/in/yosa-rama-dinata-7780b9171/?originalSubdomain=id"
          target="_blank"
        >
          <img src="/images/linkedin.png" />
        </a>
      </Col>
      <Col className={s.socialContainer}>
        <a href="https://yosaramadinata.medium.com/about" target="_blank">
          <img src="/images/medium.png" />
        </a>
      </Col>
      <Col className={s.socialContainer}>
        <a href="https://github.com/yosarama" target="_blank">
          <img src="/images/github.png" />
        </a>
      </Col>
      <Col className={s.socialContainer}>
        <a
          href="https://www.youtube.com/channel/UC94iFYhf7bOYR5Q89d17RNw"
          target="_blank"
        >
          <img src="/images/youtube.png" />
        </a>
      </Col>
      <Col className={s.socialContainer}>
        <a href="https://gitlab.com/yosaramadinata" target="_blank">
          <img src="/images/gitlab.png" />
        </a>
      </Col>
    </Row>
  );
}

export default SocialMedia;
