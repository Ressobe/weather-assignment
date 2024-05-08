import { TemperatureUnit } from "@/types";

export const convertTemperature = (
  unit: TemperatureUnit,
  temperature: number,
): number => {
  if (unit === "CELSIUS") {
    return temperature;
  } else {
    return (temperature * 9) / 5 + 32;
  }
};
