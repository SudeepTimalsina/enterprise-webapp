"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, className, appName, onClick, type }: ButtonProps) => {
  return (
    <button
      className={`${className || "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
