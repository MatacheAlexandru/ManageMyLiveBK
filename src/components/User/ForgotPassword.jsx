import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import LogoForgot from "./Logo/ForgotLogo/LogoForgot";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (!email) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage(
        "If this email is registered, you will receive a password reset link."
      );
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <MDBContainer fluid className={styles.customBackground}>
      <MDBCol className={styles.customColImage}>
        <LogoForgot className={styles.customImage} />
      </MDBCol>
      <MDBCard className={styles.customCard}>
        <MDBCardBody className={styles.customCardBody}>
          <div className={styles.backButtonContainer}>
            <button
              className={styles.customBackButton}
              onClick={() => navigate("/")}
            >
              <span className={styles.customBackIcon}>
                <IoIosArrowBack />
              </span>
              Back
            </button>
          </div>

          <MDBRow className={styles.customRow}>
            <MDBCol className={styles.customColForm}>
              <p className={styles.customTitle}>Forgot Password</p>

              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.customInput}
                  placeholder="Enter your email"
                />
                <label htmlFor="form1" className={styles.customLabel}>
                  Your Email
                </label>
              </div>

              {errorMessage && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}
              {successMessage && (
                <p className={styles.successMessage}>{successMessage}</p>
              )}

              <button
                className={styles.customSubmitButton}
                onClick={handleForgotPassword}
              >
                Reset Password
              </button>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default ForgotPassword;
