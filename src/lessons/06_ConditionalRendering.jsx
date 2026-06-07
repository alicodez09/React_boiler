import { useState } from "react";

const ConditionalRenderingLesson = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("guest");
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("idle");

  const renderStatus = () => {
    switch (status) {
      case "loading": return <p style={{ color: "orange" }}>Loading...</p>;
      case "success": return <p style={{ color: "green" }}>Success!</p>;
      case "error":   return <p style={{ color: "red" }}>Something went wrong.</p>;
      default:        return <p>Press a button below.</p>;
    }
  };

  return (
    <div className="lesson">
      <h2>Lesson 6: Conditional Rendering</h2>

      <section>
        <h3>1. if/else before return</h3>
        <div className="card">
          {isLoggedIn
            ? <p style={{ color: "green" }}>Welcome back!</p>
            : <p style={{ color: "gray" }}>Please log in.</p>
          }
          <button onClick={() => setIsLoggedIn(v => !v)}>
            {isLoggedIn ? "Log Out" : "Log In"}
          </button>
        </div>
      </section>

      <section>
        <h3>2. Ternary ( ? : )</h3>
        <div className="card">
          <p>
            Status:{" "}
            {isLoggedIn
              ? <span style={{ color: "green" }}>Logged In</span>
              : <span style={{ color: "crimson" }}>Logged Out</span>
            }
          </p>
        </div>
      </section>

      <section>
        <h3>3. && Short-Circuit</h3>
        <div className="card">
          <p>Count: {count}</p>
          <button onClick={() => setCount(c => c + 1)}>+</button>
          {count > 5 && <p style={{ color: "red" }}>Warning: count is greater than 5!</p>}
        </div>
      </section>

      <section>
        <h3>4. Role-based Rendering</h3>
        <div className="card">
          <div style={{ marginBottom: 8 }}>
            {["guest", "user", "admin"].map(r => (
              <button key={r} onClick={() => setRole(r)} style={{ marginRight: 6, fontWeight: role === r ? "bold" : "normal" }}>
                {r}
              </button>
            ))}
          </div>
          {role === "admin" && <p style={{ color: "crimson" }}>Admin Panel</p>}
          {role === "user"  && <p style={{ color: "steelblue" }}>User Dashboard</p>}
          {role === "guest" && <p style={{ color: "gray" }}>Guest View</p>}
        </div>
      </section>

      <section>
        <h3>5. Switch with Helper Function</h3>
        <div className="card">
          {renderStatus()}
          <div style={{ marginTop: 8 }}>
            {["idle", "loading", "success", "error"].map(s => (
              <button key={s} onClick={() => setStatus(s)} style={{ marginRight: 6 }}>{s}</button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConditionalRenderingLesson;
