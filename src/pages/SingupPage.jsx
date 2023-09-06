/* eslint-disable react-refresh/only-export-components */

import { redirect } from "react-router-dom";
import Singup from "../components/auth/Signup";

import { emailValidator, detectUser } from "../util/inputValidator";

const SignupPage = () => {
  return <Singup />;
};

export default SignupPage;

// action func to handle signup functionality
export async function action({ request }) {
  // for data submillter in singup form
  const sinupData = await request.formData();

  const userName = sinupData.get("username").trim();
  const email = sinupData.get("email").trim();
  const password = sinupData.get("password").trim();

  // input data validation
  if (userName.length < 3) {
    // error response to the useActionData in the /signup route
    return new Response("Username must be at least 3 characters.");
  }
  if (emailValidator(email)) {
    return new Response("invalid email");
  }

  if (password.length < 4) {
    return new Response("Password must be at least 4 characters.");
  }

  const newUser = {
    userName: sinupData.get("username"),
    email: sinupData.get("email"),
    password: sinupData.get("password"),
  };

  // parse local storage user items to check for user and store new user data
  let users = [];
  const storeUsers = JSON.parse(localStorage.getItem("users"));

  if (storeUsers) {
    users = storeUsers;
  }

  if (detectUser(email)) {
    return new Response("User already exist. Provide another email.");
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  return redirect("/login");
}
