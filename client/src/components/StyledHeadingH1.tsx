import type { ReactNode } from "react";

export default function StyledHeading({ children }: { children: ReactNode }) {
  return <h1 className="text-[#d79921] text-3xl font-bold mb-2">{children}</h1>;
}
