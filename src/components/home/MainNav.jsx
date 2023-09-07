import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./MainNav.module.css";

const MainNav = () => {
  const token = useRouteLoaderData("root");
  return (
    <header className={classes["nav-header"]}>
      <nav className={classes["nav-main"]}>
        <div>
          <ul className={classes["nav-ul"]}>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            {token && (
              <li>
                <NavLink to="/teams">teams</NavLink>
              </li>
            )}
          </ul>
        </div>
        <div>
          <ul className={classes["nav-ul"]}>
            {!token && (
              <li>
                <NavLink to="/login">login</NavLink>
              </li>
            )}
            {!token && (
              <li>
                <NavLink to="/signup">sign up</NavLink>
              </li>
            )}
            {token && (
              <li>
                <NavLink to="/user">profile</NavLink>
              </li>
            )}

            {token && (
              <li>
                <Form action="/logout" method="post">
                  <button>lougout</button>
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
