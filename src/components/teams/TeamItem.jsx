/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, NavLink, useRouteLoaderData } from "react-router-dom";
import classes from "./TeamItem.module.css";

const TeamItem = ({
  title,
  creator,
  taskNumber,
  memberNumber,
  className,
  id,
}) => {
  const token = useRouteLoaderData("root");

  return (
    <li className={`${classes["teamitem-list"]} ${className}`}>
      <Link to={`/teams/${id}`}>
        <p className={classes["teamitem-head"]}>{title}</p>
        <div className={classes["teamitem-sub"]}>
          <p>{`Created by: ${creator}`}</p>
          <p>{`Tasks: ${taskNumber}`}</p>
          <p>{`Members: ${memberNumber}`}</p>
        </div>
      </Link>
    </li>
  );
};

export default TeamItem;
