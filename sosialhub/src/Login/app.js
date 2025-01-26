import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignupForm from "./SignUpForm";
import LoginForm from "./LoginForm";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Velkommen til SocialHub</h1>
        <nav>
          <ul>
            <li><Link to="/login">Logg inn</Link></li>
            <li><Link to="/signup">Registrer deg</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/" element={<h2>Velkommen til forsiden!</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;