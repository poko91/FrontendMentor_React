import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="error-page-container">
      <h2>404</h2>
      <p>Page not found</p>
      <p>Oops!, the page you looking for does not exist</p>
      <Link to="/">
        <button className="error-back-button">
          <i className="fa-solid fa-arrow-left-long"></i>
          Back to home
        </button>
      </Link>
    </main>
  );
}
