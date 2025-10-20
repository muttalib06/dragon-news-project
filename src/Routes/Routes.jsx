import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoriesNews/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      { index: true, element: <Home></Home> },
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
]);
