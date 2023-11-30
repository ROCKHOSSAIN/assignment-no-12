import {
  createBrowserRouter
} from "react-router-dom";
import AddBlog from "../Admin/AddBlog/AddBlog";
import AdminProfileRoute from "../Admin/AdminProfileRoute/AdminProfileRoute";
import AllDonationReq from "../Admin/AllDonationReq/AllDonationReq";
import AllUser from "../Admin/AllUser/AllUser";
import ContentManagement from "../Admin/ContentManagement/ContentManagement";
import Dashboard from "../Dashboard/Dashboard";
import DashBoardProfileRoute from "../Donor/DashboardProfile/DashBoardProfileRoute";
import DashboardProfile from "../Donor/DashboardProfile/DashboardProfile";
import DonorRequest from "../Donor/DonorRequest/DonorRequest";
import MyDonation from "../Donor/MyDonation/MyDonation";
import UpdateDonation from "../Donor/MyDonation/UpdateDonation";
import ShowUserInfo from "../Donor/ShowUserInfo/ShowUserInfo";
import ErrorPage from "../ErrorPage/ErrorPage";
import SearchDonor from "../Home/Banner/SearchDonor";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Layout from "../MainLayout/layout";
import Register from "../Register/Register";

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
    loader:()=>fetch('https://assignment-no-12-server.vercel.app/allUser'),
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      //admin
      {
        path: 'all-users',
        element: <AllUser></AllUser>,
      },
      {
        path: 'profile',
        element: <AdminProfileRoute></AdminProfileRoute>,
      },
      {
        path: 'all-blood-donation-request',
        element: <AllDonationReq></AllDonationReq>,
      },
      {
        path: 'content-management',
        element: <ContentManagement></ContentManagement>,
        
      },
      {
        path: 'content-management/add-blog',
        element: <AddBlog></AddBlog>,
      },
      
      //donor
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
        loader: ({ params }) => fetch(`https://assignment-no-12-server.vercel.app/donorRequest/${params.id}`),
        element: <UpdateDonation></UpdateDonation>
      },
      {
        path: 'showUserInfo/:id',
        loader: ({ params }) => fetch(`https://assignment-no-12-server.vercel.app/donorRequest/${params.id}`),
        element: <ShowUserInfo></ShowUserInfo>
      }
    ]
  }
]);
export default router;