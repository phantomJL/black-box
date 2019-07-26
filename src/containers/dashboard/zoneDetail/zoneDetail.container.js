import React, { Component } from "react";
import { Typography, Row, Col, Breadcrumb, Icon } from "antd";
import { loadUserInfo } from "../../../redux/actions/localStorage.action";
import "./zoneDetail.container.css";
import Map from "../../../components/shared/map/map.container";

const { Title } = Typography;
const data = {
  zip_codes: ["91847", "94723", "87201", "94830", "81734", "91847", "94723", "87201", "94830", "81734"]
};
export default class ZoneDetail extends Component {
  componentDidMount() {}
  render() {
    return (
      <main>
        <section className="p-4">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-4">
            <Breadcrumb.Item onClick={() => this.props.history.push("/dashboard")}>
              <span className="anticon anticon-desktop mr-2">
                <i class="fas fa-clipboard-list" />
              </span>
              <span>Dashboard</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Zone Detail</Breadcrumb.Item>
          </Breadcrumb>
          {/* Breadcrumb */}
          {/* title */}
          <Title style={{ letterSpacing: ".2rem" }}>ZONE DETAIL</Title>
          {/* title */}
        </section>

        <section>
          <Row className="p-4 d-flex justify-content-around">
            <Col span={12} className="p-4 d-flex  justify-content-around">
              <Map
                style={{ width: "100%", height: "50vh" }}
                id="zoneDetailMap"
                options={{
                  center: { lat: 36.778259, lng: -119.417931 },
                  zoom: 8
                }}
              />
            </Col>

            <Col span={12} className="text-center ">
              <div className="mb-4">
                <h4>Identifier:</h4>
                <span>Zone A</span>
              </div>

              <div>
                <h4>Zip Codes:</h4>

                {data.zip_codes.map((zip, idx) => {
                  return (
                    <div className="d-flex align-items-center justify-content-center">
                      <i class="fas fa-map-pin mr-3" />
                      <div>{zip}</div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </section>
        {/* </div> */}
      </main>
    );
  }
}
