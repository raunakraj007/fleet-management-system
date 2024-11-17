import React, { useCallback, useEffect, useState } from "react";
import {
  AdvancedMarker,
  AdvancedMarkerAnchorPoint,
  APIProvider,
  InfoWindow,
  Map,
  Pin,
  useAdvancedMarkerRef,
  CollisionBehavior,
} from "@vis.gl/react-google-maps";

import ReactLogo from "../../assets/react.svg";

import { getData } from "./data";
// import ControlPanel from "./control-panel";
import { Polyline } from "./polyline";
import { POLYGONS } from "./encodd-polygon-data";
// import { poly2 } from "./poly2";
// import { poly3 } from "./poly3";

import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getData2 } from "./getShipments";
import { Search } from "lucide-react";
import axios from "axios";
// import { newPoly } from "./newPoly";
import { addOptimizeRouteRes } from "../../redux/optimizeRouteRes";

const colors = [
  "#FF5733", // Hexadecimal
  "#33FF57",
  "#3357FF",
  "rgb(255, 99, 71)", // RGB
  "rgb(99, 255, 132)",
  "rgb(71, 99, 255)",
  "red", // Color names
  "green",
  "blue",
  "cyan",
  "magenta",
  "yellow",
];

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
// const BACKEND_URL_ROUTE_OPTIMIZER = import.meta.env
//   .VITE_BACKEND_URL_ROUTE_OPTIMIZER;

const BACKEND_URL_ROUTE_OPTIMIZER =
  "http://localhost:8000/api/optimization/fleet-routing/optimize-tours";

