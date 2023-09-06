/* eslint-disable react/prop-types */
import classes from "./User.module.css";

const User = ({ username, email }) => {
  return (
    <>
      <div className={classes["user-container"]}>
        <h1>Profile</h1>
        <h3>{`Username: ${username}`}</h3>
        <h3>{`User email: ${email}`}</h3>
      </div>
    </>
  );
};

export default User;
