/* eslint-disable react-refresh/only-export-components */
// import { redirect } from "react-router-dom";
// import { redirect } from "react-router-dom";
import { redirect } from "react-router-dom";
import Login from "../components/auth/Login";
import {
  emailValidator,
  detectUser,
  passwordChecker,
} from "../util/inputValidator";

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;

export async function action({ request }) {
  const loginData = await request.formData();

  const email = loginData.get("email");
  const password = loginData.get("password");

  if (emailValidator(email)) {
    return new Response("Invalid email");
  }

  if (!detectUser(email)) {
    return new Response(`User doesn't exist with this email.`);
  }

  if (detectUser(email) && passwordChecker(email, password)) {
    localStorage.setItem("token", email);
    return redirect("/");
  } else {
    return new Response("invalid user credintials.");
  }
}
