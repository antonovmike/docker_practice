import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function StyledBox({ children }: Props) {
  return (
    <div className="p-6 rounded-lg whitespace-pre-wrap bg-[#282828ff] leading-relaxed shadow-[0_4px_6px_0_#000000ff]">
      {children}
    </div>
  );
}
