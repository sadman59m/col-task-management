import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SingupPage";

import { action as singupAction } from "./pages/SingupPage";
import { action as loignAction } from "./pages/LoginPage";
import { action as logoutAction } from "./pages/Logout";
import { loader as tokenLoader, authCheck } from "./util/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    id: "root",
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
        action: loignAction,
      },
      {
        path: "/signup",
        element: <SignupPage />,
        action: singupAction,
      },
      {
        path: "/logout",
        loader: authCheck,
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
