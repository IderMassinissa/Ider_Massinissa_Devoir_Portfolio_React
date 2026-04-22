import "../styles/Contact.css";

function Contact() {
  return (
    <>
      {/* Header section */}
      <section className="container my-5">
        <div className="text-center mb-5">
          <h1>Contact</h1>
          <p>
            Pour me contacter en vue d'un entretien ou d'une future
            collaboration, merci de remplir le formulaire de contact.
          </p>
          <hr className="border border-primary border-2 opacity-100 w-25 mx-auto" />
        </div>

        <div className="row shadow p-4">
          {/* Formulaire */}
          <div className="col-12 col-md-6">
            <h3>Formulaire de contact</h3>
            <hr className="border border-primary border-2 opacity-100 mb-3" />

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Votre adresse email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Votre numéro de téléphone"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Sujet"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Votre message"
                rows="8"
                required
              ></textarea>
            </div>
            <button className="btn btn-primary">Envoyer</button>
          </div>

          {/* Coordonnées */}
          <div className="col-12 col-md-6">
            <h3>Mes coordonnées</h3>
            <hr className="border border-primary border-2 opacity-100 mb-3" />

            <p>
              <strong>John Doe</strong>
            </p>
            <p>🏢 40 rue Laure Diebold</p>
            <p>📍 69009 Lyon, France</p>
            <p>📱 10 20 30 40 50</p>
            <p>✉️ john.doe@gmail.com</p>

            {/* Google Map */}
            <div className="map-container mt-3">
              <iframe
                title="Google Map John Doe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.9!2d4.8!3d45.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea7d2a0a0a0a%3A0x0!2s40+Rue+Laure+Diebold%2C+69009+Lyon!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
