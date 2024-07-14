import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Email } from "./Components/Email/Email";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email" element={<Email />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
