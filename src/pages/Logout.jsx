import { redirect } from "react-router-dom";

export function action() {
  const confirm = window.confirm("Are you sure?");
  if (confirm) {
    localStorage.removeItem("token");
    return redirect("/");
  }
  return redirect("/");
}
