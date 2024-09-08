import { useEffect, useState } from "react";

type City = {
  id: string;
  name: string;
};

function useWeatherProvince({ provinceCode }: { provinceCode: string }) {
  const [cities, setCities] = useState<City[] | null>();
  function get() {
    if (!provinceCode) {
      return;
    }
    fetch(`${import.meta.env.VITE_API_URL}/dict/province/${provinceCode}`).then(
      async (response) => {
        const data = await response.json();
        setCities(data);
      }
    );
  }
  useEffect(() => {
    get();
  }, [provinceCode]);
  if (!provinceCode) {
    return null;
  }
  return cities;
}

export default useWeatherProvince;
