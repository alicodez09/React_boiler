import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h4>Counter</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: 8 }}>-</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 8 }}>Reset</button>
    </div>
  );
};

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="card">
      <h4>Toggle</h4>
      <p>Light is: <strong>{isOn ? "ON" : "OFF"}</strong></p>
      <button onClick={() => setIsOn(prev => !prev)}>Toggle</button>
    </div>
  );
};

const TextInput = () => {
  const [text, setText] = useState("");

  return (
    <div className="card">
      <h4>Text Input</h4>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: <strong>{text}</strong></p>
      <button onClick={() => setText("")}>Clear</button>
    </div>
  );
};

const ObjectState = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <h4>Object State</h4>
      <input name="name" value={user.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={user.email} onChange={handleChange} placeholder="Email" style={{ marginLeft: 8 }} />
      <p>Name: {user.name} | Email: {user.email}</p>
    </div>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState(["Learn React"]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setInput("");
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <h4>Array State — Todo List</h4>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="New todo..." />
      <button onClick={addTodo} style={{ marginLeft: 8 }}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo} <button onClick={() => removeTodo(i)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const UseStateLesson = () => {
  return (
    <div className="lesson">
      <h2>Lesson 3: useState</h2>

      <section>
        <h3>1. Number State</h3>
        <Counter />
      </section>

      <section>
        <h3>2. Boolean State</h3>
        <Toggle />
      </section>

      <section>
        <h3>3. String State</h3>
        <TextInput />
      </section>

      <section>
        <h3>4. Object State</h3>
        <ObjectState />
      </section>

      <section>
        <h3>5. Array State</h3>
        <TodoList />
      </section>
    </div>
  );
};

export default UseStateLesson;
