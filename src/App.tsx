import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";

function App() {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
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
      <Button onClick={() => navigate("/weather")}>Weather</Button>
      <div>
        <Link to="/test">Test</Link>
      </div>
    </div>
  );
}

export default App;
