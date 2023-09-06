import { redirect } from "react-router-dom";

export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
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
