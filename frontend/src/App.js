import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";

import axios from "axios";

const url = window.location.hostname;

const api = axios.create({
  baseURL: `http://${url}:8000/api/`,
  // baseURL: `https://message-3pso.onrender.com/api/`,
  // baseURL: `https://bharathwaj.pythonanywhere.com/`,
});

function App() {
  return (
    <div className="App">
      <Dashboard api={api} />
    </div>
  );
}

export default App;
