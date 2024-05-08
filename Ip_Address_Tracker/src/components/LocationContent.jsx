import useData from "../../hooks/useData";

export default function LocationContent() {
  const [data] = useData();
  const { ipAddress, city, country, postalCode, timezone, isp } = data;

  return (
    <div className="location-container">
      <div className="loc-item">
        <p className="loc-title">IP ADDRESS</p>
        <p className="loc-content">{ipAddress}</p>
      </div>
      <div className="loc-item">
        <p className="loc-title">LOCATION</p>
        <p className="loc-content">{`${city}, ${country} ${postalCode}`}</p>
      </div>
      <div className="loc-item">
        <p className="loc-title">TIMEZONE</p>
        <p className="loc-content">{timezone}</p>
      </div>
      <div className="loc-item">
        <p className="loc-title">ISP</p>
        <p className="loc-content">{isp}</p>
      </div>
    </div>
  );
}
