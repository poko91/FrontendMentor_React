import { DataProvider } from "../contexts/DataContext";
import "./App.css";
import Header from "./components/Header";
import Map from "./components/Map";

function App() {
  return (
    <DataProvider>
      <Header />
      {<Map />}
    </DataProvider>
  );
}

export default App;
