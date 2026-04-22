import "../styles/GithubDialog.css";

function GithubDialog({ data, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header-custom d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Mon profil GitHub</h5>
          <button className="btn-close-custom" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body-custom d-flex gap-3">
          {data ? (
            <>
              <img
                src={data.avatar_url}
                alt="Avatar GitHub"
                className="github-avatar"
              />
              <div className="github-info">
                <p>
                  <span>👤</span>{" "}
                  <a
                    href={data.html_url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {data.name || data.login}
                  </a>
                </p>
                <hr />
                <p>
                  <span>📍</span> {data.location || ""}
                </p>
                <hr />
                <p>
                  <span>📋</span> {data.bio || ""}
                </p>
                <hr />
                <p>
                  <span>📦</span> Repositories : {data.public_repos}
                </p>
                <hr />
                <p>
                  <span>👥</span> Followers : {data.followers}
                </p>
                <hr />
                <p>
                  <span>👥</span> Following : {data.following}
                </p>
              </div>
            </>
          ) : (
            <p>Chargement...</p>
          )}
        </div>

        <div className="modal-footer-custom">
          <button className="btn btn-secondary" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default GithubDialog;
