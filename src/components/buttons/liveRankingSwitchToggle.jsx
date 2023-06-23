import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";

export function LiveRankingSwitchToggle() {
  return <FontAwesomeIcon icon={faToggleOn} size="2xl" className="toggle" />;
}
