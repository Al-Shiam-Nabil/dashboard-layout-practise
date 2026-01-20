import { createBrowserRouter } from "react-router";
import { LayoutProvider } from "../Context/LayoutContext";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHomePage from "../Pages/Dashboard/DashboardHome/DashboardHomePage";

export const router = createBrowserRouter([
  {
    path: "dashboard",
    element: (
      <LayoutProvider>
        <DashboardLayout />
      </LayoutProvider>
    ),
    children: [
      {
        index: true,
        Component: DashboardHomePage,
      },
    ],
  },
]);
