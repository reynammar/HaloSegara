import { createBrowserRouter } from "react-router";
import MainLayout from "../components/templates/MainLayout";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><Home /></MainLayout>,
  },
]);
