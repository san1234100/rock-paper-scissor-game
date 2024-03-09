import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import GamePage from "./components/GamePage.jsx";
import GameResult from "./components/GameResult.jsx";

const router = createBrowserRouter([
  {
    path: "/rock-paper-scissor-game",
    element: <App />,
    children: [
      {
        path: "/rock-paper-scissor-game",
        element: <HomePage />,
      },
      {
        path: "/game",
        element: <GamePage />,
      },
      {
        path: "/gameresult/:move",
        element: <GameResult />
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
