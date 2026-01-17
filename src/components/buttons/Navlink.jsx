"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ children, href }) => {
  const path = usePathname();

  const isActive =
    href === "/"
      ? path === "/"
      : path.startsWith(href);

  return (
    <Link
      href={href}
      className={`font-medium text-lg ${
        isActive ? "text-primary" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Navlink;
