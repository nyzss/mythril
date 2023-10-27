import React from "react";

const Button = ({
  children,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) => {
  return (
    <button
      {...props}
      className={`px-6 py-2 rounded-md shadow-md drop-shadow-shadow  dark:drop-shadow-glow  ${
        variant === "primary"
          ? "bg-primarydark text-neutral-100 dark:bg-neutral-100 dark:text-primarydark"
          : "bg-mandy-500 text-primarydark dark:bg-mandy-300 dark:text-primarydark"
      } ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
