import React, { Component } from "react";
import Dimensions from "react-dimensions";
import { Container } from "reactstrap";
import MapGL from "react-map-gl";

const TOKEN =
  "pk.eyJ1IjoiZ3N0YWR0bGVyIiwiYSI6ImNraGh4NWc3bDAyaGEycXJ5dDh6MTg3MnYifQ.3ivViOxWLMwuoGBEhmRMxw";

class Map extends Component {

  state = {
    viewport: {
      latitude: -8.191998,
      longitude: -34.9175803,
      zoom: 13.8,
      bearing: 0,
      pitch: 0
    }
  };

  render() {
    const { width, height } = this.props;
    return (
      <MapGL
        width={width}
        height={height}
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

const DimensionedMap = Dimensions()(Map);
const AbrigosMap = () => (
  <Container>
    <DimensionedMap width={600} height={400} />
  </Container>
);

export default AbrigosMap;
