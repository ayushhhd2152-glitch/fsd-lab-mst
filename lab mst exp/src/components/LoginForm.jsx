import { useState } from "react";
import "./Auth.css";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");

  const handle = (role) => {
    if (username.trim() === "") {
      alert("Please enter a username");
      return;
    }
    onLogin(username.trim(), role);
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <div className="btn-row">
        <button onClick={() => handle("Admin")}>Login as Admin</button>
        <button onClick={() => handle("Viewer")}>Login as Viewer</button>
      </div>
    </div>
  );
}

export default LoginForm;
