import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <Filter />
      </div>
      <CountriesList query={query} />
    </main>
  );
}
