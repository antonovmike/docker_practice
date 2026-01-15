import type { ReactNode } from "react";

export default function StyledParagraph({ children }: { children: ReactNode }) {
  return <p className="text-[#ebdbb2] font-mono text-sm">{children}</p>;
}
