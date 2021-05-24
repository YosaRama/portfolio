import { Col, Row } from "antd";
import Image from "next/image";
import s from "./banner.module.scss";
import Button from "../button/button";

function Banner(props) {
  const { name, description, btnText } = props;
  return (
    <Row className={s.section}>
      <Col span={12} className={s.text}>
        <h1 className={s.name}>{name}</h1>
        <p>{description}</p>
        <Button>{btnText}</Button>
      </Col>
      <Col span={12}>
        <Image src="/images/yosa-photo.png" width="600" height="600" />
      </Col>
    </Row>
  );
}

export default Banner;
