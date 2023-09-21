import { basePriceList, extraPriceList } from "./basePriceList";
import { discountRules } from "./discountRules";

export type ServiceYear = 2020 | 2021 | 2022;
export type ServiceType =
  | "Photography"
  | "VideoRecording"
  | "BlurayPackage"
  | "TwoDayEvent"
  | "WeddingSession";

export const updateSelectedServices = (
  previouslySelectedServices: ServiceType[],
  action: { type: "Select" | "Deselect"; service: ServiceType }
) => [];

export const calculatePrice = (
  selectedServices: ServiceType[],
  selectedYear: ServiceYear
) => {
  let basePrice = calculateBasePrice(selectedServices, selectedYear);
  let finalPrice = calculateFinalPrice(
    selectedServices,
    selectedYear,
    basePrice
  );

  return { basePrice, finalPrice };
};

const calculateBasePrice = (
  selectedServices: ServiceType[],
  selectedYear: ServiceYear
) => {
  let basePrice = 0;
  let foundEntry = basePriceList.find(
    (bpl) =>
      bpl.serviceTypes.every((st) => selectedServices.includes(st)) &&
      bpl.year === selectedYear
  );

  if (foundEntry) {
    basePrice += foundEntry.basePrice;
  }

  selectedServices.forEach((service) => {
    let foundExtraPriceEntry = extraPriceList.find((epl) =>
      epl.serviceTypes.includes(service)
    );

    if (foundExtraPriceEntry) {
      basePrice += foundExtraPriceEntry.basePrice;
    }
  });

  return basePrice;
};

const calculateFinalPrice = (
  selectedServices: ServiceType[],
  selectedYear: ServiceYear,
  basePrice: number
) => {
  let foundDiscountValues: number[] = [];
  discountRules.forEach((dr) => {
    let isApplyToServices =
      selectedServices.length === dr.services.length &&
      selectedServices.every((service) => dr.services.includes(service));

    let isApplyToYear = dr.year === undefined || selectedYear === dr.year;

    if (isApplyToServices && isApplyToYear) {
      foundDiscountValues.push(dr.discountValue);
    }
  });

  let bestFoundDiscount = Math.max(...foundDiscountValues);
  bestFoundDiscount = bestFoundDiscount === -Infinity ? 0 : bestFoundDiscount;

  return basePrice - bestFoundDiscount;
};
