import { createBrowserRouter } from "react-router";
import Index from "../layout/Index";
import Task from "../pages/task/task";
import User from "../pages/users/user";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        index: true,
        element: <Task />,
      },
      {
        path: "/user",
        element: <User/>,
      },
    ],
  },
]);

export default router;
