import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Map from "../../components/shared/map/map.container";

import { Typography, Button } from "antd";
import NewZone from "./dashboard.component/createZone.modal";
import { findZipCodesByCenter } from "../../redux/actions/mapData.action";
const { Title } = Typography;

class Dashboard extends Component {
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

  async componentDidMount() {
    await this.props.findZipCodesByCenter({ center_lat: 36.778259, center_lng: -119.417931, zoom: 1.2 });
  }
  render() {
    console.log(this.props.zipcodes);
    return (
      <main>
        <div className="d-flex justify-content-between">
          <Title style={{ letterSpacing: ".2rem" }} level={3}>
            ZONE MAP
          </Title>
          <div>
            <Button onClick={this.showModal}>Create Zone</Button>
            <NewZone
              state={this.state}
              zipcodes={this.props.zipcodes}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            />
          </div>
        </div>

        <Map
          style={{ width: "100%", height: "100vh" }}
          id="myMap"
          options={{
            center: { lat: 36.778259, lng: -119.417931 },
            zoom: 8
          }}
        />
      </main>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default connect(
  state => ({
    zipcodes: state.mapDataReducer.zipcodes
  }),
  { findZipCodesByCenter }
)(withRouter(Dashboard));
