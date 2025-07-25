import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Vehicle } from "@/store/vehicleStore";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const lastUpdate = new Date(vehicle.updated_at).toLocaleString();

  return (
    <Card className="hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-5">
        <CardTitle className="text-xl">{vehicle.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-5 space-y-2 text-gray-700 dark:text-gray-300">
        <p>
          <span className="font-semibold">Status:</span> {vehicle.status}
        </p>
        <p>
          <span className="font-semibold">Speed:</span> {vehicle.speed} km/h
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last Update: {lastUpdate}
        </p>
      </CardContent>
      <CardFooter className="p-5">
        <Link to={`/vehicles/${vehicle.id}`} className="w-full">
          <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl shadow-md transition">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
