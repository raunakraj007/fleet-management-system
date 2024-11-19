import React, { useEffect, useState } from "react";
import {
  APIProvider,
  ControlPosition,
  Map,
  MapControl,
  Marker,
} from "@vis.gl/react-google-maps";
import PlaceAutocompleteClassic from "./PlaceAutocompleteClassic";
import MapHandler from "./MapHandler";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const main = ({ loc1, loc2, setLoc1, setLoc2, selectLoc}) => {
  // console.log(inputRef)
  const [selectedPlace, setSelectedPlace] = useState(null);

  const [markerPositions, setMarkerPositions] = useState([
    { lat: Number(loc1?.latitude ?? 0), lng: Number(loc1?.longitude ?? 0) },
    { lat: Number(loc2?.latitude ?? 0), lng: Number(loc2?.longitude ?? 0) },
  ]);

  useEffect(() => {
    if (selectedPlace) {
      if (selectLoc === 1) {
        const newPosition = {
          lat: selectedPlace?.geometry?.location.lat(),
          lng: selectedPlace?.geometry?.location.lng(),
        };
        setMarkerPositions([newPosition, markerPositions[1]]);

        setLoc1({
          latitude: selectedPlace?.geometry?.location.lat(),
          longitude: selectedPlace?.geometry?.location.lng(),
        });
      }
      if (selectLoc === 2) {
        const newPosition = {
          lat: selectedPlace?.geometry?.location.lat(),
          lng: selectedPlace?.geometry?.location.lng(),
        };
        setMarkerPositions([markerPositions[0], newPosition]);
        setLoc2({
          latitude: selectedPlace?.geometry?.location.lat(),
          longitude: selectedPlace?.geometry?.location.lng(),
        });
      }
    }
  }, [selectedPlace]);


  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        defaultZoom={12}
        defaultCenter={{ lat: 31.234875, lng: 75.804975 }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        onClick={(event) => {
          console.log(event);
          if (selectLoc === 1) {
            const newPosition = {
              lat: event.detail.latLng.lat,
              lng: event.detail.latLng.lng,
            };
            // ref1.current.value = `${newPosition.lat},${newPosition.lng}`;
            setMarkerPositions([newPosition, markerPositions[1]]);
            setLoc1({
              latitude: event.detail.latLng.lat,
              longitude: event.detail.latLng.lng,
            });
          }
          if (selectLoc === 2) {
            const newPostion = {
              lat: event.detail.latLng.lat,
              lng: event.detail.latLng.lng,
            };
            // ref2.current.value = `${newPostion.lat},${newPostion.lng}`;
            setMarkerPositions([markerPositions[0], newPostion]);
            setLoc2({
              latitude: event.detail.latLng.lat,
              longitude: event.detail.latLng.lng,
            });
          }
        }}
      />

      {/* <Marker
        position={{ lat: 22.54992, lng: 0 }}
        clickable={true}
        onClick={(event) => {
          console.log("event: ", event);
        }}
      /> */}

      {markerPositions.map((position, index) => {
        if (position.lat === 0 && position.lng === 0) return null;

        return (
          <Marker
            key={index}
            position={position}
            clickable={true}
            onClick={() => {
              selectLoc(index);
            }}
          />
        );
      })}

      <MapControl position={ControlPosition.TOP}>
        <PlaceAutocompleteClassic onPlaceSelect={setSelectedPlace} />
      </MapControl>

      <MapHandler place={selectedPlace} />
    </APIProvider>
  );
};

export default main;
