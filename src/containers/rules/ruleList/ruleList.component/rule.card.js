import React from "react";
import { Card, List, Row, Col } from "antd";
import { parseAmountNoSign } from "../../../../redux/actions/utilities.action";
import "./rule.card.css";
const { Meta } = Card;

/**
 * @title
 * @description
 */
export default function ruleCard(props) {
  return (
    <List.Item key={props.rule.id} onClick={props.showDrawer}>
      <Card hoverable>
        <small>{`STATUS : ${props.rule.status === 1 ? "ACTIVE" : "INACTIVE"}`}</small>
        <Row className="mt-2 mb-4">
          <Col span={6}>
            <i class="far fa-map mr-2" style={{ fontSize: "20px" }} />
          </Col>
          <Col span={18}>
            <h5>{`ZONE ${props.rule.from} to ZONE ${props.rule.to} `}</h5>
          </Col>
        </Row>
        <h6> {`Fixed Price : $ ${parseAmountNoSign(props.rule.fix_price, 2)} up to 30 mins`}</h6>
        <h6> {`Surpass Rate : $ ${parseAmountNoSign(props.rule.surpass_rate, 2)}/min`}</h6>
      </Card>
    </List.Item>
  );
}
