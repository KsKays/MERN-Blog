import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Edit from "../pages/Edit";
import Create from "../pages/Create";
import PostDetail from "../pages/PostDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../layouts/MainLayout";

/**
 * Home
 * Post Detail
 * Create Post
 * Edit Post
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/post/:id",
        element: <PostDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
