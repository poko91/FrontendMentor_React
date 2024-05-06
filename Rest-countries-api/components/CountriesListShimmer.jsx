import "./CountriesListShimmer.css";

export default function CountriesListShimmer() {
  const skeletonCards = Array.from({ length: 10 }).map((card, index) => {
    return <div key={index} className="country-card shimmer-card"></div>;
  });
  return <div className="countries-container">{skeletonCards}</div>;
}
