import backGroundHomePage from "../assets/homepage/background-homepage.jpg";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="container relative overflow-hidden border-8 border-red-500">
      {/* Image de fond */}
      <img
        src={backGroundHomePage}
        alt="Jardin paysager"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay sombre pour lisibilité */}
      <div className="background-overlay" />

      {/* Contenu principal centré */}
      <div className="relative z-20 flex flex-col justify-between gap-[var(--container-padding)] w-full h-full ">
        <Navbar />
        {/* Bloc Titre, description et 500+ Satisfied Clients */}
        <div className="flex justify-between items-start">
          {/* Titre et description */}
          <div className="flex flex-col justify-center items-start w-[65%]">
            <h1 className="hero-title mb-6">
              <span className="hero-title-white">CREATE YOUR</span>
              <br />
              <span className="hero-title-lightgray ">DREAM GARDEN</span>
            </h1>
            <p className="hero-desc w-full">
              Create dream gardens with passion, creativity and sustainability
              for over a decade with our experienced landscape artists and
              gardener teams.
            </p>
          </div>

          {/* Bloc "500+ Satisfied Clients" */}
          <div className="flex flex-col items-start gap-2 satisfied-clients p-[var(--button-padding)]">
            <span className="font-semibold text-[var(--color-secondary)]">
              500+
            </span>
            <span className="text-[var(--color-secondary)] font-[var(--font-weight-regular)] ">
              Satisfied Clients
            </span>
          </div>
        </div>
        {/* Bloc boutons + Hachioji Garden */}
        <div className="flex justify-between items-start">
          <div className="flex gap-[20px]">
            <Button variant="secondary">Get Started</Button>
            <Button variant="tertiary">Explore Projects</Button>
          </div>
          <div className="z-21 relative flex flex-col items-center gap-[20px] p-[var(--container-padding)] w-[40%] bg-white">
            {/* Overlay sombre pour lisibilité */}
            <div className="background-overlay background-overlay-hachioji" />
            <div className=" flex w-full justify-between items-center gap-2">
              <MapPin color="var(--color-secondary)" />
              <Button variant="arrow" />
            </div>
            <div>
              <div className="font-semibold text-[var(--color-secondary)]">
                Hachioji Garden
              </div>
              <div className="font-normal text-[var(--color-secondary)]">
                We design Hachioji Garden as a part of our new Landscape Design
                Commission in the country
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
