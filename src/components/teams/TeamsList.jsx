import classes from "./TeamsList.module.css";

const TeamsList = () => {
  return (
    <>
      <div className={classes["teamlist-container"]}>
        <h2>Your teams</h2>
        <ul className={classes["teamlist-ul"]}>
          <li className={classes["teamlist-li"]}>Team1</li>
          <li className={classes["teamlist-li"]}>Team2</li>
        </ul>
      </div>
    </>
  );
};

export default TeamsList;
