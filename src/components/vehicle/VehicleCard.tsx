// src/components/vehicle/VehicleCard.tsx
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Vehicle } from "../../store/vehicleStore";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const lastUpdate = new Date(vehicle.updated_at).toLocaleString();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{vehicle.name}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        <p>
          <strong>Status:</strong> {vehicle.status}
        </p>
        <p>
          <strong>Speed:</strong> {vehicle.speed} km/h
        </p>
        <p>
          <strong>Last Update:</strong> {lastUpdate}
        </p>
      </CardContent>
      <CardFooter>
        <Link to={`/vehicles/${vehicle.id}`} className="w-full">
          <Button className="w-full">Detail</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
