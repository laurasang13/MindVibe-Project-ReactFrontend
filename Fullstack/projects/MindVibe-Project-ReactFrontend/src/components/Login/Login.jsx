import { useNavigate } from "react-router-dom";
import "./Login1.css";

function Login1() {
  const navigate = useNavigate();

  const handleEnter = (e) => {
    e.preventDefault();
    localStorage.setItem("fakeUser", "true");
    navigate("/current-mood");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Welcome back</h1>

        <form onSubmit={handleEnter}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
}

export default Login1;