import React from "react";
import { Link } from "react-router-dom";
import { SignInButton } from "./buttons/signInButton";
import { Logo } from "./logo";

export function Header() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Logo />

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/ranking"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ranking
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/ranking/atp">
                      ATP
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ranking/wta">
                      WTA
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/schedule">
                  Schedule
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tournaments">
                  Tournaments
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/players">
                  Players
                </Link>
              </li>
              <SignInButton />
            </ul>
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
          </div>
        </div>
      </nav>
    </div>
  );
}
