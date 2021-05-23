import { Col, Row } from "antd";
import Image from "next/image";
import s from "./banner.module.scss";

function Banner(props) {
  const { name, description } = props;
  return (
    <Row className={s.section}>
      <Col span={12}>
        <h1 className={s.name}>{name}</h1>
        <p>{description}</p>
      </Col>
      <Col span={12}>
        <Image src="/images/yosa-photo.jpg" width="600" height="600" />
      </Col>
    </Row>
  );
}

export default Banner;
