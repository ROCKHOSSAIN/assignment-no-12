import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../MainLayout/layout";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
  
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
  ]);
export default router;