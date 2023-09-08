// import React from 'react'
import { useRouteLoaderData } from "react-router-dom";
import classes from "./Home.module.css";
import { getUserData } from "../../util/userInfo";

const HomeComp = () => {
  const token = useRouteLoaderData("root");
  let userName;
  if (token) {
    const user = getUserData(token);
    userName = user.userName;
  }

  return (
    <>
      <div className={classes["home-container"]}>
        <h1>{`Welcome ${token ? userName : "Guest"}`}</h1>
        {!token && <h2>Please log in to use Collaborative task manager.</h2>}
        {token && (
          <>
            <h2>{`Let's get Started`}</h2>
            <h2>{`Go to teams to manage your teams and tasks`}</h2>
          </>
        )}
      </div>
    </>
  );
};

export default HomeComp;
