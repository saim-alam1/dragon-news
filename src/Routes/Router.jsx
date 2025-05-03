import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

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
    element: <h2>Authentication Layout</h2>
  },
  {
    path: '/news',
    element: <h2>News Layout</h2>
  },
  {
    path: '/*',
    element: <h2>404 Not Found</h2>
  }
])

export default router;