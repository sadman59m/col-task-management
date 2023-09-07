/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "./User.module.css";

import BioForm from "./BioForm";

const User = ({ username, email, bio }) => {
  const [bioData, setBioData] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const isEditHandler = () => {
    setIsEdit((prevState) => !prevState);
  };
  return (
    <>
      <div className={classes["user-container"]}>
        <h1>Profile</h1>
        <h3>{`Username: ${username}`}</h3>
        <h3>{`User email: ${email}`}</h3>
        <div className={classes.bio}>
          <h3>Bio:</h3>
          {isEdit && (
            <BioForm
              onClose={isEditHandler}
              setBioData={setBioData}
              email={email}
            />
          )}
          <button onClick={isEditHandler}>edit bio</button>
          <p>{bioData ? bioData : bio}</p>
        </div>
      </div>
    </>
  );
};

export default User;
