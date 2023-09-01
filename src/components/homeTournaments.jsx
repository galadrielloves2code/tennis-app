import React from "react";
import { Link } from "react-router-dom";

export function HomeTournaments() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <p
        style={{
          color: "black",
          size: "32px",
          fontWeight: "700",
        }}
      >
        TOURNAMENTS
      </p>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-around",
          marginTop: "50px",
          width: "750px",
        }}
      >
        <a href="https://www.usopen.org/">
          <img
            src="/assets/logos/USO.png"
            alt="us open logo"
            style={{ width: "100px", height: "100px" }}
          />
        </a>
        <a href="https://www.wimbledon.com">
          <img
            src="/assets/logos/wimbledon.png"
            alt="us open logo"
            style={{ width: "100px", height: "100px" }}
          />
        </a>
        <a href="https://ausopen.com">
          <img
            src="/assets/logos/AO.png"
            alt="us open logo"
            style={{ width: "100px", height: "100px" }}
          />
        </a>
        <a href="https://www.rolandgarros.com/">
          <img
            src="/assets/logos/RG.png"
            alt="us open logo"
            style={{ width: "100px", height: "100px" }}
          />
        </a>
      </div>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-around",
          marginTop: "50px",
          width: "750px",
        }}
      >
        <Link className="nav-link" to="/tournaments">
          <img
            src="/assets/logos/ATPFinals.png"
            alt="us open logo"
            style={{ width: "100px", height: "70px" }}
          />
        </Link>
        <Link className="nav-link" to="/tournaments">
          <img
            src="/assets/logos/ATP1000.png"
            alt="us open logo"
            style={{ width: "100px", height: "70px" }}
          />
        </Link>
        <Link className="nav-link" to="/tournaments">
          <img
            src="/assets/logos/ATP500.png"
            alt="us open logo"
            style={{ width: "100px", height: "70px" }}
          />
        </Link>
        <Link className="nav-link" to="/tournaments">
          <img
            src="/assets/logos/ATP250.png"
            alt="us open logo"
            style={{ width: "100px", height: "70px" }}
          />
        </Link>
      </div>
      <Link
        to="/tournaments"
        style={{
          color: "black",
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          marginTop: "70px",
        }}
      >
        View All Tournaments
        <p style={{ paddingTop: "1.5px", paddingLeft: "5px" }}>></p>
      </Link>
    </div>
  );
}
