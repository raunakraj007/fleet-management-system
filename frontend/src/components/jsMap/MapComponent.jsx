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
import UpLogo from "../../assets/up-logo.svg";

import { getData } from "./data";
// import ControlPanel from "./control-panel";
import { Polyline } from "./polyline";
import { POLYGONS } from "./encodd-polygon-data";
// import { poly2 } from "./poly2";
// import { poly3 } from "./poly3";

import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getData2, getShipmentMarkers } from "./getShipments";
import { Search } from "lucide-react";
import axios from "axios";
// import { newPoly } from "./newPoly";
import { addOptimizeRouteRes } from "../../redux/optimizeRouteRes";
import MarkerIcon from "./MarkerIcon";

const colors = [
  "#f57c00",
  "#c2185b",
  "#7b1fa2",
  "#d32f2f",
  "#00796b",
  "#0097a7",
  "#e64a19",
  "#512da8",
  "#ffa000",
  "#a2acb1",
  "#455a64",
  "#1976d2",
  "#5d4037",
  "#388e3c",
  "#616161",
  "#303f9f",
  "#0288d1",
  "#689f38",
  "#afb42b",
  "#fbc02d",
  "#555555",
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
    // setMarkers(null);
    console.log("Route Index Inside Use: ", routeIndex);
    let shimentIndicies = null;
    if (routeIndex !== null) {
      console.log("Inside If", routeIndex);
      shimentIndicies = Routes[routeIndex]?.visits?.map(
        (visit) => visit?.shipmentIndex
      );
      console.log(shimentIndicies);
    }
    const data = getShipmentMarkers(shipments, shimentIndicies);
    // console.log(data);
    console.log("Data: ", data.length);
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

  console.log("Marker Length: ", markers?.length);

  const onMouseEnter = useCallback((id) => setHoverId(id), []);
  const onMouseLeave = useCallback(() => setHoverId(null), []);

  const onMarkerClick = useCallback(
    (id, marker) => {
      setSelectedId(id);
      if (marker) {
        console.log(marker);
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
                  strokeWeight={3}
                  strokeColor={routeIndex ? colors[routeIndex] : colors[index]}
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
                        // style={{background:"red"}}
                        className={`custom-html-content ${
                          selectedId === id ? "selected" : ""
                        }`}
                      >
                        <MarkerIcon
                          direction={type === "pickup" ? "up" : "down"}
                          size="20px"
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
