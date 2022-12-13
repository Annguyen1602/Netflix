import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./components/Main";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </>
  );
}

export default App;
