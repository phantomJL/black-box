import React, { Component } from "react";
import RuleCard from "./ruleList.component/rule.card";
import { List, Typography, Row, Col } from "antd";

import Spring from "./ruleList.component/scroll-spring.component";
import RuleDetail from "./ruleList.component/ruleDetail.component";

const { Title } = Typography;

export default class RuleListContainer extends Component {
  state = { visible: false, tags: ["Tag 1", "Tag 2", "Tag 3"], inputVisible: false, inputValue: "" };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  // onCardClick = rule_tokenn => {
  //   console.log(rule_tokenn);
  //   this.props.history.push(`/rule/${rule_tokenn}`);
  // };
  render() {
    return (
      <main>
        <section>
          {/* <div style={{ height: "10%", margin: "1vw" }}>
            <Spring />
          </div> */}
          <Title style={{ letterSpacing: ".2rem" }} className="text-center">
            CALIFORNIA
          </Title>
          <h3 style={{ letterSpacing: ".2rem" }} className="text-center">
            ZONE LIST
          </h3>
        </section>

        <section className="pt-4">
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 1,
              md: 2,
              lg: 2,
              xl: 3
            }}
            dataSource={ruleList}
            renderItem={item => <RuleCard rule={item} showDrawer={this.showDrawer} />}
          />
          <RuleDetail onClose={this.onClose} visible={this.state.visible} />
        </section>
      </main>
    );
  }
}

const ruleList = [
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",
    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 1
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 1
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 1
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",
    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 1
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 1
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 1
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",
    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 1
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 1
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 1
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",
    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 2
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 1
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 1
  },
  {
    from: "1",
    to: "2",
    rule_token: "239487291823",

    fix_price: 2000,
    surpass_rate: 150,
    status: 1
  }
];
