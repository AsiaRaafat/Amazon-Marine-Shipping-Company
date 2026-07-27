import { createBrowserRouter } from "react-router-dom";
import Layout from "./MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import SingleNew from "../Pages/NEWS/SingleNew";
import MySwiper from "./Swiper 3/MySwiper";
import MySwiper4 from "./Swiper4/MySwiper4";
import SingleSevice from "../Pages/Servicepage/SingleSevice";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true ,
        element: <Home />,
      },
      {
        path: "swiper1/:id",
        element: <SingleNew/>,
      },
      {
        path: "news/:id",
        element: <SingleNew/>,
      },
      {
        path: "services/:id",
        element: <SingleSevice/>,
      },
      {
        path: "new",
        element: <SingleNew />,
      },
      {
        path: "service",
        element: <SingleSevice />,
      },
      {
        path: "swiper1",
        element: <MySwiper/>,
      },
      {
        path: "news",
        element: <MySwiper4/>,
      },
      {
        path: "services",
        element: <MySwiper/>,
      },
      //  {
      //   path: "news/:id",
      //   element: <SingleNew/>,
      // },
      // {
      //   path: "services/:id",
      //   element: <SingleSevice/>,
      // },
    ],
  },
]);

export default router;
