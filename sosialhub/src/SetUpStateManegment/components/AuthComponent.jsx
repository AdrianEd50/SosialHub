import React, { useState } from 'react'; // Import useState
import { useAuth } from '../context/AuthContext'; // Import useAuth

const AuthComponent = ({ onLogin }) => {
  const { user, login, logout, isAuthenticated } = useAuth();
  const [userData, setUserData] = useState({ name: '', email: '' });

  const handleLogin = () => {
    if (userData.name && userData.email) {
      login(userData);
      setUserData({ name: '', email: '' });
      onLogin(); // Notify parent component about login
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.name}!</p>
          <p>Email: {user?.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default AuthComponent;