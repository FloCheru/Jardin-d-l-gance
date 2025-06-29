import backGroundHomePage from "../assets/homepage/background-homepage.jpg";
export default function Home() {
  return (
    <div className="container relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Image de fond (à ajouter plus tard) */}
      <img
        src={backGroundHomePage}
        alt="Jardin paysager"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay sombre pour lisibilité */}
      <div className="background-overlay absolute inset-0 z-10" />

      {/* Contenu principal centré */}
      <div className="relative z-20 flex flex-col w-full h-full justify-between min-h-screen">
        {/* Navbar du Hero */}
        <nav className="flex justify-between items-center px-8 pt-8">
          <span className="text-white text-2xl font-light tracking-widest">
            leaflife
          </span>
          <div className="flex gap-10 text-white text-lg font-light">
            <a href="#about" className="hover:underline">
              ABOUT
            </a>
            <a href="#services" className="hover:underline">
              SERVICES
            </a>
            <a href="#projects" className="hover:underline">
              PROJECTS
            </a>
            <a href="#contact" className="hover:underline">
              CONTACT
            </a>
          </div>
        </nav>

        <div className="flex border-2 border-yellow-500">
          {/* Titre et description */}
          <div className="flex-1 flex flex-col justify-center items-start px-8 max-w-3xl mx-auto">
            <h1 className="hero-title mb-6">
              <span className="hero-title-white">CREATE YOUR</span>
              <br />
              <span className="hero-title-lightgray">DREAM GARDEN</span>
            </h1>
            <p className="hero-desc mb-8 max-w-xl">
              Create dream gardens with passion, creativity and sustainability
              for over a decade with our experienced landscape artists and
              gardener teams.
            </p>
          </div>

          {/* Bloc "500+ Satisfied Clients" */}
          <div className="bg-white bg-opacity-10 border border-white rounded-xl p-8 text-white text-xl font-light backdrop-blur-md z-30 flex flex-col items-center min-w-[220px]">
            <span className="text-4xl font-semibold mb-2">500+</span>
            Satisfied Clients
            <div className="flex gap-2 mt-4">
              <span className="w-5 h-5 border-2 border-white rounded-full inline-block" />
              <span className="w-5 h-5 border-2 border-white rounded-full inline-block" />
              <span className="w-5 h-5 border-2 border-white rounded-full inline-block" />
            </div>
          </div>
        </div>

        {/* Bloc boutons + Hachioji Garden */}
        <div className="flex justify-between border-2 border-yellow-500">
          <div className="flex gap-[20px]">
            <button className="bg-white text-black font-medium px-8 py-3 rounded shadow hover:bg-gray-200 transition">
              Get Started
            </button>
            <button className="bg-transparent border border-white text-white font-medium px-8 py-3 rounded hover:bg-white hover:text-black transition">
              Explore Projects
            </button>
          </div>
          <div className=" flex flex-col items-center gap-[20px] p-[var(--container-padding)] w-[40%] border-2 border-yellow-500 bg-white bg-opacity-20 rounded-xl max-w-md backdrop-blur-md z-30">
            <div className=" flex w-full justify-between items-center gap-2">
              <div className="text-3xl">📍</div>
              <div className="ml-auto text-2xl">↗️</div>
            </div>
            <div>
              <div className="font-semibold text-xl">Hachioji Garden</div>
              <div className="text-base font-light">
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
