import React, { useState } from "react";
import SearchBar from "./SearchBar";
import LocationContent from "./LocationContent";
import data from "../data";

export default function Header() {
  const [location, setLocation] = useState(data[0]);

  return (
    <header className="wrapper">
      <h1 className="title">IP Address Tracker</h1>
      <SearchBar />
      <LocationContent location={location} />
    </header>
  );
}
