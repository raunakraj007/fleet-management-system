import React from "react";
import AutoCompleteMap from "../../AutoComplete/main";

const Map = (props) => {
  const {
    currentVehicle,
    setAutoCompleteStartLocation,
    setAutoCompleteEndLocation,
    selectAutoComplete,
  } = props;
  
  return (
    <div className="h-full ">
      <AutoCompleteMap
        loc1={currentVehicle?.startWaypoint?.location?.latLng ?? null}
        loc2={currentVehicle?.endWaypoint?.location?.latLng ?? null}
        // ref1={startingLocation}
        // ref2={endingLocation}
        setLoc1={setAutoCompleteStartLocation}
        setLoc2={setAutoCompleteEndLocation}
        selectLoc={selectAutoComplete}
      />
    </div>
  );
};

export default Map;
