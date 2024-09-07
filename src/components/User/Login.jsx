import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import styles from "./LoginSingUp.module.css";
function Login() {
  // Starea pentru email și parolă
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hook-ul pentru redirecționare
  const navigate = useNavigate();

  // Datele "admin" predefinite
  const adminCredentials = {
    email: "admin@example.com",
    password: "admin123",
  };

  // Funcția de autentificare
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      email === adminCredentials.email &&
      password === adminCredentials.password
    ) {
      // Autentificare reușită, redirecționare către dashboard
      navigate("/dashboard");
    } else {
      // Setează un mesaj de eroare
      setError("Invalid email or password");
    }
  };

  return (
    <section className={styles.customBackground}>
      <MDBContainer>
        <div className={styles.logoTitle}>
          <img
            alt="Your Company"
            src="/Logo.svg"
            className="h-[9rem] w-[11rem] mb-3 "
          />
          <h3 className="text-center mb-4 text-white">Login</h3>
        </div>

        {error && <p className="text-danger text-center">{error}</p>}
        <form
          onSubmit={handleLogin}
          className="d-flex row justify-content-center px-lg-5"
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="col-12 col-sm-11 col-md-10 col-lg-9 mb-4">
              <MDBInput
                label="Email address"
                id="form1"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                labelClass="text-white"
                className="text-white custom-input" // Aplică clasa personalizată
              />
            </div>

            <div className="col-12 col-sm-11 col-md-10 col-lg-9 mb-4">
              <MDBInput
                label="Password"
                id="form2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                labelClass="text-white"
                className="text-white custom-input" // Aplică clasa personalizată
              />
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-around  mx-3 mb-4">
            <div className="d-flex justify-content-center justify-content-sm-start  mb-2 mb-sm-0">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
                labelClass="text-white"
              />
            </div>
            <div className="d-flex justify-content-center justify-content-sm-start s">
              <Link to="/forgot" className={styles.darkBlueLink}>
                {" "}
                Forgot password?
              </Link>
            </div>
          </div>

          <MDBBtn
            type="submit"
            className=" mb-4 col-6 col-sm-3 col-md-3 col-lg-3"
          >
            Sign in
          </MDBBtn>
        </form>

        <div className="text-center">
          <p>
            Not a member? <Link to="/signup">Register</Link>
          </p>
          <p>or sign up with:</p>

          <div
            className="d-flex justify-content-between mx-auto"
            style={{ width: "40%" }}
          >
            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </div>
      </MDBContainer>
    </section>
  );
}

export default Login;
