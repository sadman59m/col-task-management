/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import classes from "./AddUserMember.module.css";
import { getToken } from "../../../util/auth";
import { getAllUsers } from "../../../util/userInfo";
import { teamsActions } from "../../../store/teams-slice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const AddMember = ({ onClose, teamId }) => {
  const stateTeams = useSelector((state) => state.teams);
  const dispatch = useDispatch();
  const allUsers = getAllUsers();
  const token = getToken();
  // const filteredUsers = allUsers.filter((user) => user.email !== token);
  const currentTeam = stateTeams.teams.find((team) => team.id === teamId);
  const currentTeamMembers = currentTeam.members;
  const filteredUsers = [];

  // run two nested for loop to filter out the already added users
  for (let i = 0; i < allUsers.length; ++i) {
    let userFound = false;
    for (let j = 0; j < currentTeamMembers.length; ++j) {
      if (currentTeamMembers[j].email === allUsers[i].email) {
        userFound = true;
        break;
      }
    }
    if (!userFound) {
      const newUser = {
        userName: allUsers[i].userName,
        email: allUsers[i].email,
      };
      filteredUsers.push(newUser);
    }
  }

  const handleAddUser = (member) => {
    const newMember = {
      userName: member.userName,
      email: member.email,
      teamId: teamId,
    };
    dispatch(teamsActions.addMember(newMember));
    toast.success("User Added.", {
      position: "top-center",
      autoClose: 500,
    });
  };
  return (
    <>
      <div className={classes["member-container"]}>
        <p
          className={classes["member-container-header"]}
        >{`Avaialbe Users (${filteredUsers.length})`}</p>
        <ul className={classes["member-ul"]}>
          {filteredUsers.length <= 0 && (
            <li className={classes["member-li"]}>
              <p
                className={classes["member-name"]}
              >{`No Users Available To Add`}</p>
            </li>
          )}
          {filteredUsers &&
            filteredUsers.map((member, index) => {
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
