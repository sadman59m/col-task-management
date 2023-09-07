/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRouteLoaderData } from "react-router-dom";
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
      <div className={classes["teamitem-head"]}>{title}</div>
      <div className={classes["teamitem-sub"]}>
        <div>{`Created by: ${creator}`}</div>
        <div>{`Tasks: ${taskNumber}`}</div>
        <div>{`Members: ${memberNumber}`}</div>
      </div>
    </li>
  );
};

export default TeamItem;
