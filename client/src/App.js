import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route
        path="/messenger"
        element={!user ? <Navigate to="/" /> : <Messenger />}
      />
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
  );
}

export default App;
