import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>ITS THE HOME PAGE</h1>

      <Link to={"/users"}>Goto Users</Link>
    </div>
  );
};

export default Home;
