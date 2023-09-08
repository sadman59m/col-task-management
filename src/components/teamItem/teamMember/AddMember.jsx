/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { getToken } from "../../../util/auth";
import { getAllUsers } from "../../../util/userInfo";
import classes from "./AddMember.module.css";

const AddMember = ({ onClose }) => {
  const allUsers = getAllUsers();
  const token = getToken();
  const filteredUsers = allUsers.filter((user) => user.email !== token);
  return (
    <>
      <div className={classes["member-container"]}>
        <p>{`Users (${filteredUsers.length})`}</p>
        <p>{`Add user functionality need to be added`}</p>
        <ul className={classes["member-ul"]}>
          {filteredUsers &&
            filteredUsers.map((member, index) => {
              return (
                <li className={classes["member-li"]} key={index}>
                  <p className={classes["member-name"]}>{member.userName}</p>
                  <p className={classes["member-detail"]}>{member.email}</p>
                  {member.email === token ? (
                    <p className={classes["member-detail"]}>{"(Me)"}</p>
                  ) : null}
                  <button className={classes["adduser-btn"]}> + Add </button>
                </li>
              );
            })}
        </ul>
        <button className={classes["close-btn"]} onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );
};

export default AddMember;
