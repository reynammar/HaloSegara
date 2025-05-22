import { createBrowserRouter } from "react-router";
import MainLayout from "../components/templates/MainLayout";
import AuthLayout from "../components/templates/AuthLayout";
import Home from "../pages/home";
import About from "../pages/about";
import Mitra from "../pages/mitra";
import Pantai from "../pages/pantai";
import LeaderBoard from "../pages/leaderboard";
import Contact from "../pages/contact";
import PolicyPrivacy from "../pages/policyprivacy";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><Home /></MainLayout>,
  },
  {
    path: "/login",
    element: <AuthLayout><LoginPage/></AuthLayout>,
  },
  {
    path: "/register",
    element: <AuthLayout><RegisterPage/></AuthLayout>,
  },
  {
    path: "/home",
    element: <MainLayout><Home /></MainLayout>,
  },
  {
    path: "/about",
    element: <MainLayout><About /></MainLayout>,
  },
  {
    path: "/mitra",
    element: <MainLayout><Mitra /></MainLayout>,
  },
  {
    path: "/pantai",
    element: <MainLayout><Pantai /></MainLayout>,
  },
  {
    path: "/leaderboard",
    element: <MainLayout><LeaderBoard /></MainLayout>,
  },
  {
    path: "/contact",
    element: <MainLayout><Contact /></MainLayout>,
  },
  {
    path: "/policyprivacy",
    element: <MainLayout><PolicyPrivacy /></MainLayout>,
  },
]);
