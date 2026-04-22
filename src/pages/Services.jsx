import "../styles/Services.css";
import bannerImg from "../assets/images/banner.jpg";

function Services() {
  return (
    <>
      {/* Banner */}
      <section
        className="banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      ></section>

      {/* Services */}
      <section className="container my-5">
        <div className="text-center mb-5">
          <h1>Mon offre de services</h1>
          <p>Voici les prestations sur lesquelles je peux intervenir</p>
          <hr className="border border-primary border-2 opacity-100 w-25 mx-auto" />
        </div>

        <div className="row g-4">
          {/* UX Design */}
          <div className="col-12 col-md-4">
            <div className="card service-card text-center p-4 h-100">
              <div className="card-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#0d6efd"
                  className="bi bi-pencil mb-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
                <h4 className="card-title">UX Design</h4>
                <p className="card-text">
                  L'UX Design est une discipline qui consiste à concevoir des
                  produits (sites web, applications mobiles, logiciels, objets
                  connectés, etc.) en plaçant l'utilisateur au centre des
                  préoccupations. L'objectif est de rendre l'expérience
                  utilisateur la plus fluide et agréable possible.
                </p>
              </div>
            </div>
          </div>

          {/* Développement web */}
          <div className="col-12 col-md-4">
            <div className="card service-card text-center p-4 h-100">
              <div className="card-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#0d6efd"
                  className="bi bi-code-slash mb-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                </svg>
                <h4 className="card-title">Développement web</h4>
                <p className="card-text">
                  Le développement de sites web consiste à créer des sites
                  internet en utilisant des langages de programmation (HTML,
                  CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap,
                  React, Angular, etc.).
                </p>
              </div>
            </div>
          </div>

          {/* Référencement */}
          <div className="col-12 col-md-4">
            <div className="card service-card text-center p-4 h-100">
              <div className="card-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#0d6efd"
                  className="bi bi-search mb-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.099zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <h4 className="card-title">Référencement</h4>
                <p className="card-text">
                  Le référencement naturel (SEO) est une technique qui consiste
                  à optimiser un site web pour le faire remonter dans les
                  résultats des moteurs de recherche (Google, Bing, Yahoo,
                  etc.). L'objectif est d'attirer un maximum de visiteurs
                  qualifiés sur le site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
