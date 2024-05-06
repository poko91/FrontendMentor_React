import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isDark] = useTheme();
  return (
    <main className={`${isDark && "dark"}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <Filter />
      </div>
      <CountriesList query={query} />
    </main>
  );
}
