/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import classes from "./AddUserMember.module.css";
import { getToken } from "../../../util/auth";
import { getAllUsers } from "../../../util/userInfo";
import { teamsActions } from "../../../store/teams-slice";
import { useDispatch, useSelector } from "react-redux";

const AddMember = ({ onClose, teamId }) => {
  const stateTeams = useSelector((state) => state.teams);
  const dispatch = useDispatch();
  const allUsers = getAllUsers();
  const token = getToken();
  // const filteredUsers = allUsers.filter((user) => user.email !== token);
  console.log(stateTeams);
  const handleAddUser = (member) => {
    const newMember = {
      userName: member.userName,
      email: member.email,
      teamId: teamId,
    };
    dispatch(teamsActions.addMember(newMember));
  };
  return (
    <>
      <div className={classes["member-container"]}>
        <p>{`Users (${allUsers.length})`}</p>
        <p>{`Add user functionality need to be added`}</p>
        <ul className={classes["member-ul"]}>
          {allUsers &&
            allUsers.map((member, index) => {
              return (
                <li className={classes["member-li"]} key={index}>
                  <p className={classes["member-name"]}>{member.userName}</p>
                  <p className={classes["member-detail"]}>{member.email}</p>
                  {member.email === token ? (
                    <div className={classes["adduser-action"]}>
                      <p className={classes["member-detail"]}>{"(Me)"}</p>
                    </div>
                  ) : null}
                  {member.email !== token && (
                    <div className={classes["adduser-action"]}>
                      <button
                        className={classes["adduser-btn"]}
                        onClick={handleAddUser.bind(null, member)}
                      >
                        + Add
                      </button>
                    </div>
                  )}
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
