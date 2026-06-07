import { useState } from "react";

const FormsLesson = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    bio: "",
    gender: "",
    role: "user",
    subscribe: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.username.trim()) e.username = "Username is required";
    else if (form.username.length < 3) e.username = "Min 3 characters";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6) e.password = "Min 6 characters";
    if (!form.gender) e.gender = "Please select a gender";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(form);
  };

  const handleReset = () => {
    setForm({ username: "", password: "", bio: "", gender: "", role: "user", subscribe: false });
    setErrors({});
    setSubmitted(null);
  };

  return (
    <div className="lesson">
      <h2>Lesson 8: Forms</h2>

      <section>
        <h3>Controlled Form with Validation</h3>
        <div className="card">
          <form onSubmit={handleSubmit} noValidate>

            <div className="form-group">
              <label>Username</label>
              <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Enter username" />
              {errors.username && <span className="error">{errors.username}</span>}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter password" />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label>Bio</label>
              <textarea name="bio" value={form.bio} onChange={handleChange} placeholder="Tell us about yourself..." rows={3} />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <div>
                {["Male", "Female", "Other"].map(g => (
                  <label key={g} style={{ marginRight: 16 }}>
                    <input type="radio" name="gender" value={g} checked={form.gender === g} onChange={handleChange} /> {g}
                  </label>
                ))}
              </div>
              {errors.gender && <span className="error">{errors.gender}</span>}
            </div>

            <div className="form-group">
              <label>Role</label>
              <select name="role" value={form.role} onChange={handleChange}>
                <option value="user">User</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                <input type="checkbox" name="subscribe" checked={form.subscribe} onChange={handleChange} /> Subscribe to newsletter
              </label>
            </div>

            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset} style={{ marginLeft: 8 }}>Reset</button>
          </form>

          <div style={{ marginTop: 16, background: "#f9f9f9", padding: 12, borderRadius: 6 }}>
            <strong>Live State:</strong>
            <pre style={{ fontSize: 13 }}>{JSON.stringify(form, null, 2)}</pre>
          </div>

          {submitted && (
            <div style={{ marginTop: 12, background: "#e6ffe6", padding: 12, borderRadius: 6 }}>
              <strong>Submitted!</strong>
              <pre style={{ fontSize: 13 }}>{JSON.stringify(submitted, null, 2)}</pre>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FormsLesson;
