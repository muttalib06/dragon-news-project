import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import CategoryNews from "../pages/CategoriesNews/CategoryNews";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
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
  { path: "about", element: <About></About> },
  { path: "career", element: <Career></Career> },
]);
