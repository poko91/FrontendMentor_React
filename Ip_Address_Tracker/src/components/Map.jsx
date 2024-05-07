import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useData from "../../hooks/useData";
import icon from "../assets/icon-location.svg";

export default function Map() {
  const [data] = useData();
  const [position, setPosition] = useData();

  if (!data) {
    return <p></p>;
  }

  return (
    <MapContainer center={[data.lat, data.lng]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[data.lat, data.lng]}
        icon={L.icon({
          iconUrl: icon,
        })}
      ></Marker>
    </MapContainer>
  );
}
