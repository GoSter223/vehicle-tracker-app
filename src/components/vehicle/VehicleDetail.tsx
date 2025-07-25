// src/components/vehicle/VehicleDetail.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { Telemetry } from "../../store/vehicleStore";

interface VehicleDetailProps {
  telemetry: Telemetry;
}

const VehicleDetail = ({ telemetry }: VehicleDetailProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Telemetry Details</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        <div>
          <strong>Odometer:</strong> {telemetry.odometer.toFixed(2)} km
        </div>
        <div>
          <strong>Fuel Level:</strong> {telemetry.fuel_level}%
        </div>
        <div>
          <strong>Speed:</strong> {telemetry.speed} km/h
        </div>
        <div>
          <strong>Timestamp:</strong>{" "}
          {new Date(telemetry.timestamp).toLocaleString()}
        </div>
        <div className="md:col-span-2">
          <strong>Location:</strong> {telemetry.latitude}, {telemetry.longitude}
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleDetail;
