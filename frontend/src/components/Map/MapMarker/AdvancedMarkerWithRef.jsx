import { AdvancedMarker, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";

const AdvancedMarkerWithRef = ({ children, onMarkerClick, ...props }) => {
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <AdvancedMarker
      ref={markerRef}
      onClick={() => marker && onMarkerClick(marker)}
      {...props}
    >
      {children}
    </AdvancedMarker>
  );
};

export default AdvancedMarkerWithRef;