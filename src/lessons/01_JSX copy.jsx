const JSXLesson = () => {
  const name = "React Student";
  const age = 25;
  const isLoggedIn = true;

  return (
    <div className="lesson">
      <h2>Lesson 1: JSX Basics</h2>

      <section>
        <h3>1. Embedding JS Expressions</h3>
        <div className="card">
          <p>Hello, {name}!</p>
          <p>Age: {age}</p>
          <p>Math: 5 + 3 = {5 + 3}</p>
          <p>Uppercase: {name.toUpperCase()}</p>
        </div>
      </section>

      <section>
        <h3>2. className (not class)</h3>
        <div className="card">
          <p className="highlight">I have a className of "highlight"</p>
        </div>
      </section>

      <section>
        <h3>3. Self-closing Tags</h3>
        <div className="card">
          <input type="text" placeholder="Self-closing input" />
        </div>
      </section>

      <section>
        <h3>4. Fragments</h3>
        <div className="card">
          <>
            <p>First paragraph inside Fragment</p>
            <p>Second paragraph inside Fragment</p>
          </>
        </div>
      </section>

      <section>
        <h3>5. Ternary Expression</h3>
        <div className="card">
          <p>{isLoggedIn ? "You are logged in" : "Please log in"}</p>
        </div>
      </section>
    </div>
  );
};

export default JSXLesson;
