import React, { useCallback } from "react";
import { APIProvider, Map, InfoWindow } from "@vis.gl/react-google-maps";
import { useSelector } from "react-redux";
import { MAPS_CONFIG } from "./constants";
import MarkerWithVisualization from "./MapMarker/MarkerWithVisualization";
import InfoWindowContent from "./InfoWindowContent";
import RoutePolylines from "./MapPolylines/RoutePolylines";
import { useMapMarkers } from "./hooks/useMapMarkers";
import { usePolylines } from "./hooks/usePolylines";

const MapComponent = () => {
  // Redux selectors
  const shipments = useSelector((state) => state.shipmentSlice.shipments);
  const Routes = useSelector(
    (state) => state.optimizeRouteRes?.optimizeRouteRes?.routes
  );
  const routeIndex = useSelector((state) => state.mapSlice?.routeIndex);

  // Custom hooks for state management
  const {
    markers,
    hoverId,
    selectedId,
    selectedMarker,
    infoWindowShown,
    zIndexes,
    setHoverId,
    setSelectedId,
    setSelectedMarker,
    setInfoWindowShown,
  } = useMapMarkers(shipments, Routes, routeIndex);

  const polyLines = usePolylines(Routes, routeIndex);

  // Event handlers
  const onMouseEnter = useCallback((id) => setHoverId(id), []);
  const onMouseLeave = useCallback(() => setHoverId(null), []);

  const onMarkerClick = useCallback(
    (id, marker) => {
      setSelectedId(id);
      if (marker) {
        setSelectedMarker(marker);
      }
      setInfoWindowShown((prev) => id !== selectedId || !prev);
    },
    [selectedId]
  );

  const onMapClick = useCallback(() => {
    setSelectedId(null);
    setSelectedMarker(null);
    setInfoWindowShown(false);
  }, []);

  const handleInfoWindowClose = useCallback(() => {
    setInfoWindowShown(false);
  }, []);

  return (
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={["marker"]}
    >
      <div className="map-container">
        <Map
          {...MAPS_CONFIG}
          gestureHandling="greedy"
          onClick={onMapClick}
          mapTypeId="roadmap"
          clickableIcons={false}
          disableDefaultUI
        >
          <RoutePolylines polyLines={polyLines} routeIndex={routeIndex} />

          {markers?.map(({ id, zIndex: baseZIndex, ...markerProps }) => (
            <MarkerWithVisualization
              key={markerProps.key}
              id={id}
              zIndex={
                hoverId === id
                  ? zIndexes.hover
                  : selectedId === id
                  ? zIndexes.selected
                  : baseZIndex
              }
              isSelected={selectedId === id}
              isHovered={hoverId === id}
              onMarkerClick={onMarkerClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              {...markerProps}
            />
          ))}

          {infoWindowShown && selectedMarker && (
            <InfoWindow
              anchor={selectedMarker}
              pixelOffset={[0, -2]}
              onCloseClick={handleInfoWindowClose}
            >
              <InfoWindowContent markerId={selectedId} Routes={Routes} shipments={shipments}/>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapComponent;
