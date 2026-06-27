import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import { Home, About, Contact, Projects } from "./components/index";
import HomePage from "./pages/HomePage";
import { dataLoaderInfo } from "./consts/consts.js";

const router = createBrowserRouter(
  createRoutesFromElements(<Route loader= { dataLoaderInfo} path="/" element={<Layout />}></Route>),
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
