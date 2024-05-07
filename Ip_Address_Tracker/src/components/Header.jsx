import React from "react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="wrapper">
      <h1 className="title">IP Address Tracker</h1>
      <SearchBar />
    </header>
  );
}
