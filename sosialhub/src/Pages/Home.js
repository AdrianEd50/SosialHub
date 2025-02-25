import React from "react";
import LoginForm from "../Login/LoginForm";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  return (
    <div className="LoginForm">
      <LoginForm />
      <button className="loginBtn" onClick={() => navigate("/signup")}>
        Not signed up? Click here to signup
      </button>
    </div>
  );
}

export default Home;