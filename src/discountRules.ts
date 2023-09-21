import { ServiceType, ServiceYear } from ".";

export const discountRules: {
  services: ServiceType[];
  year?: ServiceYear;
  discountValue: number;
}[] = [  
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
  {
    services: ["Photography", "VideoRecording", "WeddingSession"],
    year: 2022,
    discountValue: 600,
  },
];
