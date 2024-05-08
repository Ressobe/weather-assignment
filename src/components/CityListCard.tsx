import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { CityListItem } from "@/components/CityListItem.tsx";
import { TDataItem, TemperatureUnit } from "@/types";
import { convertTemperature } from "@/utils";

type CityListCardProps = {
  handleClickFavorite: (id: string) => void;
  favoriteCityIds: string[];
  title: string;
  cities: TDataItem[];
  temperatureUnit: TemperatureUnit;
};

export const CityListCard = ({
  handleClickFavorite,
  favoriteCityIds,
  title,
  cities,
  temperatureUnit,
}: CityListCardProps) => {
  const unit = temperatureUnit === "CELSIUS" ? "C" : "F";

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {cities.length > 0 ? (
          <ul>
            {cities.map((item) => {
              return (
                <span
                  key={item.id}
                  onClick={() => handleClickFavorite(item.id)}
                >
                  <CityListItem
                    id={item.id}
                    city={item.city}
                    description={item.description}
                    temperatureCelsius={convertTemperature(
                      temperatureUnit,
                      item.temperatureCelsius,
                    )}
                    isFavorite={favoriteCityIds.includes(item.id)}
                    unit={unit}
                  />
                </span>
              );
            })}
          </ul>
        ) : (
          <div>No cities found with this search criteria</div>
        )}
      </CardContent>
    </Card>
  );
};
