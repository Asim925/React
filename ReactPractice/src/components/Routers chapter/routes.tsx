import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Contacts from "./Contacts";
import Navbar from "./Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "", element: <Home /> },
      { path: "users", element: <Users /> },
      { path: "contacts", element: <Contacts /> },
    ],
  },
]);

export default router;


