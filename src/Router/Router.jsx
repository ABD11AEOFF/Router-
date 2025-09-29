import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import Post from "../pages/past";
import Comments from "../pages/Components";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/posts",
        element: <Posts/>,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
    ],
  },
  {
    path: '/sultanbek',
    element: <div>Sultanbek 12345 55555</div>
  }
]);
