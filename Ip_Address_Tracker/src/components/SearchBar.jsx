export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <input type="search" className="search-bar" placeholder="Search for any IP address or domain" />
      <button>{`>`}</button>
    </div>
  );
}
