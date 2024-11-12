import React, { useCallback, useState } from "react";
import {
  AdvancedMarker,
  AdvancedMarkerAnchorPoint,
  AdvancedMarkerProps,
  APIProvider,
  InfoWindow,
  Map,
  Pin,
  useAdvancedMarkerRef,
  CollisionBehavior,
} from "@vis.gl/react-google-maps";

import { getData } from "./data";

import ControlPanel from "./control-panel";

import { Polyline } from "./polyline";
import { POLYGONS } from "./encoded-polygon-data";
import { poly2 } from "./poly2";
import { poly3 } from "./poly3";

import "./style.css";
import { newPoly } from "./newPoly";



export type AnchorPointName = keyof typeof AdvancedMarkerAnchorPoint;

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const MapComponent = () => {
  const [markers] = useState(null);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedMarker, setSelectedMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  const [infoWindowShown, setInfoWindowShown] = useState(false);
  const onMouseEnter = useCallback((id: string | null) => setHoverId(id), []);
  const onMouseLeave = useCallback(() => setHoverId(null), []);
  const onMarkerClick = useCallback(
    (id: string | null, marker?: google.maps.marker.AdvancedMarkerElement) => {
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
    <APIProvider apiKey={API_KEY}
    libraries={['marker']}
    onLoad={()=>console.log("map loads")}>

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
          {markers.map(({ id, zIndex: zIndexDefault, position, type }) => {
            let zIndex = zIndexDefault;

            if (hoverId === id) {
              zIndex = Z_INDEX_HOVER;
            }

            if (selectedId === id) {
              zIndex = Z_INDEX_SELECTED;
            }
            if (type === "html") {
              return (
                <React.Fragment key={id}>
                  <AdvancedMarkerWithRef
                    position={position}
                    zIndex={zIndex}
                    anchorPoint={AdvancedMarkerAnchorPoint[anchorPoint]}
                    className="custom-marker"
                    style={{
                      transform: `scale(${
                        [hoverId, selectedId].includes(id) ? 1.3 : 1
                      })`,
                      transformOrigin:
                        AdvancedMarkerAnchorPoint[BOTTOM_CENTER].join(" "),
                    }}
                    onMarkerClick={(
                      marker: google.maps.marker.AdvancedMarkerElement
                    ) => onMarkerClick(id, marker)}
                    onMouseEnter={() => onMouseEnter(id)}
                    // fro preventing collosion

                    // collisionBehavior={
                    //   CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY
                    // }
                    onMouseLeave={onMouseLeave}
                  >
                    <div
                      className={`custom-html-content ${
                        selectedId === id ? "selected" : ""
                      }`}
                    >
                      {" "}
                      1
                    </div>
                  </AdvancedMarkerWithRef>

                  {/* anchor point visualization marker */}
                  <AdvancedMarkerWithRef
                    onMarkerClick={(
                      marker: google.maps.marker.AdvancedMarkerElement
                    ) => onMarkerClick(id, marker)}
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
        {markers.map((marker) => {
          const isHovered = marker.id === hoverId;
          const isSelected = marker.id === selectedId;
          return (
            <AdvancedMarker
              key={marker.id}
              position={marker.position}
              zIndex={isSelected ? Z_INDEX_SELECTED : isHovered ? Z_INDEX_HOVER : marker.zIndex}
              onClick={() => onMarkerClick(marker.id)}
              onMouseEnter={() => onMouseEnter(marker.id)}
              onMouseLeave={onMouseLeave}
              anchorPoint={anchorPoint}
              ref={useAdvancedMarkerRef()}
            >
              <Pin
                color={isSelected ? "red" : isHovered ? "blue" : "green"}
                size={isSelected ? 40 : isHovered ? 30 : 20}
              />
            </AdvancedMarker>
          );
        })}
        {selectedMarker && infoWindowShown && (
          <InfoWindow
            anchor={selectedMarker}
            onCloseClick={handleInfowindowCloseClick}
          >
            <div>
              <h1>{selectedMarker.id}</h1>
              <p>{selectedMarker.position.lat}</p>
              <p>{selectedMarker.position.lng}</p>
            </div>
          </InfoWindow>
        )}
        <Polyline />
        {POLYGONS.map((polygon) => (
          <Polyline key={polygon.id} path={polygon.path} />
        ))}
        <Polyline path={poly2} />
        <Polyline path={poly3} />
        <Polyline path={newPoly} />
      </Map>
    </APIProvider>
    
  );
};

export default MapComponent;
