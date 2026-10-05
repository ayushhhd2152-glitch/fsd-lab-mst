import "./Auth.css";

function Dashboard({ user, onLogout }) {
  return (
    <div className="card">
      <h2>
        Welcome, {user.username} ({user.role})
      </h2>

      {user.role === "Admin" ? (
        <button className="danger">Delete Post</button>
      ) : (
        <p>Read-only access</p>
      )}

      <div>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
