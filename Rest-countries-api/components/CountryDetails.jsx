import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CountryDetails.css";
import Error from "./Error";

export default function CountryDetails() {
  const countryName = useParams("country").country;
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
      const [country] = await response.json();

      setCountryData({
        name: country.name.common,
        flag: country.flags.svg,
        nativeName: Object.values(country.name.nativeName)[0].common,
        population: country.population,
        region: country.region,
        subRegion: country.subregion,
        capital: country.capital.join(", "),
        topLevelDomain: country.tld[0],
        currencies: Object.values(country.currencies)
          .map((currency) => currency.name)
          .join(", "),
        languages: Object.values(country.languages).join(", "),
        borders: [],
      });

      if (!country.borders) {
        country.borders = [];
      }

      const promises = country.borders.map(async (border) => {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${border}`);
        const [borderCountry] = await res.json();
        return borderCountry.name.common;
      });
      const borders = await Promise.all(promises);
      setCountryData((prevState) => ({ ...prevState, borders }));
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [countryName]);

  if (error) {
    return <Error />;
  }

  return countryData === null ? (
    <div>Loading...</div>
  ) : (
    <main>
      <div className="country-details-container">
        <span className="country-back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={countryData.name} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName} </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Population: {countryData.population}</b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subRegion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.topLevelDomain}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages"></span>
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries:</b>&nbsp;
                {countryData.borders.map((country) => (
                  <Link key={country} to={`/${country}`}>
                    {country}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
