import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../MainLayout/layout";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import DonorRequest from "../Donor/DonorRequest/DonorRequest";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
      {
       path:'create-donation-request',
       element:<DonorRequest></DonorRequest>
      }
      ]
    }
  ]);
export default router;