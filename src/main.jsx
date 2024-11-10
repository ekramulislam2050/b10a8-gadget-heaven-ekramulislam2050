import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Roots from './Components/Roots/Roots';
import Home from './Components/Home/Home';
import AllProduct from './Components/AllProduct/AllProduct';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Laptops from './Components/Laptops/Laptops';
import Phones from './Components/Phones/Phones';
import Accessories from './Components/Accessories/Accessories';
import SmartWatch from './Components/SmartWatch/SmartWatch';
import Details from './Components/Details/Details';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("AllData/allData.json")
      },
      {
        path: "AllProduct",
        element: <AllProduct></AllProduct>,
        loader: () => fetch("AllData/allData.json")
      },
      {
        path: "/AllProduct/Product/:product_id",
        element: <Details></Details>


      },
      {
        path: "Laptops",
        element: <Laptops></Laptops>,
        loader: () => fetch("AllData/allData.json")
      },
      {
        path: "/Laptops/Laptop/:product_id",
        element: <Details></Details>
      },
      {
        path: "Phones",
        element: <Phones></Phones>,
        loader: () => fetch("AllData/allData.json")
      },
      {
        path: "Accessories",
        element: <Accessories></Accessories>,
        loader: () => fetch("AllData/allData.json")
      },
      {
        path: "SmartWatch",
        element: <SmartWatch></SmartWatch>,

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
