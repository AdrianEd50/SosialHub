import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

// Import your components here
import Home from "../Navigation/Components/Home";
import Search from "../Navigation/Components/Search";
import Notifications from "../Navigation/Components/Notifications";
import Explore from "../Navigation/Components/Explore";
import Messages from "../Navigation/Components/Messages";
import Profile from "../Navigation/Components/Profile";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="navbar w-64 bg-gray-800 text-white p-4">
          <h2 className="text-2xl font-bold mb-6">SocialHub</h2>
          <nav className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-bold" : "text-gray-400"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-bold" : "text-gray-400"
              }
            >
              Search
            </NavLink>
            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-bold" : "text-gray-400"
              }
            >
              Notifications
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-bold" : "text-gray-400"
              }
            >
              Explore
            </NavLink>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-bold" : "text-gray-400"
              }
            >
              Messages
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-bold" : "text-gray-400"
              }
            >
              Profile
            </NavLink>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;