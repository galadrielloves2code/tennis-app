import React from "react";

export function GmailButton() {
  return (
    <div>
      <button type="button" class="btn btn-light" style={{ width: "100%" }}>
        <img
          src="assets/logos/gmail.png"
          alt="gmail logo"
          style={{ height: "20px", paddingLeft: "10px", paddingRight: "10px" }}
        />{" "}
        Sign up with Google
      </button>
    </div>
  );
}
