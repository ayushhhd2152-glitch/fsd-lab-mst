import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
  // null when logged out, { username, role } when logged in
  const [user, setUser] = useState(null);

  const handleLogin = (username, role) => setUser({ username, role });
  const handleLogout = () => setUser(null);

  return (
    <div className="container">
      {user === null ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
