import { useNavigate } from "react-router-dom";

const Users = () => {

  const navigate = useNavigate()

  function goToHome() {
    navigate('/')
  }

  return (
    <div>
      <button onClick={goToHome}>Go to Home</button>
      <h1>Users Page</h1>
    </div>
  );
};

export default Users;
