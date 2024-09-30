import useAuthStore from "./store";

const LoginStatus = () => {
  let { user, login, logout } = useAuthStore();

  if (user)
    return (
      <div style={{ fontSize: "2rem" }}>
        <a className="m-3" onClick={() => logout()} href="#">
          Logout
        </a>
        , while user: {user}
      </div>
    );
  return (
    <div style={{ fontSize: "2rem" }}>
      <a className="m-3" onClick={() => login("Asim.nazeer")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
