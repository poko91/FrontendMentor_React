import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Filter from "./components/Filter";
import CountriesList from "./components/CountriesList";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <Filter />
        </div>
        <CountriesList />
      </main>
    </div>
  );
};

export default App;
