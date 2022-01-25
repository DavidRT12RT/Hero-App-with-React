import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//Components
import { LoginScreen } from "../login/LoginScreen";
import { DashboradRoutes } from "./DashboradRoutes";

export const AppRouter = () => {
  //"/*" Todas las demas rutas se encarga de administrarlas el DashboradRoutes
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<DashboradRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
