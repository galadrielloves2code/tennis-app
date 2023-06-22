import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export function IcloudButton() {
  return (
    <div>
      <button
        type="button"
        className="btn text-white btn-sm rounded-circle"
        style={{ backgroundColor: "black" }}
        href="#!"
        role="button"
      >
        <FontAwesomeIcon icon={faApple} />
      </button>
    </div>
  );
}