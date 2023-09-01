import React from "react";
import { Logo } from "./logo";
import { Link } from "react-router-dom";

export function BottomHeader() {
  return (
    <div
      style={{ display: "flex", flexDirection:"column",justifyContent: "center", alignItems:"center", boxShadow: "4px 0px 4px 0px rgba(0, 0, 0, 0.25)"}}
    >
        <br/>
      <Logo/>
      <div style={{display:"flex", justifyContent:"space-between", width:"500px", marginTop:"30px"}}>
            <Link to="/" style={{textDecoration:"none", color:"#003500"}}>HOME</Link>
            <Link to="/ranking/ATP" style={{textDecoration:"none", color:"#003500"}}>RANKING</Link>
            <Link to="/schedule" style={{textDecoration:"none", color:"#003500"}}>SCHEDULE</Link>
            <Link to="/tournaments" style={{textDecoration:"none", color:"#003500"}}>TOURNAMENTS</Link>
            <Link to="/players/ATP" style={{textDecoration:"none", color:"#003500"}}>PLAYERS</Link>
      </div>
      <br/>
      <div style={{backgroundColor:"#007300", width:"100%", height:"50px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <p style={{color:"#FFFFFF", paddingTop:"20px", fontSize:"15x"}}>ALL RIGHTS RESERVED.© 2023</p>
      </div>
    </div>
  );
}
