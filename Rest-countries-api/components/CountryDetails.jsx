import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import "./CountryDetails.css";
import Error from "./Error";
import { useTheme } from "../hooks/useTheme";

export default function CountryDetails() {
  const countryName = useParams("country").country;
  const { state } = useLocation();
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(false);
  const [isDark] = useTheme();

  const updateCountryData = (country) => {
    setCountryData({
      name: country.name.common,
      flag: country.flags.svg,
      nativeName: Object.values(country.name.nativeName || {})[0]?.common,
      population: country.population,
      region: country.region,
      subRegion: country.subregion,
      capital: country.capital,
      topLevelDomain: country.tld[0],
      currencies: Object.values(country.currencies || {})
        .map((currency) => currency.name)
        .join(", "),
      languages: Object.values(country.languages || {}).join(", "),
      borders: [],
    });

    if (!country.borders) {
      country.borders = [];
    }

    Promise.all(
      country.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setTimeout(() => setCountryData((prevState) => ({ ...prevState, borders })));
    });
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
      const [country] = await response.json();
      updateCountryData(country);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    if (state) {
      updateCountryData(state.data);
      return;
    }
    fetchData();
  }, [countryName]);

  if (error) {
    return <Error />;
  }

  return countryData === null ? (
    <div>Loading...</div>
  ) : (
    <main className={`${isDark && "dark"}`}>
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
                <b>Native Name: </b>
                {countryData.nativeName || countryData.name}
              </p>
              <p>
                <b>Population: </b>
                {countryData.population}
              </p>
              <p>
                <b>Region: </b>
                {countryData.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {countryData.subRegion}
              </p>
              <p>
                <b>Capital: </b>
                {countryData.capital?.join(", ")}
              </p>
              <p>
                <b>Top Level Domain: </b>
                {countryData.topLevelDomain}
              </p>
              <p>
                <b>Currencies: </b>
                {countryData.currencies}
              </p>
              <p>
                <b>Languages: </b>
                {countryData.languages}
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
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
