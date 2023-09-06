import { Form, NavLink } from "react-router-dom";

import classes from "./MainNav.module.css";

const MainNav = () => {
  return (
    <header className={classes["nav-header"]}>
      <nav className={classes["nav-main"]}>
        <div>
          <ul className={classes["nav-ul"]}>
            <li>
              <NavLink to="/teams">teams</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className={classes["nav-ul"]}>
            <li>
              <NavLink to="/login">login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">sign up</NavLink>
            </li>
            <li>
              <Form action="/logout" method="post">
                <button>lougout</button>
              </Form>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNav;
