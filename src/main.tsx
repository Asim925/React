import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.tsx";
import theme from "./theme";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GameDetails from "./components/GameDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "game-details",
    element: <GameDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
