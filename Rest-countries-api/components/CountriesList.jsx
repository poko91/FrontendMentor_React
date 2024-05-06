import { useState, useEffect } from "react";
import Card from "./Card";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({ query }) {
  const [countries, setCountries] = useState([]);

  const filteredCountries = countries.filter(
    (country) => country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
  );

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();

      setCountries(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!countries.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {filteredCountries.map((country) => {
            return (
              <Card
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                capital={country.capital?.[0]}
                region={country.region}
                data={country}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
