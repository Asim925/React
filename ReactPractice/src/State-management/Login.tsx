import { useReducer, useState } from "react";
import LoginReducer from "./reducers/LoginReducer";

const Login = () => {
  let [login, dispatch] = useReducer(LoginReducer, "");

  if (login)
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
