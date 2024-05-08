import { IconType } from "react-icons";
import {
  TiWeatherPartlySunny,
  TiWeatherStormy,
  TiWeatherSunny,
} from "react-icons/ti";

export const WeatherIcon = ({ weatherType }: { weatherType: string }) => {
  let Icon: IconType;

  switch (weatherType) {
    case "sunny":
      Icon = TiWeatherSunny;
      break;
    case "cloudy":
      Icon = TiWeatherPartlySunny;
      break;
    case "stormy":
      Icon = TiWeatherStormy;
      break;
    default:
      Icon = TiWeatherPartlySunny;
  }

  return <Icon size={"2rem"} />;
};
