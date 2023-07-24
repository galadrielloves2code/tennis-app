import React from "react";

export function ProgressBar(){
    return(
        <div
        className="progress"
        role="progressbar"
        ariaLabel="Progress with label"
        ariaValuenow="25"
        ariaValuemin="0"
        ariaValuemax="100"
      >
        <div className="progress-bar" style={{ width: "25%", backgroundColor:"#38E54D" }}>
          25%
        </div>
      </div>
    )
}