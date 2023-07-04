import React from "react";

const Flag = ({ countryCode, altText }) => {
  const flagPath = `./assets/flags/${countryCode}.svg`;

  return <img src={flagPath} alt={altText} />;
};

export default Flag;