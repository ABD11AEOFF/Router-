import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ol>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/comments">Comments</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ol>
  );
};

export default Navbar;
