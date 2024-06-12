import { WeatherIcon } from "@/components/WeatherIcon.tsx";
import { Button } from "@/components/ui/button.tsx";
import { TCity } from "@/types";
import { TbHeart } from "react-icons/tb";
import { convertTemperature } from "@/utils";

export const CityListItem = ({
  city,
  description,
  temperatureCelsius,
  isFavorite,
  unit,
}: TCity) => {
  const temperature =
    unit === "C" ? temperatureCelsius : convertTemperature(temperatureCelsius);
  return (
    <div
      className={
        "flex gap-4 items-center p-4 border-b last-of-type:border-none"
      }
    >
      <WeatherIcon weatherType={description} />
      <div className={"flex flex-col"}>
        <span>{city}</span>
        <small className={"text-sm text-gray-600 capitalize"}>
          {description}
        </small>
      </div>
      <strong className={"ml-auto"}>
        {temperature} °{unit}
      </strong>

      <Button
        className="transition-all"
        variant={`${isFavorite ? "default" : "outline"}`}
        size={"icon"}
      >
        <TbHeart />
      </Button>
    </div>
  );
};
