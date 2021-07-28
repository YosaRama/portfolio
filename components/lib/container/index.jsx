import { Row } from "antd";

function Container({ children, className }) {
  return (
    <Row className={"global-content-container " + className}>{children}</Row>
  );
}

export default Container;
