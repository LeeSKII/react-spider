import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");
  function getSpiderData() {
    fetch(`${import.meta.env.VITE_API_URL}/spider`).then(async (response) => {
      const data = await response.json();
      setMsg(data.message);
    });
  }
  useEffect(() => {
    getSpiderData();
  }, []);

  return <>{msg}</>;
}

export default App;
