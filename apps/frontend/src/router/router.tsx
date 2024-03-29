import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Bills from "../pages/Bills/Bills.tsx";
import Invoices from "../pages/Invoices/Invoices.tsx";
import Home from "../pages/Home/Home.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>An Error Occurred</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/dashboard",
          },
          {
            path: "/invoices",
            element: <Invoices />,
          },
          {
            path: "/bills",
            element: <Bills />,
          },
          {
            path: "/expenses",
          },
          {
            path: "/reports",
          },
          {
            path: "/accounting",
          },
        ],
      },
    ],
  },
]);

export default router;
