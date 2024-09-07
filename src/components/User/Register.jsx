import React from "react";
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
import styles from "./LoginSingUp.module.css";
import { useNavigate } from "react-router-dom"; 

function Register() {
  const navigate = useNavigate(); 

  
  const handleRegister = () => {
    
    navigate("/"); 
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
              <MDBIcon
                fas
                icon="arrow-left"
                size="lg"
                className=" text-white"
              />
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

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Your Name"
                  id="form1"
                  type="text"
                  className="w-100 text-white custom-input"
                  labelClass="text-white"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Email"
                  id="form2"
                  type="email"
                  labelClass="text-white"
                  className="text-white custom-input"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label="Password"
                  id="form3"
                  type="password"
                  labelClass="text-white"
                  className="text-white custom-input"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Repeat your password"
                  id="form4"
                  type="password"
                  labelClass="text-white"
                  className="text-white custom-input"
                />
              </div>

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="I agree all statements in Terms of service"
                />
              </div>

              <MDBBtn className="mb-4" size="lg" onClick={handleRegister}>
                Register
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
