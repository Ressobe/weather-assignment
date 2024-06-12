import { Input } from "@/components/ui/input.tsx";
import { Header } from "@/components/ui/Header.tsx";
import { CityListCard } from "@/components/CityListCard.tsx";
import { TemperatureUnitSelect } from "@/components/TemperatureUnitSelect.tsx";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { LoadingState } from "./components/LoadingState";
import { ErrorState } from "./components/ErrorState";
import { TDataItem, TemperatureUnit } from "./types";

async function fetchWeather(): Promise<TDataItem[]> {
  const response = await fetch("/api/weather");
  const data = response.json();
  return data;
}

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [favoritesCityIds, setFavoritesCityIds] = useState<string[]>([]);
  const [temperatureUnit, setTemperatureUnit] =
    useState<TemperatureUnit>("CELSIUS");

  const handleTemperatureUnitChange = (unit: TemperatureUnit) => {
    setTemperatureUnit(unit);
  };

  const handleToggleFavorite = (id: string) => {
    setFavoritesCityIds((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((cityId) => cityId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const { data: cities, isLoading } = useQuery({
    queryFn: fetchWeather,
    queryKey: ["cities"],
  });

  const filteredCities = useMemo(() => {
    if (!cities) return [];
    if (!searchQuery) return cities;
    return cities.filter((item) =>
      item.city.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [cities, searchQuery]);

  const favoriteCities = useMemo(() => {
    if (!cities) return [];
    return cities.filter((item) => favoritesCityIds.includes(item.id));
  }, [cities, favoritesCityIds]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (!cities) {
    return <ErrorState />;
  }

  return (
    <>
      <Header />
      <div className={"container max-w-lg mx-auto my-4 flex flex-col gap-4"}>
        <div className={"flex justify-between gap-4"}>
          <Input
            className={"flex-grow"}
            placeholder={"Search city..."}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <TemperatureUnitSelect
            value={temperatureUnit}
            onChange={handleTemperatureUnitChange}
          />
        </div>
        <CityListCard
          title="Weather in cities"
          cities={filteredCities}
          handleClickFavorite={handleToggleFavorite}
          favoriteCityIds={favoritesCityIds}
          temperatureUnit={temperatureUnit}
        />
        {favoriteCities.length > 0 && (
          <CityListCard
            title="Favorites"
            cities={favoriteCities}
            handleClickFavorite={handleToggleFavorite}
            favoriteCityIds={favoritesCityIds}
            temperatureUnit={temperatureUnit}
          />
        )}
      </div>
    </>
  );
}

export default App;
