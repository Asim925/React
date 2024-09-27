interface login {
  type: "LOGIN";
  user: string;
}

interface logout {
  type: "LOGOUT";
}

export type Actions = login | logout;

const LoginReducer = (state: string, action: Actions) => {
  if (action.type === "LOGIN") return action.user;
  if (action.type === "LOGOUT") return "";
  return state;
};

export default LoginReducer;
