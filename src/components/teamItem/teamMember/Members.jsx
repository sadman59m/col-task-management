/* eslint-disable react/prop-types */
import { getToken } from "../../../util/auth";
import classes from "./Member.module.css";
const Members = ({ members, onClose }) => {
  const token = getToken();
  return (
    <>
      <div className={classes["member-container"]}>
        <p>{`Total Members (${members.length})`}</p>
        <ul className={classes["member-ul"]}>
          {members.map((member, index) => {
            return (
              <li className={classes["member-li"]} key={index}>
                <p className={classes["member-name"]}>{member.userName}</p>
                <p className={classes["member-detail"]}>{member.email}</p>
                {member.email === token ? (
                  <p className={classes["member-detail"]}>{"(Me)"}</p>
                ) : null}
              </li>
            );
          })}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
};

export default Members;
