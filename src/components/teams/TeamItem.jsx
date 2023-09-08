/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { teamsActions } from "../../store/teams-slice";
import classes from "./TeamItem.module.css";
import { useDispatch } from "react-redux";

const TeamItem = ({
  title,
  creator,
  creatorEmail,
  taskNumber,
  memberNumber,
  className,
  id,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useRouteLoaderData("root");

  // navigate to the target team using the teamid
  const goToTeamHandler = () => {
    navigate(`/teams/${id}`);
  };

  const deleteTeamHandler = () => {
    const teamId = id;
    const confirmDelete = window.confirm("Confirm Delete?");
    if (confirmDelete) {
      dispatch(teamsActions.removeTeam(teamId));
    }
    return;
  };

  return (
    // <Link to={`/teams/${id}`} className={className["teamitem-a"]}>
    <li className={`${classes["teamitem-list"]} ${className}`}>
      <p className={classes["teamitem-head"]}>{title}</p>
      <div className={classes["teamitem-sub"]}>
        <div className={classes["teamitem-sub-detail"]}>
          <p className={classes.p}>{`Tasks: `}</p>
          <p className={`${classes.p} ${classes.pbold}`}>{`${taskNumber}`}</p>
        </div>
        <div className={classes["teamitem-sub-detail"]}>
          <p className={classes.p}>{`Members: `}</p>
          <p className={`${classes.p} ${classes.pbold}`}>{`${memberNumber}`}</p>
        </div>
        <div className={classes["teamitem-sub-detail"]}>
          <p className={classes.p}>{`Created by: `}</p>
          <p className={`${classes.p} ${classes.pbold}`}>{`${creator}`}</p>
        </div>
      </div>
      <div className={classes["teamitem-action"]}>
        <button className={classes["goto-btn"]} onClick={goToTeamHandler}>
          Go to Team
        </button>
        <button
          className={`${classes["delete-btn"]} ${
            creatorEmail !== token ? classes.disabled : ""
          }`}
          disabled={creatorEmail !== token}
          onClick={deleteTeamHandler}
        >
          Delete Team
        </button>
      </div>
    </li>
    // </Link>
  );
};

export default TeamItem;
