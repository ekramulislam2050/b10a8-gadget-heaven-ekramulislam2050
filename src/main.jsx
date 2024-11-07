import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
import Roots from './Components/Roots/Roots';
import Home from './Components/Home/Home';
 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
     children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch("AllData/allData.json")
        }
     ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
