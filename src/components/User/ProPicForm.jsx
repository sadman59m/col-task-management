/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa6";

import classes from "./ProPicForm.module.css";
import { getUserData, setUserData } from "../../util/userInfo";

const ProPicForm = ({
  email,
  profileUpdated,
  currentImage,
  handleCurrentUserImage,
  onCancel,
}) => {
  const [uploadedImage, setUploadedImage] = useState("");
  const [currentSelecteImage, setCurrentSelectedImage] = useState(currentImage);
  const [hasError, setHasError] = useState(false);
  const imageInputRef = useRef();

  const onImgUpHandler = (event) => {
    setUploadedImage(event.target.files[0]);
    const candidatePicture = event.target.files[0];
    if (candidatePicture) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64CandidateImage = e.target.result;
        setCurrentSelectedImage(base64CandidateImage);
      };

      reader.readAsDataURL(candidatePicture);
    }
    setHasError(false);
  };

  console.log(uploadedImage);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const userProPic = uploadedImage;
    const fileType = userProPic ? userProPic.type.split("/")[0] : "";

    // image validation logic
    console.log("sumitti");
    if (!userProPic || fileType !== "image") {
      imageInputRef.current.value = "";
      setHasError(true);
      setUploadedImage("");
      return;
    }
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64Image = e.target.result;
      const userData = getUserData(email);
      const updatedUserData = { ...userData, proPic: base64Image };
      setUserData(updatedUserData);
      setUploadedImage("");
      setHasError(false);
      profileUpdated();
      handleCurrentUserImage(base64Image);
      toast.success("Profile picture updated.", {
        position: "top-center",
        autoClose: 1000,
      });
      onCancel();
      imageInputRef.current.value = "";
    };

    reader.readAsDataURL(userProPic);
  };

  return (
    <form className={classes["profile-pic-form"]} onSubmit={formSubmitHandler}>
      {currentSelecteImage && (
        <img
          className={classes["form-image"]}
          src={currentSelecteImage}
          alt=""
        />
      )}
      {!currentSelecteImage && (
        <FaUser className={classes["profile-pic-icon"]} />
      )}

      <div className={classes["form-control"]}>
        <label htmlFor="profile picture">Upload Profile Picture</label>
        <input
          id="profile-picture"
          name="profile-picture"
          type="file"
          accept="image/*"
          ref={imageInputRef}
          onChange={onImgUpHandler}
        />
        {hasError && (
          <p className={classes.error}>
            Please, provide a valid image to be uploaded.
          </p>
        )}
      </div>
      <div className={classes["form-action"]}>
        <button type="submit" className={classes["upload-btn"]}>
          Update
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={classes["cancel-btn"]}
        >
          cancel
        </button>
      </div>
    </form>
  );
};

export default ProPicForm;
