import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import styles from "./LoginSignUp.module.css";
import { useNavigate } from "react-router-dom"; // Importă useNavigate
import { createUserWithEmailAndPassword } from "firebase/auth"; // Importă funcția de înregistrare din Firebase
import { auth } from "../../firebase"; // Importă instanța Firebase Auth
import { setDoc, doc } from "firebase/firestore"; // Importă Firestore
import { db } from "../../firebase"; // Importă instanța Firestore

function Register() {
  // Stările pentru email, parolă, confirmare parolă, nume, eroare și succes
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false); // Stare pentru încărcare

  const navigate = useNavigate(); // Inițializează useNavigate

  // Funcția pentru a gestiona înregistrarea
  const handleRegister = async () => {
    setErrorMessage(""); // Resetăm mesajele de eroare
    setSuccessMessage(""); // Resetăm mesajele de succes

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true); // Începem încărcarea
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Salvează numele și emailul utilizatorului în Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
      });

      setSuccessMessage("Account created successfully. Redirecting...");
      setTimeout(() => {
        navigate("/"); // Redirecționează către pagina de login după înregistrare
      }, 3000); // Redirecționează după 3 secunde
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Email is already in use.");
      } else if (error.code === "auth/weak-password") {
        setErrorMessage("Password is too weak.");
      } else if (error.code === "auth/invalid-email") {
        setErrorMessage("Invalid email format.");
      } else {
        setErrorMessage("Failed to create account. Please try again.");
      }
    } finally {
      setLoading(false); // Oprim încărcarea
    }
  };

  return (
    <MDBContainer fluid className={styles.customBackground}>
      <MDBCard
        className="text-white m-2"
        style={{
          borderRadius: "25px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <MDBCardBody>
          <div className="d-flex justify-content-start mb-2">
            <MDBBtn
              color="primary"
              style={{
                backgroundColor: "#1f3b5b",
                color: "#fff",
                borderRadius: "20px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                padding: "10px 20px",
                transition: "all 0.3s ease-in-out",
              }}
              onClick={() => navigate("/")}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#274b77")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#1f3b5b")
              }
            >
              <MDBIcon fas icon="arrow-left" size="lg" className="text-white" />
              Back
            </MDBBtn>
          </div>

          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              {/* Mesaje de eroare și succes */}
              {errorMessage && <p className="text-danger">{errorMessage}</p>}
              {successMessage && (
                <p className="text-success">{successMessage}</p>
              )}

              {/* Input pentru numele utilizatorului */}
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Your Name"
                  id="form1"
                  type="text"
                  className="w-100 text-white custom-input"
                  labelClass="text-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)} // Actualizăm starea numelui
                />
              </div>

              {/* Input pentru email */}
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Email"
                  id="form2"
                  type="email"
                  labelClass="text-white"
                  className="text-white custom-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Input pentru parolă */}
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label="Password"
                  id="form3"
                  type="password"
                  labelClass="text-white"
                  className="text-white custom-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Input pentru confirmarea parolei */}
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Repeat your password"
                  id="form4"
                  type="password"
                  labelClass="text-white"
                  className="text-white custom-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              {/* Checkbox pentru Termeni și condiții */}
              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="I agree all statements in Terms of service"
                />
              </div>

              {/* Buton de înregistrare */}
              <MDBBtn
                className="mb-4"
                size="lg"
                onClick={handleRegister}
                disabled={loading} // Dezactivăm butonul dacă se încarcă
              >
                {loading ? "Registering..." : "Register"}
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-2 d-flex align-items-center justify-content-center"
            >
              <img
                alt="Your Company"
                src="/RegisterLogo.svg"
                className="img-fluid mb-3 w-90 w-sm-75 w-md-50 w-lg-50 h-auto"
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
