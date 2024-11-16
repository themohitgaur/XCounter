import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  );
}


export default App;
