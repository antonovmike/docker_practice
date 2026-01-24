import { useEffect, useState } from "react";
import StyledBox from "./components/StyledBox";
import StyledPage from "./components/StyledPage";
import StyledHeadingH1 from "./components/StyledHeadingH1";
import StyledHeadingH2 from "./components/StyledHeadingH2";
import StyledParagraph from "./components/StyledParagraph";
import StyledLink from "./components/StyledLink";
import StyledTabs from "./components/StyledTabs";

export default function App() {
  const [message, setMessage] = useState<string>("...");

  const tabs = [
    { label: "Profile", href: "#/profile" },
    { label: "Dashboard", href: "#/dashboard", active: true },
    { label: "Settings", href: "#/settings" },
    { label: "Contacts", href: "#/contacts" },
    { label: "Disabled", href: "#", disabled: true },
  ];

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
          <StyledTabs items={tabs} />
          <StyledHeadingH1>Greetings</StyledHeadingH1>
          <StyledHeadingH2>Server says:</StyledHeadingH2>
          <StyledParagraph>{message}</StyledParagraph>
          <StyledLink to="/cheatsheet">Go to CheatSheet</StyledLink>
        </StyledBox>
      </StyledPage>
    </>
  );
}
