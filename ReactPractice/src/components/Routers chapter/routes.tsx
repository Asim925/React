import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/users", element: <Users /> },
]);

export default router;
