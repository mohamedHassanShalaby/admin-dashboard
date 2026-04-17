
import "./charts.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";

export default function GeographyChart() {
  return (
    <section className="geography">
      <h3>Geography Based Traffic</h3>

      <div className="mapContainer">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 130,
          }}
        >
          <ZoomableGroup center={[30, 15]} zoom={1}>
            <Geographies geography="/world.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#EAEAEC",
                        outline: "none",
                      },
                      hover: {
                        fill: "#747070",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#747070",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Marker على القاهرة */}
            <Marker coordinates={[31.2357, 30.0444]}>
              <text
                textAnchor="middle"
                y={-10}
                style={{ fontFamily: "system-ui", fill: "#333" }}
              >
                Cairo
              </text>
            </Marker>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </section>
  );
}
