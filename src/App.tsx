// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout";
import VehicleListPage from "@/pages/VehicleListPage";
import VehicleDetailPage from "@/pages/VehicleDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<VehicleListPage />} />
          <Route path="vehicles/:id" element={<VehicleDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
