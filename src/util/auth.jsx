import { redirect } from "react-router-dom";

function getToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  console.log(token);
  return token;
}

export function loader() {
  const token = getToken();

  return token;
}

export function authCheck() {
  const token = getToken();

  if (!token) {
    return redirect("/login");
  }
  return null;
}
