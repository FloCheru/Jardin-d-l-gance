import backGroundHomePage from "../assets/homepage/background-homepage.jpg";
import Container from "../components/Container";
import Button from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";
import { MapPin, Flame, HeartHandshake, Sprout, Palette } from "lucide-react";
import img2 from "../assets/aboutUsPage/img2.jpg";
import img3 from "../assets/aboutUsPage/img3.jpg";
import Footer from "../components/Footer/Footer";
import "./Home.css";
import teamImg1 from "../assets/homepage/team-img1.jpg";
import teamImg2 from "../assets/homepage/team-img2.jpg";
import teamImg3 from "../assets/homepage/team-img3.jpg";
import teamImg4 from "../assets/homepage/team-img4.jpg";

import projectImg1 from "../assets/homepage/project-img1.jpg";
import projectImg2 from "../assets/homepage/project-img2.jpg";
import projectImg3 from "../assets/homepage/project-img3.jpg";
import projectImg4 from "../assets/homepage/project-img4.jpg";

export default function Home() {
  const gridValues = [
    {
      icon: <Flame color="red" />, // Remplace par un import SVG ou un composant si besoin
      title: "Passion dans chaque projet ",
      text: "Nous sommes profondément passionnés par la création d'espaces verts durables et harmonieux pour nos clients.",
    },
    {
      icon: <HeartHandshake color="green" />,
      title: "Collaboration au sommet",
      text: "Nous concrétisons vos rêves d'aménagement en combinant vos idées avec nos 15+ années d'expertise en conception paysagère.",
    },
    {
      icon: <Sprout color="green" />,
      title: "Durabilité assurée",
      text: "Nous privilégions le respect de la nature, un jardin à la fois, pour que vous puissiez profiter durablement de la beauté de votre aménagement paysager.",
    },
    {
      icon: <Palette color="yellow" />,
      title: "Créativité libérée",
      text: "Nous veillons à vous proposer des conceptions innovantes qui se démarquent et font de votre jardin un espace unique.",
    },
  ];

  const team = [
    {
      name: "Florian Dubois",
      role: "Paysagiste principal",
      photo: teamImg1,
    },
    {
      name: "Sophie Martin",
      role: "Architecte paysagiste",
      photo: teamImg2,
    },
    {
      name: "Lucas Morel",
      role: "Chef de projet",
      photo: teamImg3,
    },
    {
      name: "Emma Leroy",
      role: "Assistante paysagiste",
      photo: teamImg4,
    },
  ];

  const projects = [
    {
      title: "Verger méditerranéen",
      image: projectImg1,
    },
    {
      title: "Jardin anglais moderne",
      image: projectImg2,
    },
    {
      title: "Villa contemporaine verte",
      image: projectImg3,
    },
    {
      title: "Terrasse fleurie méditerranéenne",
      image: projectImg4,
    },
  ];
  return (
    <div>
      <Container variant="image" backgroundImage={backGroundHomePage}>
        {/* Contenu principal centré */}
        <div className="hero-container">
          <Navbar />
          <div className="hero-main">
            <div className="hero-content">
              <h1 className="hero-title">
                <span className="hero-title-white">CRÉEZ VOTRE</span>
                <br />
                <span className="hero-title-lightgray">JARDIN DE RÊVE</span>
              </h1>
              <p className="hero-desc">
                Créons ensemble des jardins d'exception avec passion, créativité
                et durabilité depuis plus de 15 ans grâce à notre équipe
                expérimentée d'architectes paysagistes et de jardiniers.
              </p>
            </div>

            <div className="satisfied-clients">
              <span className="clients-number">500+</span>
              <span className="clients-text">Clients Satisfaits</span>
              <div className="clients-circles">
                <div className="satisfied-clients-circle"></div>
                <div className="satisfied-clients-circle"></div>
                <div className="satisfied-clients-circle"></div>
              </div>
            </div>
          </div>

          <div className="hero-buttons">
            <div className="buttons-group">
              <Button variant="secondary">Commencer</Button>
              <Button variant="tertiary">Découvrir nos Projets</Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Seconde div */}
      <Container variant="surface-primary">
        <div className="about-section">
          <div className="text-container">
            <h2 className="text-title">
              CRÉATEURS D'ESPACES VERTS D'EXCEPTION DEPUIS PLUS DE 15ANS
            </h2>
            <p className="text-description">
              Passionnés par l'art du paysage, nous transformons vos extérieurs
              en véritables havres de paix. Notre équipe d'experts allie
              créativité, savoir-faire technique et respect de l'environnement
              pour donner vie à vos projets les plus ambitieux.
            </p>
          </div>
          <div className="images-container">
            <div className="image-wrapper-small">
              <img
                src={backGroundHomePage}
                alt="Jardin paysager"
                className="img-cover"
              />
            </div>
            <div className="image-wrapper-large">
              <img src={img2} alt="Jardin paysager" className="img-cover" />
            </div>
          </div>
        </div>
      </Container>

      {/* Troisième div */}
      <Container variant="surface-secondary">
        <h1 className="contact-title">COMMENT NOUS TRAVAILLONS</h1>
        <div className="work-content">
          <div className="work-image-container">
            <img src={img3} alt="Jardin paysager" className="img-cover" />
          </div>

          <div className="work-grid">
            {gridValues.map((item, idx) => (
              <div key={idx} className="work-item">
                <div className="work-icon">
                  <span>{item.icon}</span>
                </div>
                <h3 className="work-item-title">{item.title}</h3>
                <p className="work-item-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Quatrième div */}
      <Container variant="surface-primary">
        <h2 className="team-section-title">NOTRE EQUIPE</h2>
        <div className="team-grid">
          {team.map((item, idx) => (
            <div key={idx} className="team-member">
              <img src={item.photo} alt={item.name} className="team-photo" />
              <h3 className="team-name">{item.name}</h3>
              <p className="team-role">{item.role}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Cinquième div */}
      <Container variant="surface-secondary">
        <h1 className="contact-title">NOS TRAVAUX</h1>
        <div className="projects-grid">
          {projects.map((item, idx) => (
            <div key={idx} className="project-item">
              <img
                src={item.image}
                alt={item.title}
                className="project-image"
              />
              <p className="project-title">{item.title}</p>
            </div>
          ))}
        </div>
      </Container>

      {/*div contact */}
      {/* Contact section */}
      <Container variant="image" backgroundImage={backGroundHomePage}>
        <div className="contact-content">
          <h1 className="contact-title">PRÊT À TRANSFORMER VOTRE JARDIN ?</h1>
          <Button variant="secondary">Contactez-nous</Button>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
