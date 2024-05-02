import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Filter from "./components/Filter";
import CountriesList from "./components/CountriesList";
import { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <Filter />
        </div>
        <CountriesList query={query} />
      </main>
    </div>
  );
};

export default App;
