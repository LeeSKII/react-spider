import { createBrowserRouter } from "react-router-dom";
import App from "@/App.tsx";
import CMA from "@/pages/CMA";
import Test from "@/pages/Test";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/weather",
    element: <CMA />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
