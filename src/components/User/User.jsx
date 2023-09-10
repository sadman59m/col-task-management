/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import classes from "./User.module.css";

import BioForm from "./BioForm";
import ProPicForm from "./ProPicForm";
import ModalPrimary from "../UI/ModalPrimary";
import { getUserData, setUserData } from "../../util/userInfo";

const User = ({ username, email, bio, image }) => {
  const [bioData, setBioData] = useState("");
  const [profileUpdate, setProfileUpdate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditPic, setIsEditPic] = useState(false);
  const [currentUserImage, setCurrentUserImage] = useState(image);

  // const userBio = bio ? bio : "Add bio";
  // const profileImage = image ? image : null;
  // console.log(userBio, profileImage);

  const isEditHandler = () => {
    setIsEdit((prevState) => !prevState);
  };

  // re-render component when profile is updated
  const profileUpdated = () => {
    console.log("profile update called");
    setProfileUpdate(true);
  };

  const isEditPicHandler = () => {
    setIsEditPic((prevState) => !prevState);
  };

  const pictureDeleteHandler = () => {
    const confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete) {
      const userData = getUserData(email);
      const updatedUserData = { ...userData, proPic: "" };
      setUserData(updatedUserData);
      setCurrentUserImage("");
    }
  };

  return (
    <>
      <div className={classes["user-container"]}>
        <div className={classes["profile-info-container"]}>
          <h1>Profile</h1>
          <h3>{`Username: ${username}`}</h3>
          <h3>{`User email: ${email}`}</h3>
          <div className={classes.bio}>
            <h3>Bio:</h3>
            {isEdit && (
              <BioForm
                onClose={isEditHandler}
                setBioData={setBioData}
                profileUpdated={profileUpdated}
                email={email}
                bio={bioData ? bioData : bio}
              />
            )}
            {!isEdit && (
              <button onClick={isEditHandler}>{`${
                bio || bioData ? "edit bio" : "add bio"
              }`}</button>
            )}
            <p>{bioData ? bioData : bio}</p>
          </div>
        </div>
        <div className={classes["profile-pic-container"]}>
          <div className={classes["profile-img-container"]}>
            {!currentUserImage && (
              <FaUser className={classes["profile-pic-icon"]} />
            )}
            {currentUserImage && (
              <img
                className={classes["profile-img"]}
                src={currentUserImage}
                alt="profile-picture"
              ></img>
            )}
          </div>
          <div className={classes["img-action"]}>
            {
              <button
                className={classes["upload-btn"]}
                onClick={isEditPicHandler}
              >
                Update Profile Picture
              </button>
            }

            {isEditPic && (
              <ModalPrimary onClose={isEditPicHandler}>
                <ProPicForm
                  email={email}
                  profileUpdated={profileUpdated}
                  handleCurrentUserImage={setCurrentUserImage}
                  currentImage={currentUserImage}
                  onCancel={isEditPicHandler}
                />
              </ModalPrimary>
            )}
            {currentUserImage && (
              <button
                className={classes["delete-btn"]}
                onClick={pictureDeleteHandler}
              >
                Delete Profile Picture
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
