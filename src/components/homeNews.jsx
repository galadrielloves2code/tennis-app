import React from "react";

export function HomeNews(){
    return(
        <div className="container-fluid" style={{position:"relative", display:"flex",justifyContent:"space-between", alignItems:"center",paddingTop:"50px", background:"#FFF"}}>
            <h1 style={{position:"absolute", right:"325px",color:"#F5F5F5", fontSize:"200px", fontFamily:"Poppins"}}>LIVE</h1>
            <div style={{display:"flex", alignItems:"center", marginLeft:"60px", zIndex:"1"}}>
                <img src="/assets/images/racquetLeft.png" alt="racquet" style={{height:"370px" }}/>
                <h3 style={{color:"#000", fontFamily:"Poppins", fontWeight:"400", width:"20px"}}>Carlos Alcaraz</h3>
            </div>
            <h1 style={{paddingLeft:"70px", zIndex:"1"}}>18:00</h1>
            <div style={{display:"flex", alignItems:"center", marginRight:"60px", zIndex:"1"}}>
                <h3 style={{color:"#000", fontFamily:"Poppins", fontWeight:"400", width:"20px", marginRight:"40px", paddingTop:"10px"}}>Novak Djokovich</h3>
                <img src="/assets/images/racquetRight.png" alt="racquet" style={{height:"400px" }}/>
            </div>
        </div>
    )
}