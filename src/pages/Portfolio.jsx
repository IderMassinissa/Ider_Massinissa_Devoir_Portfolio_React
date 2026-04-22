import "../styles/Portfolio.css";
import bannerImg from "../assets/images/banner.jpg";
import freshFood from "../assets/images/portfolio/fresh-food.jpg";
import restaurantJaponais from "../assets/images/portfolio/restaurant-japonais.jpg";
import espaceBienEtre from "../assets/images/portfolio/espace-bien-etre.jpg";
import seo from "../assets/images/portfolio/seo.jpg";
import coder from "../assets/images/portfolio/coder.jpg";
import screens from "../assets/images/portfolio/screens.jpg";

const projects = [
  {
    id: 1,
    img: freshFood,
    title: "Fresh Food",
    description: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec PHP et MySQL",
  },
  {
    id: 2,
    img: restaurantJaponais,
    title: "Restaurant Akira",
    description: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec WordPress",
  },
  {
    id: 3,
    img: espaceBienEtre,
    title: "Espace bien-être",
    description: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec LARAVEL",
  },
  {
    id: 4,
    img: seo,
    title: "SEO",
    description: "Amélioration du référencement d'un site e-commerce",
    tech: "Utilisation des outils SEO",
  },
  {
    id: 5,
    img: coder,
    title: "Création d'une API",
    description: "Création d'une API RESTFULL publique",
    tech: "PHP - SYMFONY",
  },
  {
    id: 6,
    img: screens,
    title: "Maquette d'un site web",
    description: "Création du prototype d'un site",
    tech: "Réalisé avec FIGMA",
  },
];

function Portfolio() {
  return (
    <>
      {/* Banner */}
      <section
        className="banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      ></section>

      {/* Portfolio */}
      <section className="container my-5">
        <div className="text-center mb-5">
          <h1>Portfolio</h1>
          <p>Voici quelques-unes de mes réalisations.</p>
          <hr className="border border-primary border-2 opacity-100 w-25 mx-auto" />
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-12 col-md-4" key={project.id}>
              <div className="card portfolio-card h-100">
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href="#" className="btn btn-primary portfolio-btn">
                    Voir le site
                  </a>
                </div>
                <div className="card-footer text-center text-muted">
                  {project.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
