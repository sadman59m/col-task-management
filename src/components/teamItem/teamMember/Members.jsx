/* eslint-disable react/prop-types */

import { getToken } from "../../../util/auth";
import { teamsActions } from "../../../store/teams-slice";
import classes from "./Member.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Members = ({ members, creatorId, teamId, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = getToken();

  // remove member from team
  const removeUserHandler = (member) => {
    const removeMemberItem = {
      email: member.email,
      teamId: teamId,
    };
    const confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete) {
      dispatch(teamsActions.removeMemberFromTeam(removeMemberItem));
    }
    if (member.email === token) {
      navigate("/teams");
    }
    return;
  };
  return (
    <>
      <div className={classes["member-container"]}>
        <p
          className={classes["member-container-header"]}
        >{`Total Members (${members.length})`}</p>
        <ul className={classes["member-ul"]}>
          {members.map((member, index) => {
            return (
              <li className={classes["member-li"]} key={index}>
                <p className={classes["member-name"]}>{member.userName}</p>
                <p className={classes["member-detail"]}>{`${member.email} ${
                  member.email === token ? "(Me)" : ""
                }`}</p>
                {
                  <div className={`${classes["member-action"]} `}>
                    {member.email === creatorId && (
                      <p className={classes["member-name"]}>Admin</p>
                    )}
                    {member.email !== creatorId && member.email !== token && (
                      <button
                        className={classes["removeuser-btn"]}
                        onClick={removeUserHandler.bind(null, member)}
                      >
                        remove
                      </button>
                    )}
                    {member.email === token && token !== creatorId && (
                      <button
                        className={classes["removeuser-btn"]}
                        onClick={removeUserHandler.bind(null, member)}
                      >
                        Leave Team
                      </button>
                    )}
                  </div>
                }
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

export default Members;
