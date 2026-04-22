import { useEffect } from "react";
import "../styles/MentionsLegales.css";

function MentionsLegales() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <section className="container my-5">
      <div className="text-center mb-5">
        <h1>Mentions légales</h1>
        <hr className="border border-primary border-2 opacity-100 w-25 mx-auto" />
      </div>

      <div className="accordion" id="accordionMentions">
        {/* Editeur du site - ouvert par défaut */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEditeur"
            >
              Editeur du site
            </button>
          </h2>
          <div
            id="collapseEditeur"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionMentions"
          >
            <div className="accordion-body">
              <h4>John Doe</h4>
              <p>40 rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p>10 20 30 40 50</p>
              <p>john.doe@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Hébergeur */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseHebergeur"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseHebergeur"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionMentions"
          >
            <div className="accordion-body">
              <h4>alwaysdata</h4>
              <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <p>
                <a
                  href="https://www.alwaysdata.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  www.alwaysdata.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Crédits */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCredits"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseCredits"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionMentions"
          >
            <div className="accordion-body">
              <h4>Crédits</h4>
              <p>
                Ce site a été réalisé par John Doe, étudiant au{" "}
                <a
                  href="https://www.cef.fr"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Centre Européen de formation
                </a>
                .
              </p>
              <p>
                <em>
                  Les images utilisées sur ce site sont libres de droits et ont
                  été obtenues sur le site{" "}
                  <a
                    href="https://pixabay.com"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    Pixabay
                  </a>
                </em>
              </p>
              <p>
                <em>
                  La favicon de ce site a été fournie par{" "}
                  <a
                    href="https://www.flaticon.com/de/kostenlose-icons/john-doe"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    John doe Icons erstellt von Freepik - Flaticon
                  </a>
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentionsLegales;
