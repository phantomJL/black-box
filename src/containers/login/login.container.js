import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { processLogin, processLogout } from "../../redux/actions/auth.action";
import { clearUserInfo, loadAuthToken } from "../../redux/actions/localStorage.action";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "./login.container.css";

class Login extends Component {
  state = {
    username: "",
    passcode: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.props.history.push("/dashboard");
    // this.props.processLogin(
    //   {
    //     username: this.state.username,
    //     passcode: this.state.psasscode
    //   },
    //   this.props.history
    // );
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleForgetPass = e => {
    e.preventDefault();
    window.location.href = `${process.env.REACT_APP_HAVANA_FRONT}/forget/${process.env.REACT_APP_APP_TOKEN}`;
  };

  componentWillMount = () => {
    clearUserInfo();
  };

  componentDidMount() {
    let newImage = new Image();
    newImage.onload = function(img) {
      document.getElementById("login-image").classList.remove("login-image-init");
      document.getElementById("login-image").classList.add("login-image-loaded");
    };
    newImage.src = `${process.env.PUBLIC_URL}/img/background.png`;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <main>
        <section className="login-image login-image-init" id="login-image" />
        <section className="p-5 login-content d-flex justify-content-center align-items-center">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "Please input your username!" }]
              })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "Please input your Password!" }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </section>
      </main>
    );
  }
}
const WrappedLogin = Form.create()(Login);
export default connect(
  state => ({
    isLoading: state.loadReducer.loading,
    isSuccess: state.loadReducer.is_success
  }),
  {
    processLogin,
    processLogout
  }
)(withRouter(WrappedLogin));
