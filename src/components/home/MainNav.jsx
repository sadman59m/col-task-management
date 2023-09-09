import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./MainNav.module.css";
import { getUserData } from "../../util/userInfo";

const MainNav = () => {
  const token = useRouteLoaderData("root");
  const userData = getUserData(token) || [];
  const userName = userData.userName;

  return (
    <header className={classes["nav-header"]}>
      <nav className={classes["nav-main"]}>
        <div>
          <ul className={classes["nav-ul"]}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            {token && (
              <li>
                <NavLink
                  to="/teams"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  My Teams
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div>
          <ul className={classes["nav-ul"]}>
            {!token && (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  login
                </NavLink>
              </li>
            )}
            {!token && (
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  sign up
                </NavLink>
              </li>
            )}
            {token && (
              <li>
                <NavLink
                  to="/user"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {userName}
                </NavLink>
              </li>
            )}

            {token && (
              <li>
                <Form action="/logout" method="post">
                  <button className={classes["logout-btn"]}>lougout</button>
                </Form>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNav;
