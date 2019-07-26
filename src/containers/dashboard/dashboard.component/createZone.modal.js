import React, { Component } from "react";
import { Modal, Button, Form, Select, Input, Typography } from "antd";
import Map from "../../../components/shared/map/map.container";
const { Option } = Select;
const { Title } = Typography;

class CreateZoneModal extends Component {
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
      <main>
        <Modal
          visible={visible}
          // title="Add Zone"
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
            Create Zone
          </Title>

          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
            <Form.Item label="Identifier" className="d-flex justify-content-around">
              {getFieldDecorator("identifier", {
                rules: [{ required: true, message: "Please input your identifier!" }]
              })(<Input />)}
            </Form.Item>
            <Map
              style={{ width: "100%", height: "50vh" }}
              id="createZoneMap"
              options={{
                center: { lat: 36.778259, lng: -119.417931 },
                zoom: 10
              }}
              onMapLoad={map => {
                console.log("here");
                map.data.addGeoJson(this.props.zipcodes);
              }}
              zipcodes={this.props.zipcodes}
            />
          </Form>
        </Modal>
      </main>
    );
  }
}
const NewZone = Form.create()(CreateZoneModal);
export default NewZone;
