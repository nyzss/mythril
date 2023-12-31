import { forwardRef } from "react";

const Button = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
  }
>(({ children, variant = "primary", ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`px-6 py-2 rounded-md shadow-md drop-shadow-shadow  dark:drop-shadow-glow disabled:opacity-60 hover:scale-105 transition-transform duration-300 ${
        variant === "primary"
          ? "bg-primarydark text-neutral-100 dark:bg-neutral-100 hover:dark:bg-white dark:text-primarydark"
          : "bg-mandy-500 text-primarydark dark:bg-rose-300 dark:hover:bg-rose-400 dark:text-primarydark"
      } ${props.className}`}
    >
      {children}
    </button>
  );
});

export default Button;
