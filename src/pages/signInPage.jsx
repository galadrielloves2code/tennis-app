import React from "react";
import { Link } from "react-router-dom";
import { SignInButton } from "../components/buttons/signInButton";

export function SignInPage() {
  return (
    <div className="container">
      <div className="container-sm-center">
        <img src="../components/imgages/profile.svg" alt="Profile Icon" />
        <form class="needs-validation" novalidate>
          <div class="col-md-6 mb-3" className="form-group">
            <label htmlFor="exampleInputEmail1"></label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Username"
              required
            />
          </div>
          <div class="col-md-6 mb-3" className="form-group">
            <label htmlFor="exampleInputPassword1"></label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              Choose a password with at least 8 characters, including uppercase
              letters, lowercase letters, numbers, and symbols
            </small>
          </div>
          <br />
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <br />
          <SignInButton />
        </form>
        <br />
        <Link
          to="/"
          style={{ textDecoration: "none", color: "black" }}
          onMouseEnter={(e) => (e.target.style.color = "green")}
          onMouseLeave={(e) => (e.target.style.color = "black")}
        >
          Create an account
        </Link>
      </div>
      <br />
      <Link
        to="#"
        style={{ textDecoration: "none", color: "black" }}
        onMouseEnter={(e) => (e.target.style.color = "green")}
        onMouseLeave={(e) => (e.target.style.color = "black")}
      >
        Forgot your password?
      </Link>
    </div>
  );
}
