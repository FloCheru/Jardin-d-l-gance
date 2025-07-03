import React from "react";
import "./Container.css";

const Container = ({
  children,
  variant = "surface-primary",
  backgroundImage = null,
  isTopPage = false,
  fullHeight = true,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`container-base container-${variant} ${
        isTopPage ? "container-top-page" : ""
      } ${!fullHeight ? "container-auto-height" : ""} ${className}`}
      {...props}
    >
      {/* Image de fond */}
      {variant === "image" && backgroundImage && (
        <img
          src={backgroundImage}
          alt="Background"
          className="container-background-image"
        />
      )}

      {/* Overlay */}
      {variant === "image" && <div className="container-overlay" />}

      {/* Contenu */}
      <div
        className={`container-content ${
          variant === "image" ? "container-content-image" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
