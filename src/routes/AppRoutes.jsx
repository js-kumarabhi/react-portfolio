import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import MainPage from "../pages/MainPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
