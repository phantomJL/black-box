import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import "./sibar.component.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SideBar extends React.Component {
  state = {
    collapsed: false,
    current: "/dashboard"
  };
  componentDidMount() {
    this.setState({ current: this.props.history.location.pathname });
  }
  handleClick = async e => {
    await this.setState({ current: e.key });
    console.log(e.key);
    this.props.history.push(e.key);
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          // collapsedWidth="0"
          // breakpoint="lg"
          // theme="light"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed"
          }}
          // onBreakpoint={broken => {
          //   this.setState({ collapsed: false });
          // }}
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" type="flex" justify="center" align="middle">
            {/* <img src="/img/black-box.jpg" /> */}
          </div>

          <Menu theme="dark" defaultSelectedKeys={["/dashboard"]} selectedKeys={[this.state.current]} mode="inline">
            <Menu.Item key="/dashboard" onClick={e => this.handleClick(e)}>
              <span className="anticon anticon-desktop">
                <i class="fas fa-globe-americas " />
              </span>
              <span>Zone Map</span>
            </Menu.Item>
            <Menu.Item key="/rules" onClick={e => this.handleClick(e)}>
              <span className="anticon anticon-desktop">
                <i class="fas fa-clipboard-list" />
              </span>

              <span>Rule List</span>
            </Menu.Item>
            <SubMenu
              title={
                <span>
                  <Icon type="setting" />
                  <span>Setting</span>
                </span>
              }
            >
              <Menu.Item key="/vehicleType" onClick={e => this.handleClick(e)}>
                Vehicle Type
              </Menu.Item>
              <Menu.Item key="/general" onClick={e => this.handleClick(e)}>
                General Setting
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{ margin: "0 16px" }}
            className={`${this.state.collapsed ? "sidebar-close" : "sidebar-open"}`}
          >
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>{this.props.children}</div>
          </Content>
          {/* <Footer style={{ textAlign: "center" }}>Black Box ©2019 Created by ...</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

// style={{ padding: "50px 50px" }}
export default withRouter(SideBar);
