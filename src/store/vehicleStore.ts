// src/store/vehicleStore.ts
import { create } from 'zustand';
import { fetchVehicles, fetchVehicleById } from '../api/mockApi';

// Definisikan tipe data
export interface Vehicle {
  id: number;
  name: string;
  status: string;
  speed: number;
  updated_at: string;
}

export interface Telemetry {
  vehicleId: number;
  odometer: number;
  fuel_level: number;
  timestamp: string;
  latitude: number;
  longitude: number;
  speed: number;
}

interface VehicleState {
  vehicles: Vehicle[];
  vehicle: Telemetry | null;
  loading: boolean;
  error: string | null;
  getVehicles: () => void;
  getVehicleById: (id: number) => void;
}

export const useVehicleStore = create<VehicleState>((set) => ({
  vehicles: [],
  vehicle: null,
  loading: false,
  error: null,

  getVehicles: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchVehicles() as Vehicle[];
      set({ vehicles: data, loading: false });
    } catch (err) {
      set({ error: 'Failed to fetch vehicles', loading: false });
    }
  },

  getVehicleById: async (id: number) => {
    set({ loading: true, error: null, vehicle: null });
    try {
      const data = await fetchVehicleById(id) as Telemetry;
      set({ vehicle: data, loading: false });
    } catch (err) {
      const error = err instanceof Error ? err.message : 'Failed to fetch vehicle details';
      set({ error, loading: false });
    }
  },
}));