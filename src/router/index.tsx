import { createBrowserRouter } from "react-router-dom";
import App from "@/App.tsx";
import Test from "@/pages/Test";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
