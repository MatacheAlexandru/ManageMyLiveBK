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
} from "mdb-react-ui-kit";
import styles from "./LoginSignUp.module.css";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth"; // Importă funcția de resetare
import { auth } from "../../firebase"; // Importă instanța Firebase Auth

function ForgotPassword() {
  const [email, setEmail] = useState(""); // Stare pentru email
  const [errorMessage, setErrorMessage] = useState(""); // Mesaj de eroare
  const [successMessage, setSuccessMessage] = useState(""); // Mesaj de succes
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    setErrorMessage(""); // Resetăm mesajele
    setSuccessMessage("");

    if (!email) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email); // Trimite emailul de resetare
      setSuccessMessage(
        "If this email is registered, you will receive a password reset link."
      );
      setTimeout(() => navigate("/"), 3000); // După 3 secunde, redirecționează către login
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again."); // Mesaj generalizat
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
              className="order-2 order-lg-1 d-flex flex-column align-items-center justify-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Forgot Password
              </p>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Email"
                  id="form1"
                  type="email"
                  className="w-100 text-white custom-input"
                  labelClass="text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Afișarea mesajelor de eroare și succes */}
              {errorMessage && <p className="text-danger">{errorMessage}</p>}
              {successMessage && (
                <p className="text-success">{successMessage}</p>
              )}

              <MDBBtn
                className="mb-4"
                size="lg"
                onClick={handleForgotPassword}
                style={{
                  backgroundColor: "#1f3b5b",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                Reset Password
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-2 d-flex align-items-center justify-content-center"
            >
              <img
                alt="Your Company"
                src="/ForgotLogo.svg"
                className="img-fluid mb-3 w-90 w-sm-75 w-md-50 w-lg-50 h-auto"
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default ForgotPassword;
