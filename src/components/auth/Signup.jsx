import { Form, useActionData } from "react-router-dom";
import classes from "./Signup.module.css";

const Singup = () => {
  const errorData = useActionData();

  return (
    <>
      <Form method="post" className={classes["singup-form"]}>
        {errorData && <p className={classes["error-msg"]}>{errorData}</p>}
        <p>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </p>
        <div className={classes["singup-action"]}>
          <button>Singup</button>
        </div>
      </Form>
    </>
  );
};

export default Singup;
