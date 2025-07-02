import backGroundHomePage from "../assets/homepage/background-homepage.jpg";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { MapPin } from "lucide-react";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="container relative h-screen">
        {/* Image de fond */}
        <img
          src={backGroundHomePage}
          alt="Jardin paysager"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Overlay sombre pour lisibilité */}
        <div className="background-overlay" />
          
      {/* Contenu principal centré */}
      <div className="relative z-20 flex flex-col justify-between gap-[var(--padding-m)] w-full h-full ">
        <Navbar />
        {/* Bloc Titre, description et 500+ Satisfied Clients */}
        <div className="flex justify-between items-start">
          {/* Titre et description */}
          <div className="flex flex-col justify-center items-start w-[65%]">
            <h1 className="hero-title mb-6">
              <span className="hero-title-white">CRÉEZ VOTRE</span>
              <br />
              <span className="hero-title-lightgray ">JARDIN DE RÊVE</span>
            </h1>
            <p className="hero-desc w-full">
              Créons ensemble des jardins d'exception avec passion, créativité
              et durabilité depuis plus de 15 ans grâce à notre équipe
              expérimentée d'architectes paysagistes et de jardiniers.
            </p>
          </div>
          {/* Contenu principal centré */}
          <div className="relative z-20 flex flex-col justify-between gap-[var(--padding-m)] w-full h-full ">
            <Navbar />
            {/* Bloc Titre, description et 500+ Satisfied Clients */}
            <div className="flex justify-between items-start">
              {/* Titre et description */}
              <div className="flex flex-col justify-center items-start w-[65%]">
                <h1 className="hero-title mb-6">
                  <span className="hero-title-white">CRÉEZ VOTRE</span>
                  <br />
                  <span className="hero-title-lightgray ">JARDIN DE RÊVE</span>
                </h1>
                <p className="hero-desc w-full">
                  Créons ensemble des jardins d'exception avec passion,
                  créativité et durabilité depuis plus de 15 ans grâce à notre
                  équipe expérimentée d'architectes paysagistes et de
                  jardiniers.
                </p>
              </div>

              {/* Bloc "500+ Satisfied Clients" */}
              <div className="flex flex-col items-start gap-s satisfied-clients p-[var(--padding-s)]">
                <span className="font-semibold text-[var(--color-secondary)]">
                  500+
                </span>
                <span className="text-[var(--color-secondary)] font-[var(--font-weight-regular)] ">
                  Clients Satisfaits
                </span>
                <div className="flex relative">
                  <div className="satisfied-clients-circle"></div>
                  <div className="satisfied-clients-circle !-translate-x-4"></div>
                  <div className="satisfied-clients-circle !-translate-x-8"></div>
                </div>
              </div>
            </div>
            {/* Bloc boutons + Hachioji Garden */}
            <div className="flex justify-between items-start">
              <div className="flex gap-[20px]">
                <Button variant="secondary">Commencer</Button>
                <Button variant="tertiary">Découvrir nos Projets</Button>
              </div>
              <div>
                <div className="font-semibold text-[var(--color-secondary)]">
                  Jardin Méditerranéen
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-secondary)]">
                    Jardin Méditerranéen
                  </div>
                  <div className="font-normal text-[var(--color-secondary)]">
                    Réalisation complète d'un aménagement paysager contemporain
                    alliant tradition provençale et modernité
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
