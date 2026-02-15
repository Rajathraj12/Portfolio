import { createBrowserRouter, Navigate } from "react-router";
import { MainLayout } from "./components/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
