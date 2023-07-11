import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export function TwitterButton() {
  return (
    <FontAwesomeIcon
      icon={faTwitter}
      style={{
        marginLeft: "10px",
        border: "0.5px solid #666666",
        padding: "4px",
        borderRadius: "20px",
        height: "14px"
      }}
    />
  );
}
