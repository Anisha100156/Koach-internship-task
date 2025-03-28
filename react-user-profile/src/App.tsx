import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserPage from "./pages/UserPage";
import "./styles.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="dashboard">
        <br></br>
        <br></br>
        <h1>User  Dashboard</h1>
        <br></br>
        <nav>
          <Link to="/users/1">User 1</Link>
          <Link to="/users/2">User 2</Link>
          <Link to="/users/3">User 3</Link>
          
        </nav>
        <br></br>
        <Routes>
          <Route path="/users/:id" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
