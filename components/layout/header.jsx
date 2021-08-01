import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";

function PageHeader() {
  return (
    <Header>
      <Link href="/">
        <div className="header-logo">Yosa Rama</div>
      </Link>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        theme="dark"
        className="header-menu"
      >
        <Menu.Item key="1">
          <Link href="/">About</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/skill">Skill</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/portfolio">Portfolio</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/work-experience">Work Experience</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default PageHeader;
