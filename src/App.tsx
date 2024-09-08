import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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
    <div className="container mx-auto">
      <div className="text-center font-bold text-xl m-4">{msg}</div>
      <Button>Button</Button>
    </div>
  );
}

export default App;
