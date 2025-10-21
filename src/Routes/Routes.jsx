import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import CategoryNews from "../pages/CategoriesNews/CategoryNews";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Home from "../pages/Home/Home";
import Auth from "../layouts/Auth";

import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import NewsDetail from "../pages/newsDetail/NewsDetail";
import PrivateRoute from "../provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      { path: "", element: <Home></Home> },
      {
        path: "categoryNews/:id",
        loader: async () => {
          const response = await fetch("/news.json");
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response;
        },
        element: <CategoryNews></CategoryNews>,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      { path: "/auth/login", element: <Login></Login> },
      { path: "/auth/register", element: <Register></Register> },
    ],
  },

  {
    path: "newsDetail/:id",
    loader: async () => {
      const response = await fetch("/news.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response;
    },
    element: (
      <PrivateRoute>
        <NewsDetail></NewsDetail>
      </PrivateRoute>
    ),
  },
  { path: "about", element: <About></About> },
  { path: "career", element: <Career></Career> },
]);
