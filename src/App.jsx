import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import ForgotPassword from "./components/User/ForgotPassword";
import Dashboard from "./components/Dashboard/Dashboard";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function App() {
  const [isAnimating, setIsAnimating] = useState(false);

  // Funcție pentru a porni animația și schimba ruta după ce animația e completă
  const startAnimation = (callback) => {
    setIsAnimating(true); // Animația de jos în sus
    setTimeout(() => {
      callback(); // Schimbă ruta după animație
      setTimeout(() => setIsAnimating(false), 2000); // Animația de sus în jos
    }, 1); // Durata animației de jos în sus
  };

  return (
    <div className={`backgroundBody ${isAnimating ? "animateExit" : ""}`}>
      <div className="contentContainer">
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Login startAnimation={startAnimation} />}
            />
            <Route path="/signup" element={<Register />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
