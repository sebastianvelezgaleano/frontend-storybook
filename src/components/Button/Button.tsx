import React, { forwardRef, type ForwardedRef } from "react";
import "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl" | "full";
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button = forwardRef(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      isDisabled = false,
      leftIcon,
      rightIcon,
      className = "",
      children,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const baseClasses = [
      "btn",
      `btn-${variant}`,
      `btn-${size}`,
      isLoading && "btn-loading",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={isDisabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="btn-loader" aria-hidden="true">
            ⟳
          </span>
        ) : (
          <>
            {leftIcon && (
              <span className="btn-icon btn-icon-left">{leftIcon}</span>
            )}
            <span className="btn-content">{children}</span>
            {rightIcon && (
              <span className="btn-icon btn-icon-right">{rightIcon}</span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
