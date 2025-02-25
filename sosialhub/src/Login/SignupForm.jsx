// SignupForm.jsx
import React, { useState } from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Vennligst fyll ut alle feltene");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passordene samsvarer ikke!");
      return;
    }

    console.log("Ny bruker registrert:", { name, email, password });
    alert("Registrering vellykket!");
  };

  return (
    <div className="signupForm">
      <h2>Registrer deg</h2>
      <form onSubmit={handleSignup}>
        <div className="signupNavn">
          <label>Navn</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Skriv inn navnet ditt"
          />
        </div>
        <div className="signupEpost">
          <label>E-post</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Skriv inn e-posten din"
          />
        </div>
        <div className="signupPassord">
          <label>Passord</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Lag et passord"
          />
        </div>
        <div className="signupBekreftPassord">
          <label>Bekreft passord</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Gjenta passordet"
          />
        </div>
        <button type="submit">Registrer deg</button>
      </form>
    </div>
  );
};

export default SignupForm;