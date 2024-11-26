import {   StrictMode  } from 'react'
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
import ProductProvider from './Components/ProductProvider/ProductProvider';
import DashBoard from './Components/DashBoard/DashBoard';
 
 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/allData.json")
      },
      {
         path:"ExploreSection/:product_id",
         element:<Details></Details>
      },
      {
        path: "AllProduct",
        element: <AllProduct></AllProduct>,
        loader: () => fetch("/allData.json")
      },
      {
        path: "Product/:product_id",
        element: <Details></Details>


      },
      {
        path: "Laptops",
        element: <Laptops></Laptops>,
        loader: () => fetch("/allData.json")
      },
      {
        path: "Laptop/:product_id",
        element: <Details></Details>
      },
      {
        path: "Phones",
        element: <Phones></Phones>,
        loader: () => fetch("/allData.json")
      },
      {
         path:"Phone/:product_id",
         element:<Details></Details>
      },
      {
        path: "Accessories",
        element: <Accessories></Accessories>,
        loader: () => fetch("/allData.json")
      },
      {
        path:"Accessory/:product_id",
        element:<Details></Details>
      },
      {
        path: "SmartWatch",
        element: <SmartWatch></SmartWatch>,

      },
      {
        path:"DashBoard",
        element:<DashBoard></DashBoard>
      }
    
    ]
  
   
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     
   <ProductProvider>
   <RouterProvider router={router} />
   </ProductProvider>
 
  </StrictMode>,
)
