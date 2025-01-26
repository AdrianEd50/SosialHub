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
    <div className="p-4 max-w-sm mx-auto border rounded">
      <h2 className="text-2xl font-bold mb-4">Registrer deg</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label className="block mb-1">Navn</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-2 py-1 rounded"
            placeholder="Skriv inn navnet ditt"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">E-post</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-2 py-1 rounded"
            placeholder="Skriv inn e-posten din"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Passord</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-2 py-1 rounded"
            placeholder="Lag et passord"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Bekreft passord</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border px-2 py-1 rounded"
            placeholder="Gjenta passordet"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Registrer deg
        </button>
      </form>
    </div>
  );
};

export default SignupForm;