const MapComponent = () => {
  const dispatch = useDispatch();
  const shipments = useSelector((state) => state.shipmentSlice.shipments);
  const vehicles = useSelector((state) => state.vehiclesSlice.vehicles);
  const scenarios = useSelector((state) => state.scenarioSlice.scenarios);

  const Routes = useSelector(
    (state) => state.optimizeRouteRes?.optimizeRouteRes?.routes
  );

  const routeIndex = useSelector((state) => state.mapSlice?.routeIndex);
  console.log("Route Index: ", routeIndex);
  console.log(Routes);

  console.log(shipments);

  useEffect(() => {
    console.log("Inside useEffect");
    console.log("Route Index Inside Use: ", routeIndex);
    let shimentIndicies = null;
    if (routeIndex !== null) {
      console.log("Inside If", routeIndex);
      shimentIndicies = Routes[routeIndex]?.visits?.map(
        (visit) => visit?.shipmentIndex
      );
      console.log(shimentIndicies);
    }
    const data = getData2(shipments, shimentIndicies);
    // console.log(data);
    setMarkers(data);
    setZ_INDEX_HOVER(data?.length + 1);
    setZ_INDEX_SELECTED(data?.length);
  }, [shipments, routeIndex]);

  useEffect(() => {
    console.log("Routes");

    if (routeIndex !== null) {
      const PolyLines = Routes[routeIndex]?.routePolyline?.points;
      setPolyLines([PolyLines]);
      return;
    }

    const polyLines = Routes?.map((route) => route?.routePolyline?.points);
    setPolyLines(polyLines);
    // console.log()
    console.log(Routes);
  }, [Routes, routeIndex]);

  const [markers, setMarkers] = useState(null);
  const [Z_INDEX_HOVER, setZ_INDEX_HOVER] = useState(null);
  const [Z_INDEX_SELECTED, setZ_INDEX_SELECTED] = useState(null);
  const [hoverId, setHoverId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [anchorPoint, setAnchorPoint] = useState("BOTTOM");
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [infoWindowShown, setInfoWindowShown] = useState(false);
  const [polyLines, setPolyLines] = useState(null);

  console.log(markers);

  const onMouseEnter = useCallback((id) => setHoverId(id), []);
  const onMouseLeave = useCallback(() => setHoverId(null), []);

  const onMarkerClick = useCallback(
    (id, marker) => {
      setSelectedId(id);
      if (marker) {
        setSelectedMarker(marker);
      }
      if (id !== selectedId) {
        setInfoWindowShown(true);
      } else {
        setInfoWindowShown((isShown) => !isShown);
      }
    },
    [selectedId]
  );

  const onMapClick = useCallback(() => {
    setSelectedId(null);
    setSelectedMarker(null);
    setInfoWindowShown(false);
  }, []);

  const handleInfowindowCloseClick = useCallback(
    () => setInfoWindowShown(false),
    []
  );

  return (
    <>
      <APIProvider
        apiKey={API_KEY}
        libraries={["marker"]}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <div className="map-container">
          <Map
            mapId={"bf51a910020fa25a"}
            defaultZoom={12}
            defaultCenter={{ lat: 31.234875, lng: 75.804975 }}
            gestureHandling={"greedy"}
            onClick={onMapClick}
            mapTypeId="roadmap"
            clickableIcons={false}
            disableDefaultUI
          >
            {/* <Polyline strokeWeight={3} strokeColor={"purple"} encodedPath={newPoly[3]} /> */}
            {/* <Polyline
              strokeWeight={5}
              strokeColor={"#ff22cc88"}
              encodedPath={POLYGONS}
            /> */}

            {polyLines &&
              polyLines.map((polyLine, index) => (
                <Polyline
                  key={index}
                  strokeWeight={5}
                  strokeColor={colors[index]}
                  encodedPath={polyLine}
                />
              ))}
            {/* <Polyline strokeWeight={10} strokeColor={"green"} encodedPath={poly2} /> */}
            {markers &&
              markers.map(({ id, zIndex: zIndexDefault, position, type }) => {
                let zIndex = zIndexDefault;

                if (hoverId === id) {
                  zIndex = Z_INDEX_HOVER;
                }

                if (selectedId === id) {
                  zIndex = Z_INDEX_SELECTED;
                }

                if (type === "pin") {
                  return (
                    <AdvancedMarkerWithRef
                      onMarkerClick={(marker) => onMarkerClick(id, marker)}
                      onMouseEnter={() => onMouseEnter(id)}
                      onMouseLeave={onMouseLeave}
                      key={id}
                      zIndex={zIndex}
                      className="custom-marker"
                      style={{
                        transform: `scale(${
                          [hoverId, selectedId].includes(id) ? 1.3 : 1
                        })`,
                        transformOrigin:
                          AdvancedMarkerAnchorPoint["BOTTOM"].join(" "),
                      }}
                      position={position}
                    >
                      <Pin
                        background={selectedId === id ? "#22ccff" : null}
                        borderColor={selectedId === id ? "#1e89a1" : null}
                        glyphColor={selectedId === id ? "#0f677a" : null}
                      />
                    </AdvancedMarkerWithRef>
                  );
                }

                if (type === "html") {
                  return (
                    <React.Fragment key={id}>
                      <AdvancedMarkerWithRef
                        position={position}
                        zIndex={zIndex}
                        anchorPoint={AdvancedMarkerAnchorPoint.BOTTOM_CENTER}
                        className="custom-marker"
                        style={{
                          transform: `scale(${
                            [hoverId, selectedId].includes(id) ? 1.3 : 1
                          })`,
                          transformOrigin:
                            AdvancedMarkerAnchorPoint.BOTTOM_CENTER.join(" "),
                        }}
                        onMarkerClick={(marker) => onMarkerClick(id, marker)}
                        onMouseEnter={() => onMouseEnter(id)}
                        onMouseLeave={onMouseLeave}
                      >
                        <div
                          className={`custom-html-content ${
                            selectedId === id ? "selected" : ""
                          }`}
                        >
                          <img
                            src={ReactLogo}
                            className="h-2/4"
                            alt="React Logo"
                          />
                        </div>
                      </AdvancedMarkerWithRef>

                      <AdvancedMarkerWithRef
                        onMarkerClick={(marker) => onMarkerClick(id, marker)}
                        zIndex={zIndex + 1}
                        onMouseEnter={() => onMouseEnter(id)}
                        onMouseLeave={onMouseLeave}
                        anchorPoint={AdvancedMarkerAnchorPoint.CENTER}
                        position={position}
                      >
                        <div className="visualization-marker"></div>
                      </AdvancedMarkerWithRef>
                    </React.Fragment>
                  );
                }
              })}

            {infoWindowShown && selectedMarker && (
              <InfoWindow
                anchor={selectedMarker}
                pixelOffset={[0, -2]}
                onCloseClick={handleInfowindowCloseClick}
              >
                <h2>Marker {selectedId}</h2>
                <p>Some arbitrary html to be rendered into the InfoWindow.</p>
              </InfoWindow>
            )}
          </Map>
        </div>
      </APIProvider>
    </>
  );
};

const AdvancedMarkerWithRef = (props) => {
  const { children, onMarkerClick, ...advancedMarkerProps } = props;
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <AdvancedMarker
      onClick={() => {
        if (marker) {
          onMarkerClick(marker);
        }
      }}
      ref={markerRef}
      {...advancedMarkerProps}
    >
      {children}
    </AdvancedMarker>
  );
};

export default MapComponent;
