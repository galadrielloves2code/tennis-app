import React from "react";
import { useNavigate } from "react-router-dom";

export function SignInButton() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/signIn");
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-success rounded"
        style={{
          backgroundColor: "#007E00",
          fontSize: "16px",
          color: "#ECEAEB",
        }}
        onClick={handleSignInClick}
      >
        Sign in
      </button>
    </div>
  );
}
