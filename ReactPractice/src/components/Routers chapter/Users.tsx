import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <ol>
        <h1>
          {" "}
          <li>a</li>
          <li>d</li>
          <li>b</li>
          <li>c</li>
          <li>e</li>
          <li>f</li>
        </h1>
      </ol>
      <Link to={"/"}>Goto home page</Link>
    </div>
  );
};

export default Users;
