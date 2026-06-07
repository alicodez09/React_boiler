import { useState } from "react";

const initialUsers = [
  { id: 1, name: "Ali", role: "Admin", active: true },
  { id: 2, name: "Zeeshan", role: "User", active: true },
  { id: 3, name: "John", role: "Editor", active: false },
  { id: 4, name: "Mona", role: "User", active: true },
];

const ListsAndKeysLesson = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");

  const fruits = ["Apple", "Banana", "Cherry", "Date"];

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()),
  );

  const removeUser = (id) =>
    setUsers((prev) => prev.filter((u) => u.id !== id));

  const toggleActive = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, active: !u.active } : u)),
    );
  };

  return (
    <div className="lesson">
      <h2>Lesson 7: Lists & Keys</h2>

      <section>
        <h3>1. Basic List with .map()</h3>
        <div className="card">
          <ul>
            {fruits.map((fruit) => (
              <li key={fruit}>{fruit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h3>2. List of Components</h3>
        <div className="card">
          {initialUsers.map((user) => (
            <div
              key={user.id}
              style={{
                padding: "6px 10px",
                margin: "4px 0",
                background: "#f0f0f0",
                borderRadius: 4,
              }}
            >
              <strong>{user.name}</strong> — {user.role}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>3. Search & Filter</h3>
        <div className="card">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name..."
            style={{ marginBottom: 10 }}
          />
          {filtered.map((user) => (
            <div
              key={user.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "6px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <span>
                <strong>{user.name}</strong> — {user.role} —{" "}
                {user.active ? "Active" : "Inactive"}
              </span>
              <span>
                <button onClick={() => toggleActive(user.id)}>Toggle</button>
                <button
                  onClick={() => removeUser(user.id)}
                  style={{ marginLeft: 6, color: "red" }}
                >
                  Remove
                </button>
              </span>
            </div>
          ))}
          {filtered.length === 0 && <p>No users found.</p>}
        </div>
      </section>

      <section>
        <h3>4. Nested Lists</h3>
        <div className="card">
          {[
            { category: "Frontend", items: ["React", "CSS", "HTML"] },
            { category: "Backend", items: ["Node.js", "Express", "SQL"] },
          ].map((group) => (
            <div key={group.category}>
              <strong>{group.category}</strong>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ListsAndKeysLesson;
