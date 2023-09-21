import { basePriceList } from "./basePriceList";
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
  let basePrice = 0;
  selectedServices.forEach((service) => {
    let foundEntry = basePriceList.find(
      (bpl) =>
        bpl.serviceType === service &&
        (bpl.year === undefined || bpl.year === selectedYear)
    );

    if (foundEntry) {
      basePrice += foundEntry.basePrice;
    }
  });

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
  let finalPrice = basePrice - bestFoundDiscount;

  return { basePrice, finalPrice };
};
