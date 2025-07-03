import React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Button from "../components/Button/Button.jsx";
import backGroundHomePage from "../assets/homepage/background-homepage.jpg";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      {/* Section hero avec image de fond */}
      <Container variant="image" backgroundImage={backGroundHomePage} isTopPage>
        <div className="hero-container">
          <Navbar isOnImage />

          {/* Titre principal centré */}
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">NOUS CONTACTER</h1>

            {/* Breadcrumb */}
            <div className="contact-breadcrumb">
              <span>Accueil</span>
              <span>|</span>
              <span>Contact</span>
            </div>
          </div>

          {/* Espace pour pousser le contenu vers le centre */}
          <div></div>
        </div>
      </Container>

      {/* Section formulaire */}
      <Container variant="surface-primary">
        <div className="contact-form-section">
          <div className="contact-form-container">
            {/* Formulaire */}
            <form className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Prénom"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Nom"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-row">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="form-textarea"
                  rows="6"
                  required
                />
              </div>

              <Button variant="primary" className="form-submit-btn">
                Envoyer le message
              </Button>
            </form>

            {/* Informations de contact */}
            <div className="contact-info">
              <div className="contact-info-item">
                <h3 className="contact-info-title">Adresse</h3>
                <p className="contact-info-text">
                  123 Rue des Jardins
                  <br />
                  TOULON
                  <br />
                  FRANCE
                </p>
              </div>

              <div className="contact-info-item">
                <h3 className="contact-info-title">Numéro de téléphone</h3>
                <p className="contact-info-text">+33 4 94 12 34 56</p>
              </div>

              <div className="contact-info-item">
                <h3 className="contact-info-title">Adresse email</h3>
                <p className="contact-info-text">contact@leaflife.fr</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
