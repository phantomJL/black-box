import React, { Component } from "react";
import { Modal, Button, Form, Select, Input, Typography, Icon, Upload, message } from "antd";

const { Option } = Select;
const { Title } = Typography;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === "image/jpeg";
  if (!isJPG) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJPG && isLt2M;
}
class CreateVehicleModal extends Component {
  state = {
    loading: false
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

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

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
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
            <Form.Item label="Image" className="d-flex justify-content-around">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
              </Upload>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
const NewVehicle = Form.create()(CreateVehicleModal);
export default NewVehicle;
