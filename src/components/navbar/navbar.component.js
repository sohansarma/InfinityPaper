import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { withRouter } from "react-router-dom";
import "./navbar.style.css";

const { Header } = Layout;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  redirectToHome = count => {
    this.props.history.push(`/home`);
    this.setState({ count });
  };

  redirectToAboutUs = count => {
    this.props.history.push(`/aboutus`);
    this.setState({ count });
  };

  // redirectToTestomonials = count => {
  //   this.props.history.push(`/testomonials`);
  //   this.setState({ count });
  // };

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="" />
          <div className="Nav_buttons navbar navbar-expand-sm">
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
              <Menu.Item
                className={
                  this.state.count === 1
                    ? "ant-menu-item ant-menu-item ant-item-selected ant-menu-item-selected"
                    : "ant-menu-item"
                }
                onClick={() => this.redirectToHome(1)}
              >
                Home
              </Menu.Item>
              <Menu.Item
                className={
                  this.state.count === 2
                    ? "ant-menu-item ant-menu-item ant-item-selected ant-menu-item-selected"
                    : "ant-menu-item"
                }
                onClick={() => this.redirectToAboutUs(2)}
              >
                About us
              </Menu.Item>
              <Menu.Item
                className={
                  this.state.count === 3
                    ? "ant-menu-item ant-menu-item ant-item-selected ant-menu-item-selected"
                    : "ant-menu-item"
                }
                onClick={() => this.redirectToTestomonials(3)}
                key="3"
              >
                Products
              </Menu.Item>
              <Menu.Item>Become a Channel Partner</Menu.Item>
              <Menu.Item>Careers</Menu.Item>
            </Menu>
          </div>
        </Header>
      </Layout>
    );
  }
}

export default withRouter(Navbar);
