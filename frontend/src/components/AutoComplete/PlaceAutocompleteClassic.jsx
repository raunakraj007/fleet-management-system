import React, { useRef, useEffect, useState } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { useSelector } from "react-redux";


const PlaceAutocompleteClassic = ({ onPlaceSelect }) => {
  const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
  const [service, setService] = useState(false);
  const inputRef = useSelector((state) => state.mapSlice?.autoCompleteId);

  console.log("inputRef", inputRef);

  // const inputRef = useRef(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef) return;

    const options = {
      fields: ["geometry", "name", "formatted_address"],
    };

    const autoCompleteInstance = setPlaceAutocomplete(
      new places.Autocomplete(document.getElementById(inputRef), options)
    );
    setService(true);
    // console.log("done setting placeAutocomplete", a);
  }, [places, inputRef]);

  useEffect(() => {
    
    

    if (!placeAutocomplete) return;

    const istance = placeAutocomplete.addListener("place_changed", () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });
    
    console.log("done setting listener", istance);

    return ()=>{
      google.maps.event.removeListener(istance);
      console.log("removed listener");
    }

  }, [onPlaceSelect, placeAutocomplete]);

  // return <input ref={inputRef} className="h-7" />;
  return <></>;
};

export default PlaceAutocompleteClassic;
