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
import styles from "./LoginSignUp.module.css";
import { signInWithEmailAndPassword } from "firebase/auth"; // Importă funcția de login
import { auth } from "../../firebase"; // Importă instanța Firebase Auth

function Login() {
  // Starea pentru email, parolă și mesajele de eroare
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hook-ul pentru redirecționare
  const navigate = useNavigate();

  // Funcția de autentificare
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Resetăm mesajele de eroare
    setLoading(true); // Pornim încărcarea

    try {
      // Autentificare Firebase cu email și parolă
      await signInWithEmailAndPassword(auth, email, password);
      // Autentificare reușită, redirecționare către dashboard
      navigate("/dashboard");
    } catch (error) {
      // Gestionăm erorile și afișăm un mesaj utilizatorului
      if (error.code === "auth/wrong-password") {
        setError("Invalid password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false); // Oprim starea de încărcare
    }
  };

  return (
    <section className={styles.customBackground}>
      <MDBContainer>
        <div className={styles.logoTitle}>
          <img
            alt="Your Company"
            src="/Logo.svg"
            className="h-[9rem] w-[11rem] mb-3"
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
                className="text-white custom-input"
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
                className="text-white custom-input"
              />
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-around mx-3 mb-4">
            <div className="d-flex justify-content-center justify-content-sm-start mb-2 mb-sm-0">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
                labelClass="text-white"
              />
            </div>
            <div className="d-flex justify-content-center justify-content-sm-start">
              <Link to="/forgot" className={styles.darkBlueLink}>
                Forgot password?
              </Link>
            </div>
          </div>

          <MDBBtn
            type="submit"
            className="mb-4 col-6 col-sm-3 col-md-3 col-lg-3"
            disabled={loading} // Butonul este dezactivat dacă se încarcă
          >
            {loading ? "Signing in..." : "Sign in"}{" "}
            {/* Afișează mesajul de încărcare */}
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
