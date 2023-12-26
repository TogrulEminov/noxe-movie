import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";
import { basicSchema2 } from "../../../schemas/main";
import { useFormik } from "formik";
import axios from "axios";
// import { IoIosArrowRoundBack } from "react-icons/io";
import "./Login.scss";
const USERS_URL = "http://localhost:3031/users";

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
    const response = await axios.get(USERS_URL);
    const data = response.data;
    const find = data.find((user) => user.name == values.name);
    if (find) {
      navigate("/");
      localStorage.setItem("user", JSON.stringify(find));
    } else {
      console.log("User not found");
    }
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: basicSchema2,
    onSubmit,
  });
  return (
    <section id="login">
      <form onSubmit={handleSubmit} action="">
        <div className="wrapper">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              name="name"
              value={values.name}
              onChange={handleChange}
              className={errors.name ? "input-error" : ""}
            />
            <FaUser className="icon" />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={values.password}
              onChange={handleChange}
              className={errors.password ? "input-error" : ""}
            />
            <FaLock className="icon" />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="remember-fotgot">
            <label>
              <input name="check" type="checkbox" />
              Remember me
            </label>
            <Link>Forgot password?</Link>
          </div>
          <button onClick={handleSubmit} type="submit" className="btn-login">
            Login
          </button>
          <div className="register-link">
            <p>
              Do not have any accaunt? <Link to="/signup">Register Now</Link>
            </p>
            {/* <div className="arrrows">
              <div>
                <IoIosArrowRoundBack />
                <span>Back to Home</span>
              </div>
              <div>
                <IoIosArrowRoundBack />
                <span>Back to Sign Up</span>
              </div>
            </div> */}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
