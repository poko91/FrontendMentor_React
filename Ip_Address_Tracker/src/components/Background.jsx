import bg from "../assets/pattern-bg-desktop.png";

export default function Background() {
  return (
    <main>
      <div className="background-image-container">
        <img src={bg} alt="background-image" />
      </div>
      <div className="map"></div>
    </main>
  );
}
