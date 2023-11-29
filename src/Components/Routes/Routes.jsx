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
import DashboardProfile from "../Donor/DashboardProfile/DashboardProfile";
import ErrorPage from "../ErrorPage/ErrorPage";
import DashBoardProfileRoute from "../Donor/DashboardProfile/DashBoardProfileRoute";
import SearchDonor from "../Home/Banner/SearchDonor";
import ShowUserInfo from "../Donor/ShowUserInfo/ShowUserInfo";
import SearchingDonorData from "../Home/Banner/SearchingDonorData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/searchDonner',
        element: <SearchDonor></SearchDonor>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: 'dashboard',
        element: <DashboardProfile></DashboardProfile>,
      },
      {
        path: 'profile',
        element: <DashBoardProfileRoute></DashBoardProfileRoute>,
      },
      {
        path: 'create-donation-request',
        element: <DonorRequest></DonorRequest>,
      },
      {
        path: 'my-donation-requests',
        element: <MyDonation></MyDonation>
      },
      
      {
        path: 'updateDonation/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/donorRequest/${params.id}`),
        element: <UpdateDonation></UpdateDonation>
      },
      {
        path: 'showUserInfo/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/donorRequest/${params.id}`),
        element: <ShowUserInfo></ShowUserInfo>
      }
    ]
  }
]);
export default router;