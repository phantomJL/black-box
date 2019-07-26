import React, { Component } from "react";
import { Modal, Button, Form, Select, Input, Typography, Icon, Upload, message } from "antd";

const { Option } = Select;
const { Title } = Typography;

class CreateSetting extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === "male" ? "man" : "lady"}!`
    });
  };

  render() {
    const { visible, loading } = this.props.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Modal
          visible={visible}
          onOk={this.props.onOK}
          onCancel={this.props.onCancel}
          footer={[
            <Button key="back" onClick={this.props.onCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.props.onOK}>
              Submit
            </Button>
          ]}
        >
          <Title level={3} className="text-center mb-4">
            Add Vehicle Type
          </Title>

          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
            <Form.Item label="Name" className="d-flex justify-content-around">
              {getFieldDecorator("name", {
                rules: [{ required: true, message: "Please input your name!" }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Price Prefix" className="d-flex justify-content-around">
              {getFieldDecorator("price", {
                rules: [{ required: true, message: "Please input your price!" }]
              })(<Input prefix={<small style={{ color: "rgba(0,0,0,.25)" }}>$</small>} />)}
            </Form.Item>
            <Form.Item label="Max Capacity" className="d-flex justify-content-around">
              {getFieldDecorator("capacity", {
                rules: [{ required: true, message: "Please input your capacity!" }]
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
const NewSetting = Form.create()(CreateSetting);
export default NewSetting;
