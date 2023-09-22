import { ServiceType, ServiceYear } from ".";

export const basePriceList: {
  serviceTypes: ServiceType[];
  year: ServiceYear;
  basePrice: number;
}[] = [
  {
    serviceTypes: ["Photography", "VideoRecording"],
    year: 2020,
    basePrice: 2200,
  },
  {
    serviceTypes: ["Photography", "VideoRecording"],
    year: 2021,
    basePrice: 2300,
  },
  {
    serviceTypes: ["Photography", "VideoRecording"],
    year: 2022,
    basePrice: 2500,
  },
  {
    serviceTypes: ["Photography"],
    year: 2020,
    basePrice: 1700,
  },
  {
    serviceTypes: ["Photography"],
    year: 2021,
    basePrice: 1800,
  },
  {
    serviceTypes: ["Photography"],
    year: 2022,
    basePrice: 1900,
  },
  {
    serviceTypes: ["VideoRecording"],
    year: 2020,
    basePrice: 1700,
  },
  {
    serviceTypes: ["VideoRecording"],
    year: 2021,
    basePrice: 1800,
  },
  {
    serviceTypes: ["VideoRecording"],
    year: 2022,
    basePrice: 1900,
  },
];

export const extraPriceList: {
  serviceTypes: ServiceType[];
  basePrice: number;
}[] = [
  {
    serviceTypes: ["WeddingSession"],
    basePrice: 600,
  },
  {
    serviceTypes: ["BlurayPackage"],
    basePrice: 300,
  },
  {
    serviceTypes: ["TwoDayEvent"],
    basePrice: 400,
  },
];
