import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";

function PageHeader() {
  return (
    <Header>
      <div className="header-logo">Yosa Rama</div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        theme="dark"
        className="header-menu"
      >
        <Menu.Item key="1">Homepage</Menu.Item>
        <Menu.Item key="2">About Me</Menu.Item>
        <Menu.Item key="3">Skill</Menu.Item>
        <Menu.Item key="4">Portfolio</Menu.Item>
        <Menu.Item key="5">Work Experience</Menu.Item>
      </Menu>
    </Header>
  );
}

export default PageHeader;
