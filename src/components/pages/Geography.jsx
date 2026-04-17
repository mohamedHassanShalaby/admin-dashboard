import "./page.css";
import "../navbar/navbar.css";
import Navbar from "../navbar/Navbar";
import Titles from "../Title";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";

export default function Geographys({ openMenu }) {
  return (
    <div style={{ padding: "20px" }}>
      <Navbar openMenu={openMenu} />
      <section>
        <Titles title={"Geography"} desc={"Simple Geography Chart"} />
        <div
          className="mapContainer"
          style={{ border: "1px solid gray", marginTop: "50px" }}
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 120,
            }}
          >
            <ZoomableGroup center={[30, 15]} zoom={0}>
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
    </div>
  );
}
