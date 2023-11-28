import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../MainLayout/layout";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import DonorRequest from "../Donor/DonorRequest/DonorRequest";
import MyDonation from "../Donor/MyDonation/MyDonation";
import UpdateDonation from "../Donor/MyDonation/UpdateDonation";
  
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
       element:<DonorRequest></DonorRequest>,
      },
      {
       path:'my-donation-requests',
       element:<MyDonation></MyDonation>
      },
      {
       path:'updateDonation/:id',
       loader:({params}) => fetch(`http://localhost:5000/donorRequest/${params.id}`),
       element:<UpdateDonation></UpdateDonation>
      }
      ]
    }
  ]);
export default router;