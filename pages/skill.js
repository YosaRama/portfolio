import { Col, Row } from "antd";
import Container from "../components/lib/container";
import LinearProgress from "../components/lib/progress";

function Skill() {
  return (
    <Container>
      <h1 className="global-header-title">Personal Skill</h1>
      <p className="global-subtitle">
        List of my professional sill on website & software developing, all of my
        skill is verified by certificated
      </p>
      <Row gutter={[24, 0]} style={{ width: "100%" }}>
        <LinearProgress
          score="80"
          skillName="React JS"
          imageSrc="/images/reactjs.png"
        />
        <LinearProgress
          score="85"
          skillName="Node JS"
          imageSrc="/images/nodejs.png"
        />
        <LinearProgress
          score="80"
          skillName="Next JS"
          imageSrc="/images/nextjs.svg"
        />
        <LinearProgress
          score="80"
          skillName="Mongo DB"
          imageSrc="/images/mongodb.png"
        />
        <LinearProgress
          score="80"
          skillName="MySQL"
          imageSrc="/images/mysql.png"
        />
        <LinearProgress
          score="80"
          skillName="Wordpress"
          imageSrc="/images/wordpress.png"
        />
      </Row>
    </Container>
  );
}

export default Skill;
