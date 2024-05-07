import React from "react";

export default function LocationContent({ ipdata }) {
  return (
    <div className="location-container">
      <div className="loc-item">
        <p className="loc-title">IP ADDRESS</p>
        <p className="loc-content">{ipData.ip}</p>
      </div>
      <div className="loc-item">
        <p className="loc-title">LOCATION</p>
        <p className="loc-content">{`${ipData.location.city}, ${ipData.location.country} ${ipData.location.postalCode}`}</p>
      </div>
      <div className="loc-item">
        <p className="loc-title">TIMEZONE</p>
        <p className="loc-content">{ipData.timezone}</p>
      </div>
      <div className="loc-item">
        <p className="loc-title">ISP</p>
        <p className="loc-content">{ipData.isp}</p>
      </div>
    </div>
  );
}
