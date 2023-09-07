import { useRef } from "react";
import { getUserData, setUserData } from "../../util/userInfo";

/* eslint-disable react/prop-types */
const BioForm = ({ onClose, setBioData, email }) => {
  const bioRef = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const bioData = bioRef.current.value;
    console.log(bioData);
    setBioData(bioData);
    bioRef.current.value = "";
    onClose();
    const userData = getUserData(email);
    const updatedUserData = { ...userData, bio: bioData };
    setUserData(updatedUserData);
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input ref={bioRef} type="text" id="bio" />
        <button>save</button>
        <button onClick={onClose}>cancel</button>
      </form>
    </>
  );
};

export default BioForm;