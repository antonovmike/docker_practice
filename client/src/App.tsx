import { useEffect, useState } from "react";
import StyledBox from "./components/StyledBox";

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
        <StyledBox>
          <h1 className="text-2xl font-bold mb-2">Greetings</h1>
          <p className="text-lg text-blue-600">{message}</p>
          <p className="text-lg text-blue-600">TEST</p>
        </StyledBox>
      </div>
    </>
  );
}
