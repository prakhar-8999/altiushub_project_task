import {createBrowserRouter} from "react-router-dom";
import Addtask from "./components/Addtask";
import Login from "./components/Login";
import Previoustask from "./components/PreviousTask";
import Register from "./components/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/addTask",
    element: <Addtask />,
  },
  {
    path: "/previousTask",
    element: <Previoustask />,
  },
]);

export default router;
