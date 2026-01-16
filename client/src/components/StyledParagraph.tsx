import type { ReactNode } from "react";
import { baseParagraphClasses } from "./styles";

export default function StyledParagraph({ children }: { children: ReactNode }) {
  return <p className={`text-[#ebdbb2] ${baseParagraphClasses}`}>{children}</p>;
}
