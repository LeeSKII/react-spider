import { useState, useEffect } from "react";
import useWeatherProvince from "@/hooks/useWeatherProvince";
import { Button } from "@/components/ui/button";

import Cities from "@/components/weather/City";
import Weather from "@/components/weather/Weather";

export default function Page() {
  const provinces = useWeatherProvince();
  const [provinceCode, setProvinceCode] = useState<string>("");
  const [cityId, setCityId] = useState<string>("");

  function handleCityClick(cityId: string) {
    console.log(cityId);
    setCityId(cityId);
  }

  useEffect(() => {
    setCityId("");
  }, [provinceCode]);

  return (
    <div className="container mx-auto p-3">
      <div className="grid grid-cols-10 gap-3">
        {provinces &&
          provinces.map((province) => {
            return (
              <Button
                variant="outline"
                key={province.code}
                onClick={() => setProvinceCode(province.code)}
              >
                {province.name}
              </Button>
            );
          })}
      </div>
      <Cities provinceCode={provinceCode} setCityId={handleCityClick} />
      <Weather cityId={cityId} key={cityId} />
    </div>
  );
}
