import { useEffect, useState } from "react";
import "./App.css";

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLinked, setHasLinked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLinked}`);
  }, [hasLinked]);

  return (
    <div
      className="card"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <h2>
        {title} <br /> {count || null}
      </h2>
      <button onClick={() => setHasLinked(!hasLinked)}>
        {hasLinked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};

export default App;
