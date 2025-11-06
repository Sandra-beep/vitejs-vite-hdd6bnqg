import { useState } from 'react';

export function Salary() {
    const [count, setCount] = useState(10);
    return (
        <>
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
    )
};