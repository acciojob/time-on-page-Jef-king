
import React from "react";
import './../styles/App.css';
import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>You've been on this page for {count} seconds.</p>
    </div>
  );
};

export default App;
