import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import styles from "./Login.module.css";
import Logo from "./Logo/LoginLogo/LogoLogin";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../../firebase";

function Login({ startAnimation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const persistence = rememberMe
        ? browserLocalPersistence
        : browserSessionPersistence;

      await setPersistence(auth, persistence);
      await signInWithEmailAndPassword(auth, email, password);

      // Pornim animația și apoi navigăm către Dashboard
      startAnimation(() => navigate("/dashboard"));
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    startAnimation(() => navigate("/signup"));
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    startAnimation(() => navigate("/forgot"));
  };

  return (
    <section className={styles.customBackground}>
      <MDBContainer>
        <div className={styles.logoTitle}>
          <Logo className={styles.logoImage} />
          <h3 className={`${styles.loginTitle} text-white`}>Login</h3>
        </div>

        {error && <p className={styles.errorMessage}>{error}</p>}
        <form
          onSubmit={handleLogin}
          className="d-flex row justify-content-center px-lg-5"
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className={`${styles.inputContainer} mb-4`}>
              <div className={styles.inputWrapper}>
                <input
                  placeholder="Email address"
                  id="form1"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.customInput}
                />
                <label htmlFor="form1" className={styles.customLabel}>
                  Email address
                </label>
              </div>
            </div>

            <div className={`${styles.inputContainer} mb-4`}>
              <div className={styles.inputWrapper}>
                <input
                  placeholder="Password"
                  id="form2"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.customInput}
                />
                <label htmlFor="form2" className={styles.customLabel}>
                  Password
                </label>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-around mx-3 mb-4">
            <div className="d-flex justify-content-center justify-content-sm-start mb-2 mb-sm-0">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
                className={styles.customCheckbox}
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            </div>
            <div className="d-flex justify-content-center justify-content-sm-start">
              <Link
                to="/forgot"
                onClick={handleForgotPassword}
                className={styles.darkBlueLink}
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <MDBBtn
            type="submit"
            className={`${styles.submitButton} mb-4 col-6 col-sm-3 col-md-3 col-lg-3`}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </MDBBtn>
        </form>

        <div className="text-center">
          <p className={styles.notAMemberText}>
            Not a member?{" "}
            <Link
              to="/signup"
              onClick={handleRegister}
              className={styles.registerLink}
            >
              Register
            </Link>
          </p>
        </div>
      </MDBContainer>
    </section>
  );
}

export default Login;
