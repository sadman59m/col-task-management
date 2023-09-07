import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SingupPage";

import { action as singupAction } from "./pages/SingupPage";
import { action as loignAction } from "./pages/LoginPage";
import { action as logoutAction } from "./pages/Logout";
import { loader as tokenLoader, authCheck } from "./util/auth";
import UserPage, { loader as userLoader } from "./pages/UserPage";
import Landing from "./pages/LandingPage";
import Teams from "./pages/TeamsPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/user",
        element: <UserPage />,
        loader: userLoader,
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
  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
      <ToastContainer />
    </>
  );
}

export default App;
