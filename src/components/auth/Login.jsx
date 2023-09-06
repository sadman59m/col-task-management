import { Form, useActionData } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  const errorData = useActionData();
  return (
    <>
      <Form method="post" className={classes["login-form"]}>
        {errorData && <p className={classes["error-msg"]}>{errorData}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes["login-action"]}>
          <button>Login</button>
        </div>
      </Form>
    </>
  );
};

export default Login;
