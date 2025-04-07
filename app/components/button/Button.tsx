import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
  children: React.ReactNode;
}

export const Button = ({ variant = "default", children, className, ...props }: ButtonProps) => {
  const baseStyle = "rounded-lg font-medium transition-all duration-200 px-6 py-3";

  const variants = {
    default: "bg-green-600 text-white hover:bg-green-700",
    ghost: "bg-green-100 text-green-600 hover:bg-green-200",
  };

  return (
    <button
      className={classNames(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
