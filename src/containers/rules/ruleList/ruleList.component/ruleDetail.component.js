import React from "react";
import { Drawer, List, Avatar, Divider, Col, Row } from "antd";
import RuleDetail from "../../ruleDetail/ruleDetail.container";

export default function ruleDetail(props) {
  const pStyle = {
    fontSize: 16,
    color: "rgba(0,0,0,0.85)",
    lineHeight: "24px",
    display: "block",
    marginBottom: 16
  };
  const DescriptionItem = ({ title, content }) => (
    <div
      style={{
        fontSize: 14,
        lineHeight: "22px",
        marginBottom: 7,
        color: "rgba(0,0,0,0.65)"
      }}
    >
      <p
        style={{
          marginRight: 8,
          display: "inline-block",
          color: "rgba(0,0,0,0.85)"
        }}
      >
        {title}:
      </p>
      {content}
    </div>
  );

  return (
    <Drawer
      width={"50%"}
      placement="right"
      style={{ backgroundColor: "rgb(0,0,0,0)" }}
      closable={false}
      onClose={props.onClose}
      visible={props.visible}
    >
      <RuleDetail />
    </Drawer>
  );
}
