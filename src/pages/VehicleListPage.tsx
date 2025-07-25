// src/pages/VehicleListPage.tsx
import { useEffect } from "react";
import { useVehicleStore } from "../store/vehicleStore";
import VehicleCard from "../components/vehicle/VehicleCard";
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";

const VehicleListPage = () => {
  const { vehicles, loading, error, getVehicles } = useVehicleStore();

  useEffect(() => {
    getVehicles();
  }, [getVehicles]);

  if (loading) {
    return <p>Loading vehicles...</p>;
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Vehicle List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default VehicleListPage;
