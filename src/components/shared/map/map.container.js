import React, { Component } from "react";
import { render } from "react-dom";
import { mapStyle } from "./map.style";
class Map extends Component {
  constructor(props) {
    super(props);
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(document.getElementById(this.props.id), {
      styles: mapStyle,
      ...this.props.options
    });

    console.log(this.props.zipcodes);
    if (this.props.zipcodes) {
      map.data.addGeoJson(this.props.zipcodes);
      map.data.setStyle({
        fillColor: "rgba(0, 0, 0, 0)",
        strokeColor: "#FFD700",
        strokeWeight: 1
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.zipcodes !== this.props.zipcodes) {
      this.onScriptLoad();
    }
  }
  componentDidMount() {
    if (!window.google) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}`;
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
      // Below is important.
      //We cannot access google.maps until it's finished loading
      s.addEventListener("load", e => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  render() {
    return <div style={this.props.style} id={this.props.id} />;
  }
}

export default Map;
