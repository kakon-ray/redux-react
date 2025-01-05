import App from "@/App";
import Counter from "@/pages/Counter";
import Login from "@/pages/Login";
import Task from "@/pages/Task";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Task />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
