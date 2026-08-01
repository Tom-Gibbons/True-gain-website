import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "glass";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variantClass = {
    primary: "button buttonGold",
    secondary: "button buttonOutline",
    glass: "button buttonGlass",
  }[variant];

  return (
    <a className={`${variantClass} ${className}`.trim()} href={href}>
      {children}
    </a>
  );
}
