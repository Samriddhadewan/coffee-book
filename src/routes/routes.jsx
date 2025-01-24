import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import Coffees from "../components/Coffees/Coffees";
import CategoryCards from "../components/CategoryCards/CategoryCards";

const routes = createBrowserRouter([
    {path : '/',
    element : <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>, 
        loader : () => fetch('../categories.json'),
        children: [
          {path: "/",
            loader: ()=> fetch('../coffees.json'),
           element: <CategoryCards></CategoryCards> 
          },
          {path: "/category/:category",
            loader: ()=> fetch('../coffees.json'),
           element: <CategoryCards></CategoryCards> 
          },
          
        ]
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