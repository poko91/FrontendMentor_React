export default function Card({ name, flag, population, region, capital }) {
  return (
    <a className="country-card" href="/">
      <img src={flag} alt="" />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </a>
  );
}
