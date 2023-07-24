import React from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "../components/progressBar";

export function SignInPage() {
  return (
    <div
      className="container"
      style={{
        width: "500px",
        border: "0.5px solid gray",
        padding: "80px",
        borderRadius: "50px",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="container-sm-center">
        <h1>Sign in</h1>
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
          </div>
          <br />
          <ProgressBar/>
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
          <button
            type="button"
            className="btn"
            style={{ width: "100%", backgroundColor: "#38E54D" }}
          >
            Sign In
          </button>
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
