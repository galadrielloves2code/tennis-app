import React from "react";
import { Link } from "react-router-dom";
import { SignInButton } from "./buttons/signInButton";
import { Logo } from "./logo";

export function Header({ isUserSignedUp }) {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <Logo />
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{
                "--bs-scroll-height": "100px",
              }}
            >
              <li className="nav-item">
                <Link className="nav-link active" to="/"></Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/ranking"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#003500" }}
                >
                  Ranking
                </Link>
                <ul className="dropdown-menu" style={{ fontSize: "16px" }}>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/ranking/ATP"
                      style={{ color: "#003500" }}
                    >
                      ATP
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/ranking/WTA"
                      style={{ color: "#003500" }}
                    >
                      WTA
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/schedule"
                  style={{ color: "#003500" }}
                >
                  Schedule
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/tournaments"
                  style={{ color: "#003500" }}
                >
                  Tournaments
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/ranking"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#003500" }}
                >
                  Players
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/players/ATP"
                      style={{ color: "#003500" }}
                    >
                      ATP
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/players/WTA"
                      style={{ color: "#003500" }}
                    >
                      WTA
                    </Link>
                  </li>
                </ul>
              </li>
              <SignInButton />
            </ul>
            {/**  ----- this part will be activated later-----
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            */}
          </div>
        </div>
      </nav>
    </div>
  );
}
