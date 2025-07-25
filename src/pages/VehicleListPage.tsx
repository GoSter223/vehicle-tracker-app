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
    return (
      <p className="text-center text-lg animate-pulse">Loading vehicles...</p>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-md mx-auto mt-10">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">🚗 Vehicle List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default VehicleListPage;
