import React from "react";
import Button from "../components/Button";

export default function Footer() {
  const footerLinks = [
    {
      title: "SUPPORT",
      links: ["FAQ", "USER GUIDE", "TESTIMONIAL", "CUSTOMER"],
    },
    {
      title: "LINKS",
      links: ["ABOUT US", "STORIES", "PROJECTS", "BLOG"],
    },
    {
      title: "SERVICES",
      links: ["HOME GARDEN", "PLANT SELECTION", "HARDSCAPING", "PUBLIC GARDEN"],
    },
  ];

  return (
    <footer className="flex flex-col gap-l w-full bg-[var(--surface-color-primary)] py-[var(--size-l)] px-[var(--padding-xl)]">
      {/* div du haut */}
      <div className="flex justify-between gap-2xl">
        {/* div du haut à gauche */}
        <div className="flex-1 flex flex-col gap-l">
          {/* Bloc logo + texte */}
          <div className="flex items-center gap-s max-w-[400px]">
            <span className="div-title font-light text-[var(--color-primary)]">
              leaflife
            </span>
            <div className="bg-[var(--color-primary)] w-[3px] h-full"></div>
            <span className="text-[var(--text-color-tertiary)] font-medium text-2xl">
              Stay up to date with our latest project and gardening tips.
            </span>
          </div>
          {/* Champ email + bouton */}
          <div className="flex items-center bg-[var(--surface-color-secondary)] h-[100px] p-[var(--padding-s)] ">
            <input
              type="email"
              placeholder="Enter your email address....."
              className="flex-1 bg-[var(--surface-color-secondary)] text-[var(--color-primary)] border-none placeholder:text-[var(--color-primary)]"
            />
            <Button variant="arrow" />
          </div>
        </div>

        {/* div du haut à droite */}
        <div className="flex-1 flex justify-between">
          {footerLinks.map((col) => (
            <div
              key={col.title}
              className="flex flex-col justify-between gap-s"
            >
              <p className="font-semibold">{col.title} </p>
              <ul className="flex-1 flex flex-col justify-between text-[var(--color-primary)] list-none gap-s">
                {col.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="border-t border-[var(--color-primary)] my-6" />

      {/* div du bas */}
      <div className="flex justify-between items-center text-[var(--color-primary)]">
        <span>FLORIAN CHERUBIN 2025. ALL RIGHTS RESERVED. ©</span>
        <div className="flex gap-s">
          <span>PRIVACY POLICY</span>
          <div className="bg-[var(--color-primary)] w-[3px] h-full"></div>
          <span>TERMS & CONDITIONS</span>
        </div>
      </div>
    </footer>
  );
}
