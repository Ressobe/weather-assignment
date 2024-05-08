export type TemperatureUnit = "CELSIUS" | "FAHRENHEIT";
export type TWeatherDescription = "cloudy" | "sunny" | "stormy";
export type TDataItem = {
  id: string;
  city: string;
  temperatureCelsius: number;
  description: TWeatherDescription;
};
export type TCity = TDataItem & { isFavorite: boolean; unit: "C" | "F" };
