import React from "react";
import PropTypes from "prop-types";
import { MoveRight } from "lucide-react";

// Flèche SVG orientée à 34.46

export default function Button({ variant, children, ...props }) {
  if (variant === "primary") {
    return (
      <button className="button button-primary" {...props}>
        {children}
      </button>
    );
  }
  if (variant === "secondary") {
    return (
      <button className="button button-secondary" {...props}>
        {children}
      </button>
    );
  }
  if (variant === "tertiary") {
    return (
      <button className="button button-tertiary" {...props}>
        {children}
      </button>
    );
  }

  if (variant === "arrow") {
    return (
      <button className="button-l button-arrow" {...props}>
        <MoveRight />
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
