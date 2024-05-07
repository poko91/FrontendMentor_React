import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import LocationContent from "./LocationContent";

export default function Header() {
  const [ipData, setIpData] = useState(null);
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_x2c2TfdhTzKZh5pONbIgx1iHWYwnE&ipAddress=${ip}&domain=${ip}`)
      .then((response) => response.json())
      .then((data) => {
        setIpData({
          ipAddress: data.ip,
          timezone: data.location.timezone || "",
          country: data.location.country,
          city: data.location.city || "",
          postalCode: data.location.zipcode || "",
          isp: data.isp,
          lat: data.location.lat,
          lng: data.location.lng,
        });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [ip]);

  return (
    <header className="wrapper">
      <h1 className="title">IP Address Tracker</h1>
      <SearchBar setIp={setIp} />
      {loading ? <p>Loading...</p> : <LocationContent ipData={ipData} />}
    </header>
  );
}
