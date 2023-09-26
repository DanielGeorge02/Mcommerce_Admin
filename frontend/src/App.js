import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Doctor from "./Pages/Doctor/Doctor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from "axios";
import Vendor from "./Pages/Vendor/Vendor";
import Random from "./Pages/Random/Random";
import { Home } from "./Pages/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import Queries from "./Pages/Queries/Queries";

const url = window.location.hostname;

const api = axios.create({
  baseURL: `http://${url}:8000/api/`,
  // baseURL: `https://message-3pso.onrender.com/api/`,
  // baseURL: `https://bharathwaj.pythonanywhere.com/`,
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home api={api} />} />
        <Route path="/dashboard" element={<Dashboard api={api} />} />
        <Route path="/navbar" element={<Navbar api={api} />} />
        <Route path="/doctor" element={<Doctor api={api} />} />
        <Route path="/vendor" element={<Vendor api={api} />} />
        <Route path="/random" element={<Random api={api} />} />
        <Route path="/queries" element={<Queries api={api} />} />
      </Routes>
    </Router>
  );
}

export default App;
