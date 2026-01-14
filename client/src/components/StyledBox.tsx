import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function StyledBox({ children }: Props) {
  return (
    <div className="p-6 rounded-lg whitespace-pre-wrap bg-neutral-900 text-yellow-200 font-mono text-sm leading-relaxed shadow-[0_4px_6px_0_#000000ff]">
      {children}
    </div>
  );
}
