import React from "react";
import Button from "../Button/Button";
import "./Footer.css";

export default function Footer() {
  const footerLinks = [
    {
      title: "SUPPORT",
      links: ["FAQ", "GUIDE UTILISATEUR", "TÉMOIGNAGES", "CLIENTS"],
    },
    {
      title: "LIENS",
      links: ["À PROPOS", "HISTOIRES", "PROJETS", "BLOG"],
    },
    {
      title: "SERVICES",
      links: [
        "JARDIN PRIVÉ",
        "SÉLECTION PLANTES",
        "AMÉNAGEMENT",
        "JARDIN PUBLIC",
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="footer-logo">leaflife</span>
            <div className="footer-divider"></div>
            <span className="footer-tagline">
              Restez informé de nos derniers projets et conseils de jardinage.
            </span>
          </div>

          <div className="footer-email">
            <input
              type="email"
              placeholder="Entrez votre adresse email....."
              className="footer-email-input"
            />
            <Button variant="arrow" />
          </div>
        </div>

        <div className="footer-right">
          {footerLinks.map((col) => (
            <div key={col.title} className="footer-column">
              <p className="footer-column-title">{col.title}</p>
              <ul className="footer-links">
                {col.links.map((link) => (
                  <li key={link} className="footer-link">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-separator" />

      <div className="footer-bottom">
        <span className="footer-copyright">
          FLORIAN CHERUBIN 2025. TOUS DROITS RÉSERVÉS. ©
        </span>
        <div className="footer-legal">
          <span className="footer-legal-link">
            POLITIQUE DE CONFIDENTIALITÉ
          </span>
          <div className="footer-legal-divider"></div>
          <span className="footer-legal-link">CONDITIONS GÉNÉRALES</span>
        </div>
      </div>
    </footer>
  );
}
