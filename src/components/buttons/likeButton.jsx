import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function LikeButton() {
  const [filled, setFilled] = useState(false);

  const toggleHeart = () => {
    setFilled(!filled);
  };

  return (
    <div onClick={toggleHeart}>
      <FontAwesomeIcon
        icon={filled ? faHeart : faHeart}
        style={{
          color: filled ? "55C122" : "#ffffff",
          position: "absolute",
          top: "10px",
          left: "15px",
        }}
      />
    </div>
  );
}
