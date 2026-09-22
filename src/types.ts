export interface VehicleModel {
  id: string;
  name: string;
  subtitle: string;
  baseVehicle: string;
  category: 'Offroad' | 'Comfort' | 'Compact' | 'Family';
  priceFrom: number;
  buildTimeWeeks: number;
  image: string;
  specs: {
    length: string;
    seats: number;
    berths: number;
    battery: string;
    solar: string;
    water: string;
    heating: string;
    isolation: string;
  };
  highlights: string[];
  description: string;
}

export interface ConfiguratorState {
  baseVehicle: string;
  layoutStyle: string;
  bedSystem: string;
  seats: number;
  energyPackage: string;
  sanitaryPackage: string;
  heatingSystem: string;
  selectedAddons: string[];
  bringOwnVehicle: boolean;
}

export interface PriceEstimate {
  basePrice: number;
  extrasPrice: number;
  vehiclePrice: number;
  totalEstimate: number;
  estimatedWeightKg: number;
  estimatedBuildTimeWeeks: number;
}
