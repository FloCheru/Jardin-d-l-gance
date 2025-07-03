import React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import backGroundHomePage from "../assets/homepage/background-homepage.jpg";
import "./Services.css";

import imgService1 from "../assets/servicesPage/imgService1.jpg";
import imgService2 from "../assets/servicesPage/imgService2.jpg";
import imgService3 from "../assets/servicesPage/imgService3.jpg";
import imgService4 from "../assets/servicesPage/imgService4.jpg";
import imgService5 from "../assets/servicesPage/imgService5.jpg";
import imgService6 from "../assets/servicesPage/imgService6.jpg";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "CONCEPTION DE JARDIN",
      description:
        "Créer l'espace jardin parfait. Nous concevons un jardin qui correspond à votre style de vie et valorise la beauté de votre propriété.",
      image: imgService1,
    },
    {
      id: 2,
      title: "SÉLECTION DE PLANTES",
      description:
        "Choisir la végétation idéale pour votre oasis. Nos experts sélectionnent les bonnes plantes, garantissant qu'elles prospèrent dans les conditions uniques de votre jardin.",
      image: imgService2,
    },
    {
      id: 3,
      title: "AMÉNAGEMENT PAYSAGER",
      description:
        "Structures durables pour votre paysage. Nous installons terrasses, allées et murs de soutènement pour améliorer la fonctionnalité de votre extérieur.",
      image: imgService3,
    },
    {
      id: 4,
      title: "ENTRETIEN DE JARDIN",
      description:
        "Préserver l'attrait de votre jardin. Nous offrons des services d'entretien continu pour garantir que votre jardin garde son meilleur aspect toute l'année.",
      image: imgService4,
    },
    {
      id: 5,
      title: "INSTALLATION AQUATIQUE",
      description:
        "Améliorer la sérénité de votre jardin avec des éléments aquatiques captivants. Nous concevons et installons des bassins sur mesure pour le confort apaisant de votre espace extérieur.",
      image: imgService5,
    },
    {
      id: 6,
      title: "IRRIGATION DE JARDIN",
      description:
        "Gardez votre jardin vibrant toute l'année. Nos systèmes d'irrigation garantissent que votre jardin reçoit la quantité parfaite d'eau.",
      image: imgService6,
    },
  ];

  return (
    <div>
      {/* Section hero avec image de fond */}
      <Container
        variant="image"
        backgroundImage={backGroundHomePage}
        isTopPage
        fullHeight={false}
      >
        <div className="hero-container">
          <Navbar isOnImage />

          {/* Titre principal centré */}
          <div className="services-hero-content">
            <h1 className="services-hero-title">NOS SERVICES</h1>
          </div>

          {/* Espace pour pousser le contenu vers le centre */}
          <div></div>
        </div>
      </Container>

      {/* Section services */}
      <Container variant="surface-primary" fullHeight={false}>
        <div className="services-grid-section">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                  <div className="service-overlay"></div>

                  {/* Icône flèche */}
                  <div className="service-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
}
