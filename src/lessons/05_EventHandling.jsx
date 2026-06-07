import { useState } from "react";

const EventHandlingLesson = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [hovered, setHovered] = useState(false);
  const [key, setKey] = useState("");
  const [submitted, setSubmitted] = useState("");

  return (
    <div className="lesson">
      <h2>Lesson 5: Event Handling</h2>

      <section>
        <h3>1. onClick</h3>
        <div className="card">
          <button onClick={() => setCount(c => c + 1)}>Click Me</button>
          <p>Clicked {count} times</p>
        </div>
      </section>

      <section>
        <h3>2. Passing Arguments</h3>
        <div className="card">
          {["red", "green", "blue"].map(color => (
            <button
              key={color}
              onClick={() => alert(`You clicked: ${color}`)}
              style={{ marginRight: 8, background: color, color: "white" }}
            >
              {color}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h3>3. onChange</h3>
        <div className="card">
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here..." />
          <p>Value: <strong>{text}</strong></p>
        </div>
      </section>

      <section>
        <h3>4. onMouseEnter / onMouseLeave</h3>
        <div className="card">
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ padding: 20, background: hovered ? "gold" : "lightgray", borderRadius: 6, textAlign: "center", cursor: "pointer" }}
          >
            {hovered ? "Hovering!" : "Hover over me"}
          </div>
        </div>
      </section>

      <section>
        <h3>5. onKeyDown</h3>
        <div className="card">
          <input onKeyDown={(e) => setKey(e.key)} placeholder="Press any key..." />
          <p>Last key: <strong>{key}</strong></p>
        </div>
      </section>

      <section>
        <h3>6. onSubmit with e.preventDefault()</h3>
        <div className="card">
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(text); }}>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Your name" />
            <button type="submit" style={{ marginLeft: 8 }}>Submit</button>
          </form>
          {submitted && <p>Submitted: <strong>{submitted}</strong></p>}
        </div>
      </section>
    </div>
  );
};

export default EventHandlingLesson;
