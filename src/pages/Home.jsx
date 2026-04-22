import { useState, useEffect } from "react";
import "../styles/Home.css";
import GithubDialog from "../components/GithubDialog";
import aboutImg from "../assets/images/john-doe-about.jpg";
import heroBg from "../assets/images/hero-bg.jpg";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/IderMassinissa")
      .then((res) => res.json())
      .then((data) => setGithubData(data));
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        className="hero d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div>
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button
            className="btn btn-danger mt-3"
            onClick={() => setShowModal(true)}
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* About + Skills */}
      <section className="container my-5">
        <div className="row shadow p-4">
          {/* About */}
          <div className="col-12 col-md-6">
            <h3>A propos</h3>
            <hr className="border border-primary border-2 opacity-100 mb-3" />
            <img src={aboutImg} alt="John Doe" className="img-fluid mb-3" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque
              at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque
              at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque
              at?
            </p>
          </div>

          {/* Skills */}
          <div className="col-12 col-md-6">
            <h3>Mes compétences</h3>
            <hr className="border border-primary border-2 opacity-100 mb-3" />

            <p className="mb-1">HTML5 90%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-danger"
                style={{ width: "90%" }}
              ></div>
            </div>

            <p className="mb-1">CSS3 80%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-info"
                style={{ width: "80%" }}
              ></div>
            </div>

            <p className="mb-1">JAVASCRIPT 70%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-warning"
                style={{ width: "70%" }}
              ></div>
            </div>

            <p className="mb-1">PHP 60%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success"
                style={{ width: "60%" }}
              ></div>
            </div>

            <p className="mb-1">REACT 50%</p>
            <div className="progress mb-3">
              <div className="progress-bar" style={{ width: "50%" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modale */}
      {showModal && (
        <GithubDialog data={githubData} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default Home;
