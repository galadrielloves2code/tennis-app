import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export function GmailButton() {
  return (
    <div>
      <button
        type="button"
        className="btn text-white btn-sm rounded-circle"
        style={{ backgroundColor: "#ac2bac" }}
        href="#!"
        role="button"
      >
        <FontAwesomeIcon icon={faGoogle} />
      </button>
    </div>
  );
}
