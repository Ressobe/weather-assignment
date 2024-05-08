import { TemperatureUnitSelect } from "./TemperatureUnitSelect";
import { Header } from "./ui/Header";
import { Input } from "./ui/input";

export function ErrorState() {
  return (
    <>
      <Header />
      <div className={"container max-w-lg mx-auto my-4 flex flex-col gap-4"}>
        <div className={"flex justify-between gap-4"}>
          <Input className={"flex-grow"} placeholder={"Search city..."} />
          <TemperatureUnitSelect value="CELSIUS" onChange={() => {}} />
        </div>
        <div>Something went wrong!</div>
      </div>
    </>
  );
}
