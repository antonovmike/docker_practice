import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { baseParagraphClasses } from "./styles";

export default function StyledLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className={`text-blue-400 ${baseParagraphClasses} hover:underline`}
    >
      {children}
    </Link>
  );
}
