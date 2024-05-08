import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useData from "../../hooks/useData";
import { useMap } from "react-leaflet";
import { useEffect } from "react";
import icon from "../assets/icon-location.svg";

export default function Map() {
  const [data] = useData();

  if (!data) {
    return <p></p>;
  }

  return (
    <MapContainer center={[51.5, -0.09]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[data.lat, data.lng]}
        icon={L.icon({
          iconUrl: icon,
        })}
      >
        {/* <Popup>This is the location</Popup> */}
        <Popup>{data.ipAddress}</Popup>
      </Marker>
      <RecenterAutomatically coordinates={[data.lat, data.lng]} />
    </MapContainer>
  );
}

const RecenterAutomatically = ({ coordinates }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(coordinates);
  }, [coordinates, map]);
  return null;
};
