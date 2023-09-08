/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./team.module.css";
import { setTeams } from "../../store/teams-action";
import Members from "./teamMember/Members";
import ModalPrimary from "../UI/ModalPrimary";
import AddMember from "./teamMember/AddMember";
import TaskList from "./task/TaskList";

const Team = ({ team }) => {
  const [showMembers, setShowMembers] = useState(false);
  const [showAddMembers, setShowAddMembers] = useState(false);

  const stateTeams = useSelector((state) => state.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stateTeams.changed) {
      dispatch(setTeams(stateTeams.teams));
    }
  }, [stateTeams, dispatch]);

  const teamMembers = team.members;
  const showMembersHandler = () => {
    setShowMembers((prevState) => !prevState);
  };
  const showAddMembersHandler = () => {
    setShowAddMembers((prevState) => !prevState);
  };

  // const showMemberClass = setShowMembers ? classes["showmember-active"] : "";

  return (
    <>
      <div className={`${classes["team-container"]}`}>
        <div className={classes["teammember-container"]}>
          <div className={classes["all-members"]}>
            {
              <button
                className={classes["member-btn"]}
                onClick={showMembersHandler}
              >{`Show all members (${teamMembers.length})`}</button>
            }
            {showMembers && (
              <>
                <ModalPrimary onClose={showMembersHandler}>
                  <Members members={teamMembers} onClose={showMembersHandler} />
                </ModalPrimary>
              </>
            )}
          </div>
          <div className={classes["all-members"]}>
            {
              <button
                className={classes["member-btn"]}
                onClick={showAddMembersHandler}
              >{`Add New Member`}</button>
            }
            {showAddMembers && (
              <>
                <ModalPrimary onClose={showAddMembersHandler}>
                  <AddMember
                    members={teamMembers}
                    onClose={showAddMembersHandler}
                  />
                </ModalPrimary>
              </>
            )}
          </div>
        </div>
        <TaskList />
      </div>
    </>
  );
};

export default Team;
