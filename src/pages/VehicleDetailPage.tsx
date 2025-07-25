// src/pages/VehicleDetailPage.tsx
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useVehicleStore } from "@/store/vehicleStore";
import VehicleDetail from "@/components/vehicle/VehicleDetail";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const VehicleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const vehicleId = Number(id);
  const { vehicle, loading, error, getVehicleById, vehicles } =
    useVehicleStore();

  useEffect(() => {
    if (vehicleId) {
      getVehicleById(vehicleId);
    }
  }, [vehicleId, getVehicleById]);

  const vehicleInfo = vehicles.find((v) => v.id === vehicleId);

  if (loading) {
    return <p>Loading vehicle details...</p>;
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
        <Link to="/">
          <Button variant="link">Back to List</Button>
        </Link>
      </Alert>
    );
  }

  if (!vehicle) {
    return <p>No data available.</p>;
  }

  return (
    <div className="space-y-6">
      <Link to="/">
        <Button variant="outline">← Back to List</Button>
      </Link>
      <h1 className="text-3xl font-bold">
        {vehicleInfo?.name || "Vehicle Detail"}
      </h1>
      <VehicleDetail telemetry={vehicle} />
    </div>
  );
};

export default VehicleDetailPage;
