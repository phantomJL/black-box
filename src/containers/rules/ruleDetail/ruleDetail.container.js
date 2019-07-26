import React, { Component } from "react";
import { Typography, Row, Col, Breadcrumb, Icon } from "antd";
import { loadUserInfo } from "../../../redux/actions/localStorage.action";
import "./ruleDetail.container.css";

const { Title } = Typography;

export default class ZoneDetail extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&callback=initMap`);
    window.initMap = this.initMap;
  };
  handleLocationError = (browserHasGeolocation, infoWindow, pos, map) => {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  };
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: { lat: 36.778259, lng: -119.417931 }
    });
  };
  render() {
    return (
      <main>
        <Title style={{ letterSpacing: ".2rem" }}>RULE DETAIL</Title>

        <section>
          <div className="d-flex justify-content-center">
            <div id="map" className="mb-4" style={{ height: "50vh", width: "100vh" }} />
          </div>

          <small>{`STATUS :  "ACTIVE" `}</small>
          <Row className="mt-2 mb-4">
            <Col span={6}>
              <i class="far fa-map mr-2" style={{ fontSize: "20px" }} />
            </Col>
            <Col span={18}>
              <h5>{`ZONE A to ZONE B `}</h5>
            </Col>
          </Row>
          <h6> {`Fixed Price : $ 20.00 up to 30 mins`}</h6>
          <h6> {`Surpass Rate : $ 1.50/min`}</h6>
        </section>
        {/* </div> */}
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
