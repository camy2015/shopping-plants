import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../home/HomePage";
import { PlantRoutes } from "../plant-shopping";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/plants/*" element={<PlantRoutes />} />

      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
