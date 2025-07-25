// src/api/mockApi.ts

// Data dummy untuk daftar kendaraan
const mockVehicles = [
  {
    id: 1,
    name: "Toyota Avanza",
    status: "ACTIVE",
    speed: 60,
    updated_at: "2025-07-23T10:00:00Z",
  },
  {
    id: 2,
    name: "Honda Brio",
    status: "IDLE",
    speed: 0,
    updated_at: "2025-07-23T10:05:00Z",
  },
  {
    id: 3,
    name: "Mitsubishi Pajero",
    status: "IN_REPAIR",
    speed: 0,
    updated_at: "2025-07-23T09:30:00Z",
  },
];

// Data dummy untuk detail telemetri
const mockTelemetry = {
  1: {
    vehicleId: 1,
    odometer: 123456.78,
    fuel_level: 70.2,
    timestamp: "2025-07-23T10:00:00Z",
    latitude: -6.1751,
    longitude: 106.8650,
    speed: 60,
  },
  2: {
    vehicleId: 2,
    odometer: 54321.0,
    fuel_level: 45.5,
    timestamp: "2025-07-23T10:05:00Z",
    latitude: -6.2000,
    longitude: 106.8167,
    speed: 0,
  },
  3: {
    vehicleId: 3,
    odometer: 98765.4,
    fuel_level: 80.0,
    timestamp: "2025-07-23T09:30:00Z",
    latitude: -6.9147,
    longitude: 107.6098,
    speed: 0,
  },
};

// Fungsi untuk mensimulasikan GET /vehicles
export const fetchVehicles = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockVehicles);
    }, 1000); // delay 1 detik untuk simulasi loading
  });
};

// Fungsi untuk mensimulasikan GET /vehicles/:id
export const fetchVehicleById = (id: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // @ts-ignore
      if (mockTelemetry[id]) {
        // @ts-ignore
        resolve(mockTelemetry[id]);
      } else {
        reject(new Error("Vehicle not found"));
      }
    }, 1000); // delay 1 detik
  });
};