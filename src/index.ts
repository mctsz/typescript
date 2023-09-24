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
) => {
  if (action.type === "Select") {
    let blurayConnectedEl =
      previouslySelectedServices.includes("VideoRecording") &&
      action.service === "BlurayPackage";
    let twodayevConnectedEl =
      (previouslySelectedServices.includes("VideoRecording") ||
        previouslySelectedServices.includes("Photography")) &&
      action.service === "TwoDayEvent";

    if (
      previouslySelectedServices.length === 0 ||
      blurayConnectedEl ||
      twodayevConnectedEl
    ) {
      previouslySelectedServices.push(action.service);
    }
  }

  if (action.type === "Deselect") {
    previouslySelectedServices = previouslySelectedServices.filter(
      (sels) => sels !== action.service
    );

    let blurayConnectedEl =
      action.service === "VideoRecording" &&
      previouslySelectedServices.includes("BlurayPackage");
    if (blurayConnectedEl) {
      previouslySelectedServices = previouslySelectedServices.filter(
        (sels) => sels !== "BlurayPackage"
      );
    }
    let twodayevConnectedEl =
      (action.service === "VideoRecording" ||
        action.service === "Photography") &&
      previouslySelectedServices.includes("TwoDayEvent");

    let isOtherMainServiceRemain =
      previouslySelectedServices.includes("Photography") ||
      previouslySelectedServices.includes("VideoRecording");

    if (twodayevConnectedEl && !isOtherMainServiceRemain) {
      previouslySelectedServices = previouslySelectedServices.filter(
        (sels) => sels !== "TwoDayEvent"
      );
    }
  }

  return previouslySelectedServices;
};

export const calculatePrice = (
  selectedServices: ServiceType[],
  selectedYear: ServiceYear
) => {
  let basePrice = calculateBasePrice(selectedServices, selectedYear);
  let finalPrice =
    basePrice - calculateDiscount(selectedServices, selectedYear);

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

const calculateDiscount = (
  selectedServices: ServiceType[],
  selectedYear: ServiceYear
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

  return bestFoundDiscount;
};
