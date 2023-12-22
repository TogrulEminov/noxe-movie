import { Link } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";
import "./Login.scss";

const Login = () => {
  return (
    <section id="login">
      <form action="">
        <div className="wrapper">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />

            <FaLock className="icon" />
          </div>
          <div className="remember-fotgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link>Forgot password?</Link>
          </div>
          <button type="submit" className="btn-login">
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have any accaunt? <Link to="/signup">Register Now</Link>{" "}
            </p>
          </div>
          <div className="register-link">
            <p>
              Go to home? <Link to="/">Go Back</Link>{" "}
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
