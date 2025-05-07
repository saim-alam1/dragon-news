import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/category/:id',
        loader: () => fetch('/news.json'),
        element: <CategoryNews></CategoryNews>
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/news-details/:id',
    loader: () => fetch('/news.json'),
    element: <NewsDetails></NewsDetails>
  },
  {
    path: '/*',
    element: <h2>404 Not Found</h2>
  }
])

export default router;