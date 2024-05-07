import React from "react";

export default function LocationContent({ location }) {
  return (
    <div className="location-container">
      <div className="loc-item">
        <p className="loc-title">IP ADDRESS</p>
        <p className="loc-content">192.212.174.101</p>
      </div>
      <div className="loc-item">
        <p className="loc-title">LOCATION</p>
        <p className="loc-content">
          {location.city}, {location.country}
          <br />
          {location.postalCode}
        </p>
      </div>
      <div className="loc-item">
        <p className="loc-title">TIMEZONE</p>
        <p className="loc-content">{location.timezone}</p>
      </div>
      <div className="loc-item">
        <p className="loc-title">ISP</p>
        <p className="loc-content">{location.isp}</p>
      </div>
    </div>
  );
}
