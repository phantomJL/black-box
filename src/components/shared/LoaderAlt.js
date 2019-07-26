import React from "react";
import "./LoaderAlt.css";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default class LoaderAlt extends React.Component {
  render() {
    return (
      <main>
        <section className="loader-overlay" />
        <section className="shadow-sm loader-container">
          {/* <img src="/img/giphy.gif" /> */}
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1" />
            <div className="sk-cube sk-cube2" />
            <div className="sk-cube sk-cube3" />
            <div className="sk-cube sk-cube4" />
            <div className="sk-cube sk-cube5" />
            <div className="sk-cube sk-cube6" />
            <div className="sk-cube sk-cube7" />
            <div className="sk-cube sk-cube8" />
            <div className="sk-cube sk-cube9" />
          </div>
          {/* <div className="text-center">{this.props.message || "加载中..."}</div> */}
        </section>
      </main>
    );
  }
  componentDidMount() {
    this.targetElement = document.getElementsByName("body");
    disableBodyScroll(this.targetElement);
  }
  componentWillUnmount() {
    this.targetElement = document.getElementsByName("body");
    enableBodyScroll(this.targetElement);
  }
}
