import React, { Dispatch } from "react";
import { Actions } from "../reducers/LoginReducer";

interface LoginContextType {
  user: string;
  dispatch: Dispatch<Actions>;
}

const loginContext = React.createContext<LoginContextType>(
  {} as LoginContextType
);

export default loginContext;
