import type { ReactNode } from "react";

export default function StyledHeading({ children }: { children: ReactNode }) {
  return <h2 className="text-[#9f8039] text-2xl font-bold mb-2">{children}</h2>;
}
