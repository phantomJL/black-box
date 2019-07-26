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
          // collapsible
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
          // collapsed={this.state.collapsed}
          // onCollapse={this.onCollapse}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          {/* <div className="logo" type="flex" justify="center" align="middle"> */}
          {/* <img src="/img/black-box.jpg" /> */}
          {/* </div> */}

          <Menu theme="light" defaultSelectedKeys={["/dashboard"]} selectedKeys={[this.state.current]} mode="inline">
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
              key="sub1"
              title={
                <span>
                  <Icon type="setting" />
                  <span>Setting</span>
                </span>
              }
            >
              <Menu.Item key="3">Vehicle Type</Menu.Item>
              <Menu.Item key="4">General Setting</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{ overflow: "auto" }}
            className={`${this.state.collapsed ? "sidebar-close" : "sidebar-open"}`}
          >
            {this.props.children}
          </Content>
          {/* <Footer style={{ textAlign: "center" }}>Black Box ©2019 Created by ...</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

// style={{ padding: "50px 50px" }}
export default withRouter(SideBar);
