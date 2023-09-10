/* eslint-disable react-refresh/only-export-components */

import "react-toastify/dist/ReactToastify.css";
// import { redirect } from "react-router-dom";
import Singup from "../components/auth/Signup";
import { toast } from "react-toastify";

import { emailValidator, detectUser } from "../util/inputValidator";
import { redirect } from "react-router-dom";

const SignupPage = () => {
  return (
    <>
      <Singup />
    </>
  );
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
    return new Response(
      JSON.stringify({
        message: "Username must be at least 3 characters.",
        status: 420,
      })
    );
  }
  if (emailValidator(email)) {
    return new Response(
      JSON.stringify({ message: "Invalid email", status: 420 })
    );
  }

  if (password.length < 4) {
    return new Response(
      JSON.stringify({
        message: "Password must be at least 4 characters.",
        status: 420,
      })
    );
  }

  const newUser = {
    userName: sinupData.get("username"),
    email: sinupData.get("email"),
    password: sinupData.get("password"),
    bio: "",
    proPic: "",
  };

  // parse local storage user items to check for user and store new user data
  let users = [];
  const storeUsers = JSON.parse(localStorage.getItem("users"));

  if (storeUsers) {
    users = storeUsers;
  }

  if (detectUser(email)) {
    return new Response(
      JSON.stringify({
        message: "User already exist. Provide another email.",
        status: 420,
      }),
      {
        status: 200,
      }
    );
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  toast.success("Sinup Successful.", {
    position: "top-center",
    autoClose: 1000,
  });

  return redirect("/login");

  // return new Response(
  //   JSON.stringify({
  //     message: "signup success. Login to continue",
  //     status: 200,
  //   }),
  //   {
  //     status: 200,
  //   }
  // );
}
