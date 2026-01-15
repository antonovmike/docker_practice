import type { ReactNode } from "react";

export default function StyledHeading({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#353535ff]">
      {children}
    </div>
  );
}
