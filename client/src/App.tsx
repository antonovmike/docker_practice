import { useEffect, useState } from "react";
import StyledBox from "./components/StyledBox";
import StyledHeading from "./components/StyledHeading";

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
      <div className="min-h-screen flex items-center justify-center bg-[#353535ff]">
        <StyledBox>
          <StyledHeading>Greetings</StyledHeading>
          <p className="text-lg">{message}</p>
          <p className="text-lg">TEST</p>
        </StyledBox>
      </div>
    </>
  );
}
