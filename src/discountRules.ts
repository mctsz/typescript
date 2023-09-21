import { ServiceType, ServiceYear } from ".";

export const discountRules: {
  services: ServiceType[];
  year?: ServiceYear;
  discountValue: number;
}[] = [
  {
    services: ["Photography", "VideoRecording"],
    year: 2020,
    discountValue: 1200,
  },
  {
    services: ["Photography", "VideoRecording"],
    year: 2021,
    discountValue: 1300,
  },
  {
    services: ["Photography", "VideoRecording"],
    year: 2022,
    discountValue: 1300,
  },
  {
    services: ["Photography", "WeddingSession"],
    discountValue: 300,
  },
  {
    services: ["VideoRecording", "WeddingSession"],
    discountValue: 300,
  },
  {
    services: ["Photography", "VideoRecording", "WeddingSession"],
    discountValue: 300,
  },
  {
    services: ["Photography", "WeddingSession"],
    year: 2022,
    discountValue: 600,
  },
];
