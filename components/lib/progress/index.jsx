import { Col, Progress, Row } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";

function LinearProgress(props) {
  const { score, skillName, imageSrc } = props;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(score);
    }, 500);
  }, []);
  return (
    <Col span={12}>
      <Row gutter={[16, 0]} style={{ margin: "40px 30px" }}>
        <Col span={4}>
          <Image src={imageSrc} height="100%" width="100%" />
        </Col>
        <Col span={20}>
          <h1>{skillName}</h1>
          <Progress
            strokeColor={{
              "0%": "#59005c",
              "100%": "#ff0942",
            }}
            percent={progress}
            status="active"
          />
        </Col>
      </Row>
    </Col>
  );
}

export default LinearProgress;
