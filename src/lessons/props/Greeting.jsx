const Greeting = ({ name, age }) => {
  return (
    <div className="card">
      <p>Hello, <strong>{name}</strong>!</p>
      <p>You are {age} years old.</p>
    </div>
  );
};

export default Greeting;
