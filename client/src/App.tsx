import { useEffect, useState } from "react";
import StyledBox from "./components/StyledBox";
import StyledPage from "./components/StyledPage";
import StyledHeading from "./components/StyledHeading";
import StyledParagraph from "./components/StyledParagraph";

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
      <StyledPage>
        <StyledBox>
          <StyledHeading>Greetings</StyledHeading>
          <StyledParagraph>{message}</StyledParagraph>
        </StyledBox>
      </StyledPage>
    </>
  );
}
