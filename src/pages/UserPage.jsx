/* eslint-disable react-refresh/only-export-components */
import { redirect, useLoaderData } from "react-router-dom";
import User from "../components/User/User";
import { getToken } from "../util/auth";
import { getUserData } from "../util/userInfo";

const UserPage = () => {
  const userData = useLoaderData();
  console.log(userData);
  return (
    <User
      username={userData.userName}
      email={userData.email}
      bio={userData.bio ? userData.bio : ""}
      image={userData.proPic}
    />
  );
};

export default UserPage;

export function loader() {
  const token = getToken();
  if (!token) {
    return redirect("/login");
  }
  const userData = getUserData(token);
  return userData;
}
