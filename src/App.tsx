import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(10);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Affect your salary!</h1>
      <div className="card">
        <h3>Current salary/h: {count} €</h3>

        {count < 10 && <p>You should change job?</p>}

        <button onClick={() => setCount((count) => count - 1)}>
          Reduce 1€
        </button>
        <button onClick={() => setCount((count) => count + 1)}>Add 1€</button>

        <button onClick={() => setCount((count) => count - 5)}>
          Reduce 5€
        </button>
        <button onClick={() => setCount((count) => count + 5)}>Add 5€</button>
      </div>
    </>
  );
}

export default App;
