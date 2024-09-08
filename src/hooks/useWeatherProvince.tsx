import { useEffect, useState } from "react";

type Province = {
  code: string;
  name: string;
};

function useWeatherProvince() {
  const [provinces, setProvinces] = useState<Province[] | null>();
  function get() {
    fetch(`${import.meta.env.VITE_API_URL}/dict/province`).then(
      async (response) => {
        const data = await response.json();
        setProvinces(data);
      }
    );
  }
  useEffect(() => {
    get();
  }, []);

  return provinces;
}

export default useWeatherProvince;
