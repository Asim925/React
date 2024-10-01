import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav style={{ padding: "10px", backgroundColor: "yellow" }}>
        <ul style={{ display: "flex", listStyleType: "none", gap: "20px" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
