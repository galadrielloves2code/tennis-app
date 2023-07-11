import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export function InstagramButton() {
  return (
    <FontAwesomeIcon
      icon={faInstagram}
      style={{
        height: "14px",
        border: "0.5px solid #666666",
        padding: "4px",
        borderRadius: "20px",
      }}
    />
  );
}
