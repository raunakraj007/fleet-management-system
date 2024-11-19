import { useState, useEffect } from 'react';

export const usePolylines = (Routes, routeIndex) => {
  const [polyLines, setPolyLines] = useState(null);

  useEffect(() => {
    if (routeIndex !== null) {
      const singleRoute = Routes[routeIndex]?.routePolyline?.points;
      setPolyLines([singleRoute]);
      return;
    }
    
    const allRoutes = Routes?.map(route => route?.routePolyline?.points);
    setPolyLines(allRoutes);
  }, [Routes, routeIndex]);

  return polyLines;
};