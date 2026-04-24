import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import MainDashboardLogin from "./Components/MainDashboardLogin";
import { useSelector } from "react-redux";
import "./App.css";

function App() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <MainDashboardLogin />} />
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
