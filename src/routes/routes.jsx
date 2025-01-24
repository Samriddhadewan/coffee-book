import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import Coffees from "../components/Coffees/Coffees";

const routes = createBrowserRouter([
    {path : '/',
    element : <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home> 
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path : "/coffees",
        element :<Coffees></Coffees>
      }
    ]
    
  },
  ])

  export default routes