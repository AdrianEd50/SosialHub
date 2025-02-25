import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Vennligst fyll ut alle feltene");
      return;
    }
    console.log("Bruker logget inn:", { email, password });
    alert("Login vellykket (mock)!");
  };

  return (
    <div>
      <h2>Logg inn</h2>
      <form onSubmit={handleLogin}>
        <div className="epost">
          <label className="block mb-1">E-post</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-2 py-1 rounded"
            placeholder="Skriv inn e-posten din"
          />
        </div>
        <div className="passord">
          <label className="block mb-1">Passord</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-2 py-1 rounded"
            placeholder="Skriv inn passordet ditt"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Logg inn
        </button>
      </form>
    </div>
  );
};

export default LoginForm;