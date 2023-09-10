import { useRef } from "react";
import { getUserData, setUserData } from "../../util/userInfo";

/* eslint-disable react/prop-types */
const BioForm = ({ onClose, setBioData, email, bio, profileUpdated }) => {
  const bioRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const bioData = bioRef.current.value;
    setBioData(bioData);
    bioRef.current.value = "";
    onClose();
    const userData = getUserData(email);
    const updatedUserData = { ...userData, bio: bioData };
    setUserData(updatedUserData);
    profileUpdated();
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <textarea
          ref={bioRef}
          type="text"
          id="bio"
          defaultValue={bio ? bio : ""}
        />
        <button>save</button>
        <button onClick={onClose}>cancel</button>
      </form>
    </>
  );
};

export default BioForm;
