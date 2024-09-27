import { useContext } from "react";
import loginContext from "./contexts/loginContext";

const Login = () => {
  let { user, dispatch } = useContext(loginContext);

  if (user)
    return (
      <div style={{ fontSize: "2rem" }}>
        "ASIM"{" "}
        <a
          className="m-3"
          onClick={() => dispatch({ type: "LOGOUT" })}
          href="#"
        >
          Logout
        </a>
      </div>
    );
  return (
    <div style={{ fontSize: "2rem" }}>
      <a
        className="m-3"
        onClick={() => dispatch({ type: "LOGIN", user: "ASIM" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default Login;
