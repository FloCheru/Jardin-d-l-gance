import React from "react";
import PropTypes from "prop-types";
import { MoveRight } from "lucide-react";

// Flèche SVG orientée à 34.46

export default function Button({
  variant,
  children,
  className = "",
  ...props
}) {
  if (variant === "primary") {
    return (
      <button className={`button button-primary ${className}`} {...props}>
        {children}
      </button>
    );
  }
  if (variant === "secondary") {
    return (
      <button className={`button button-secondary ${className}`} {...props}>
        {children}
      </button>
    );
  }
  if (variant === "tertiary") {
    return (
      <button className={`button button-tertiary ${className}`} {...props}>
        {children}
      </button>
    );
  }

  if (variant === "arrow") {
    return (
      <button className={`button-l button-arrow ${className}`} {...props}>
        <MoveRight />
      </button>
    );
  }
  // Par défaut, bouton classique
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "arrow"]),
  children: PropTypes.node,
};
