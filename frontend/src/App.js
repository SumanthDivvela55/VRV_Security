import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Dashboard from "./components/adminpanel/Dashboard";
import ManageUsers from "./components/adminpanel/manageusers/ManageUsers";
import ManageRole from "./components/adminpanel/manageroles/ManageRole";
import Permission from "./components/adminpanel/managepermission/Permission";
import { ThemeProvider } from "./components/context/ThemeContext";
import SignIn from "./components/authentication/SignIn";

function App() {
  return (
    <ThemeProvider>
      <div style={{ width: "100%" }}>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/signin" element={<SignIn />} />
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/manageuser" element={<ManageUsers />} />
              <Route exact path="/managerole" element={<ManageRole />} />
              <Route exact path="/managepermission" element={<Permission />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
