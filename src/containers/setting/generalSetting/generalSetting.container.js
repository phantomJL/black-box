import React, { Component } from "react";
import { Table, Divider, Tag, Typography, Icon, Button } from "antd";
import { parseAmountNoSign } from "../../../redux/actions/utilities.action";
import NewSetting from "./generalSetting.component/newSetting.modal";
const { Title } = Typography;

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: "1",
    value: 150
  },
  {
    key: "1",
    value: 150
  },
  {
    key: "1",
    value: 150
  },
  {
    key: "1",
    value: 150
  },
  {
    key: "1",
    value: 150
  },
  {
    key: "1",
    value: 150
  }
];
export default class GeneralSetting extends Component {
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
            General Setting
          </Title>
          <div>
            <Button onClick={this.showModal}>New Setting</Button>
            <NewSetting state={this.state} onOk={this.handleOk} onCancel={this.handleCancel} />
          </div>
        </div>

        <Table dataSource={data}>
          <Column title="Key" dataIndex="key" key="key" />
          <Column title="Value" dataIndex="value" key="value" />

          <Column
            title="Edit"
            key="edit"
            render={(text, record) => (
              <span className="d-flex">
                <a href="javascript:;" className="d-flex align-items-center">
                  <Icon type="edit" className="mr-2" />
                </a>
              </span>
            )}
          />
          <Column
            title="Delete"
            key="delete"
            render={(text, record) => (
              <span className="d-flex">
                <a href="javascript:;" className="d-flex align-items-center">
                  <Icon type="delete" className="mr-2" />
                </a>
              </span>
            )}
          />
        </Table>
      </main>
    );
  }
}
