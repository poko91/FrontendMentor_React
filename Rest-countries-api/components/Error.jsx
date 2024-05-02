export default function Error() {
  return (
    <main className="error-page-container">
      <h2>404</h2>
      <p>Page not found</p>
      <p>Oops!, the page you looking for does not exist</p>
      <button className="back-button">
        <i className="fa-solid fa-arrow-left-long"></i>
        Back to home
      </button>
    </main>
  );
}
