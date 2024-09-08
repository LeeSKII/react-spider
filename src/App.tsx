import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

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

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {msg}
    </>
  );
}

export default App;
