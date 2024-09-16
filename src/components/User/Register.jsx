import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { IoIosArrowBack } from "react-icons/io"; // Pentru iconița de back
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { setDoc, doc } from "firebase/firestore"; // Pentru Firestore
import { db } from "../../firebase";
import LogoRegister from "./Logo/RegisterLogo/LogoRegister";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false); // Stare pentru checkbox-ul Termeni și Condiții

  const navigate = useNavigate();

  const handleRegister = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Salvează datele utilizatorului în Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
      });

      setSuccessMessage("Account created successfully. Redirecting...");
      setTimeout(() => {
        navigate("/");
      }, 3000);
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
      setLoading(false);
    }
  };

  return (
    <MDBContainer fluid className={styles.customBackground}>
      <MDBCol className="d-flex justify-content-center align-items-center">
        <LogoRegister className={styles.customImage} />
      </MDBCol>
      <MDBCard className={styles.customCard}>
        <MDBCardBody className={styles.customCardBody}>
          {/* Flexbox and layout for screen using Bootstrap */}
          <div className="d-flex justify-content-start mb-2">
            <button
              className={styles.customBackButton}
              onClick={() => navigate("/")}
            >
              <IoIosArrowBack className={styles.customBackIcon} />
              Back
            </button>
          </div>

          <MDBRow
            className={`${styles.rowPosition} d-flex justify-content-between align-items-center`}
          >
            <MDBCol className="d-flex flex-column align-items-center">
              <p className={styles.customTitle}>Sign up</p>

              {errorMessage && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}
              {successMessage && (
                <p className={styles.successMessage}>{successMessage}</p>
              )}

              <div className={styles.inputWrapper}>
                <input
                  placeholder=" "
                  type="text"
                  className={styles.customInput}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="form1" className={styles.customLabel}>
                  Your Name
                </label>
              </div>

              <div className={styles.inputWrapper}>
                <input
                  placeholder=" "
                  type="email"
                  className={styles.customInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="form1" className={styles.customLabel}>
                  Your Email
                </label>
              </div>

              <div className={styles.inputWrapper}>
                <input
                  placeholder=" "
                  type="password"
                  className={styles.customInput}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="form1" className={styles.customLabel}>
                  Password
                </label>
              </div>

              <div className={styles.inputWrapper}>
                <input
                  placeholder=" "
                  type="password"
                  className={styles.customInput}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label htmlFor="form1" className={styles.customLabel}>
                  Repeat your password
                </label>
              </div>

              <div className={styles.customLabel2}>
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="I agree all statements in Terms of service"
                  checked={termsAccepted} // Controlează dacă este bifat sau nu
                  onChange={(e) => setTermsAccepted(e.target.checked)} // Actualizează starea
                />
              </div>

              <button
                className={styles.customSubmitButton}
                onClick={handleRegister}
                disabled={loading || !termsAccepted} // Dezactivează butonul dacă nu sunt acceptați termenii
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
