import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import ForgotPassword from "./components/User/ForgotPassword";

import Dashboard from "./components/Dashboard/Dashboard";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
