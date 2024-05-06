import React from "react";
import SearchBar from "./SearchBar";

export default function MainContent() {
  return (
    <div className="wrapper">
      <h1 className="title">IP Address Tracker</h1>
      <SearchBar />
    </div>
  );
}
