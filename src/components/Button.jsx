import React from "react";
import PropTypes from "prop-types";

// Flèche SVG orientée à 34.46°
function ArrowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "rotate(34.46deg)" }}
    >
      <path
        d="M14 42L42 14M42 14H18M42 14V38"
        stroke="#202E13"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Button({ variant, children, ...props }) {
  if (variant === "filled") {
    return (
      <button className="button-filled" {...props}>
        {children}
      </button>
    );
  }
  if (variant === "underline") {
    return (
      <button className="button-underline" {...props}>
        {children}
      </button>
    );
  }
  if (variant === "filled-dark") {
    return (
      <button className="button-filled-dark" {...props}>
        {children}
      </button>
    );
  }
  if (variant === "arrow") {
    return (
      <button className="button-arrow" {...props}>
        <ArrowIcon />
      </button>
    );
  }
  // Par défaut, bouton classique
  return <button {...props}>{children}</button>;
}

Button.propTypes = {
  variant: PropTypes.oneOf(["filled", "underline", "filled-dark", "arrow"]),
  children: PropTypes.node,
};
