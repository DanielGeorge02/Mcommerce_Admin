import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Doctor from "./Pages/Doctor/Doctor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from "axios";
import Vendor from "./Pages/Vendor/Vendor";

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
        <Route path="/" element={<Dashboard api={api} />} />
        <Route path="/doctor" element={<Doctor api={api} />} />
        <Route path="/vendor" element={<Vendor api={api} />} />
      </Routes>
    </Router>
  );
}

export default App;
