import { ServiceType, ServiceYear } from ".";

export const basePriceList: {
  serviceType: ServiceType;
  year?: ServiceYear;
  basePrice: number;
}[] = [
  {
    serviceType: "Photography",
    year: 2020,
    basePrice: 1700,
  },
  {
    serviceType: "Photography",
    year: 2021,
    basePrice: 1800,
  },
  {
    serviceType: "Photography",
    year: 2022,
    basePrice: 1900,
  },
  {
    serviceType: "VideoRecording",
    year: 2020,
    basePrice: 1700,
  },
  {
    serviceType: "VideoRecording",
    year: 2021,
    basePrice: 1800,
  },
  {
    serviceType: "VideoRecording",
    year: 2022,
    basePrice: 1900,
  },
  {
    serviceType: "WeddingSession",
    basePrice: 600,
  },
  {
    serviceType: "BlurayPackage",
    basePrice: 300,
  },
  {
    serviceType: "TwoDayEvent",
    basePrice: 400,
  },
];
