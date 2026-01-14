import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function StyledBox({ children }: Props) {
  return (
    <div className="p-6 rounded-lg shadow whitespace-pre-wrap bg-white font-mono text-sm leading-relaxed">
      {children}
    </div>
  );
}
