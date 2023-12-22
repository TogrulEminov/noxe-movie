import { FaLock, FaUser } from "react-icons/fa";
import { useFormik } from "formik";
import "./SignUp.scss";
import { basicSchema } from "../../../schemas";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const onSubmit = async (values, actions) => {
    // console.log(values);
    console.log(actions);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
    navigate('/login')
  };
  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        surname: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  // console.log(values);
  return (
    <section id="signup">
      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <h1>Sign Up</h1>
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
              type="text"
              placeholder="Surname"
              required
              name="surname"
              value={values.surname}
              onChange={handleChange}
              className={errors.surname ? "input-error" : ""}
            />
            {errors.surname && <p className="error">{errors.surname}</p>}
          </div>
          <div className="input-box">
            <input
              type="mail"
              placeholder="Email"
              required
              name="email"
              value={values.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <p className="error">{errors.email}</p>}
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
          <div className="input-box">
            <input
              onChange={handleChange}
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              required
              value={values.confirmPassword}
              className={errors.confirmPassword ? "input-error" : ""}
            />
            <FaLock className="icon" />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>

          <button disabled={isSubmitting} type="submit" className="btn-login">
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
