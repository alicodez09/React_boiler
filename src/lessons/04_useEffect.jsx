import { useState, useEffect } from "react";

const EveryRender = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Rendered! count =", count);
  });

  return (
    <div className="card">
      <h4>Runs on every render</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment (watch console)</button>
    </div>
  );
};

const OnMount = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    setTimeout(() => setMessage("Data loaded!"), 1500);
  }, []);

  return (
    <div className="card">
      <h4>Runs once on mount</h4>
      <p>{message}</p>
    </div>
  );
};

const OnDependencyChange = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (!query) { setResult(""); return; }
    setResult(`Searching for: "${query}"...`);
  }, [query]);

  return (
    <div className="card">
      <h4>Runs when dependency changes</h4>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type to search..." />
      <p>{result}</p>
    </div>
  );
};

const CleanupTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="card">
      <h4>Cleanup function</h4>
      <p>Seconds: {seconds}</p>
      <button onClick={() => setRunning(r => !r)}>{running ? "Pause" : "Start"}</button>
      <button onClick={() => { setSeconds(0); setRunning(false); }} style={{ marginLeft: 8 }}>Reset</button>
    </div>
  );
};

const FetchData = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => { setPost(data); setLoading(false); });
  }, [id]);

  return (
    <div className="card">
      <h4>Fetch Data</h4>
      <div>
        {[1, 2, 3].map(n => (
          <button key={n} onClick={() => setId(n)} style={{ marginRight: 6, fontWeight: id === n ? "bold" : "normal" }}>
            Post {n}
          </button>
        ))}
      </div>
      {loading ? <p>Loading...</p> : (
        <div>
          <p><strong>{post?.title}</strong></p>
          <p>{post?.body?.slice(0, 80)}...</p>
        </div>
      )}
    </div>
  );
};

const UseEffectLesson = () => {
  return (
    <div className="lesson">
      <h2>Lesson 4: useEffect</h2>

      <section>
        <h3>1. No dependency — every render</h3>
        <EveryRender />
      </section>

      <section>
        <h3>2. Empty [] — once on mount</h3>
        <OnMount />
      </section>

      <section>
        <h3>3. [dep] — when dependency changes</h3>
        <OnDependencyChange />
      </section>

      <section>
        <h3>4. Cleanup — stop interval</h3>
        <CleanupTimer />
      </section>

      <section>
        <h3>5. Fetching data</h3>
        <FetchData />
      </section>
    </div>
  );
};

export default UseEffectLesson;
