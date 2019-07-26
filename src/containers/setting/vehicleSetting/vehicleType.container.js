import React, { Component } from "react";
import { Table, Divider, Tag, Typography, Icon, Button } from "antd";
import { parseAmountNoSign } from "../../../redux/actions/utilities.action";
import NewVehicle from "./vehicleSetting.component/createVehicle.modal";
const { Title } = Typography;

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: "1",
    name: "John",
    price: 150,
    capacity: 4,
    image: "/img/FakeDP.jpeg"
  },
  {
    key: "2",
    name: "Jim",
    price: 150,
    capacity: 4,
    image: "/img/FakeDP.jpeg"
  },
  {
    key: "3",
    name: "Joe",
    price: 150,
    capacity: 4,
    image: "/img/FakeDP.jpeg"
  }
];
export default class VehicleType extends Component {
  //==========modal==============
  state = {
    loading: false,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  //==========modal==============
  render() {
    return (
      <main>
        <div className="d-flex justify-content-between">
          <Title style={{ letterSpacing: ".2rem" }} level={3}>
            VEHICLE TYPE
          </Title>
          <div>
            <Button onClick={this.showModal}>New Vehicle</Button>
            <NewVehicle state={this.state} onOk={this.handleOk} onCancel={this.handleCancel} />
          </div>
        </div>

        <Table dataSource={data}>
          <Column title="Name" dataIndex="name" key="name" />
          <Column
            title="Price Prefix"
            dataIndex="price"
            key="price"
            render={(text, record) => <div>{parseAmountNoSign(record.price, 2)}</div>}
          />
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Max Capacity" dataIndex="capacity" key="capacity" />
          <Column
            title="Image"
            dataIndex="image"
            key="image"
            render={(text, record) => (
              <img src={record.image} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span className="d-flex">
                <a href="javascript:;" className="d-flex align-items-center">
                  <Icon type="edit" className="mr-2" />
                  <small>Edit</small>
                </a>

                <Divider type="vertical" />
                <a href="javascript:;" className="d-flex align-items-center">
                  <Icon type="delete" className="mr-2" />
                  <small>Delete</small>
                </a>
              </span>
            )}
          />
        </Table>
      </main>
    );
  }
}
