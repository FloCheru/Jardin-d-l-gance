import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backGroundHomePage from "../assets/homepage/background-homepage.jpg";
import { Flame, HeartHandshake, Sprout, Palette } from "lucide-react";
import img2 from "../assets/aboutUsPage/img2.jpg";
import img3 from "../assets/aboutUsPage/img3.jpg";

export default function AboutUs() {
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
      photo:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80",
    },
    {
      name: "Sophie Martin",
      role: "Architecte paysagiste",
      photo:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&q=80",
    },
    {
      name: "Lucas Morel",
      role: "Chef de projet",
      photo:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&q=80",
    },
    {
      name: "Emma Leroy",
      role: "Assistante paysagiste",
      photo:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&q=80",
    },
  ];

  const projects = [
    {
      title: "Jardin japonais zen",
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Terrasse urbaine chic",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Allée fleurie",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Espace détente bois",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    },
  ];
  return (
    <div>
      {/* Div du haut */}
      <div className="container relative">
        {/* Image de fond */}
        <img
          src={backGroundHomePage}
          alt="Jardin paysager"
          className="absolute inset-0 img-cover z-0"
        />
        {/* Overlay sombre pour lisibilité */}
        <div className="background-overlay" />

        <div className="relative z-20 flex flex-col justify-between gap-[var(--padding-m)] w-full h-full text-[var(--color-secondary)]">
          <Navbar />
          <h1 className="flex items-center gap-s">
            <span>Accueil</span>
            <div></div>
            <span>A propos</span>
          </h1>
          <h1>A PROPOS</h1>
        </div>
      </div>

      {/* Seconde div */}
      <div className="flex flex-col w-full gap-l bg-[var(--surface-color-primary)] p-[var(--padding-m)]">
        <div className="flex w-1/2 gap-m">
          <h2 className="flex-1 h-full">
            CRÉATEURS D'ESPACES VERTS D'EXCEPTION DEPUIS PLUS DE 15ANS
          </h2>
          <p className="flex-1 text-[var(--text-color-tertiary)] font-size: var(--button-font-size)">
            Passionnés par l'art du paysage, nous transformons vos extérieurs en
            véritables havres de paix. Notre équipe d'experts allie créativité,
            savoir-faire technique et respect de l'environnement pour donner vie
            à vos projets les plus ambitieux.
          </p>
        </div>
        <div className="flex h-[320px] gap-s">
          <div className="w-1/3 h-full overflow-hidden">
            <img
              src={backGroundHomePage}
              alt="Jardin paysager"
              className="img-cover"
            />
          </div>
          <div className="flex-1 h-full overflow-hidden">
            <img src={img2} alt="Jardin paysager" className="img-cover" />
          </div>
        </div>
      </div>

      {/* Troisième div */}
      <div className="flex flex-col gap-l w-full bg-[var(--color-primary)] text-[var(--color-secondary)] p-[var(--padding-m)]">
        <h1>COMMENT NOUS TRAVAILLONS</h1>
        <div className="flex justify-between items-end h-[600px] gap-l ">
          {/* Image */}
          <div className="w-1/2 h-full overflow-hidden">
            <img src={img3} alt="Jardin paysager" className="img-cover" />
          </div>
          {/* Grid */}
          <div className="flex-1 grid grid-cols-2 gap-s h-2/3">
            {gridValues.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-s">
                {/* Icône dans un carré blanc centré */}
                <div className="">
                  <span className="">{item.icon}</span>
                </div>
                <h3 className="">{item.title}</h3>
                <p className="">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quatrième div */}
      <div className="flex flex-col w-full bg-[var(--surface-color-primary)] p-[var(--padding-m)]">
        <h2>NOTRE EQUIPE</h2>
        <div className="flex justify-between gap-s w-full">
          {team.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 relative flex flex-col justify-end h-[460px] text-[var(--color-secondary)]"
              style={{ border: "solid 1px red" }}
            >
              <img
                src={item.photo}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <h3 className="z-1">{item.name}</h3>
              <p className="z-1">{item.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cinquième div */}
      <div className="flex flex-col w-full bg-[var(--color-primary)] text-[var(--color-secondary)]">
        <h1>NOS TRAVAUX</h1>
        <div className="flex justify-between gap-s w-full">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 relative flex flex-col justify-end h-[460px] text-[var(--color-secondary)]"
              style={{ border: "solid 1px red" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <p className="z-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
