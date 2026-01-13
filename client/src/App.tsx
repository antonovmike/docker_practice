import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState<string>("...");

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_BASE ?? "";
    fetch(`${apiBase}/greetings`)
      .then((res) => res.text())
      .then(setMessage)
      .catch(() => setMessage("Error"));
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-6 rounded-lg shadow bg-white">
          <h1 className="text-2xl font-bold mb-2">Greetings</h1>
          <p className="text-lg text-blue-600">{message}</p>
          <p className="text-lg text-blue-600">TEST</p>
        </div>
      </div>
      {/* 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}
