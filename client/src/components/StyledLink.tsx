import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function StyledLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className="text-blue-400 font-mono text-sm hover:underline">
      {children}
    </Link>
  );
}
