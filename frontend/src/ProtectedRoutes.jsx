import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      Navigate<{ to: string }>("/login", { replace: true });
    }
  });

  return null;
};

export default ProtectedRoutes;
