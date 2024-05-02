import countriesData from "../countriesData";
import Card from "./Card";

export default function CountriesList() {
  console.log(countriesData);
  const array = countriesData.map((country) => {
    return (
      <Card
        key={country.name.common}
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population}
        capital={country.capital?.[0]}
        region={country.region}
      />
    );
  });

  return <div className="countries-container">{array}</div>;
}
