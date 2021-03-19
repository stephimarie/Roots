import React from "react";

function Timezone({name, date}) {
 return(
    <div className="col s3 m6" style={{background:"rgba(255, 255, 255, 0.250)", marginTop:"10px", marginLeft:"10px", marginRight:"10px", borderRadius:"5px", paddingTop:"5px"}}>
    <div style={{backgroundColor:"rgba(0, 0, 0, 0)"}} className="card-panel timezoneCard">
        <p className="black-text timezoneName">
            {name}
        </p>
        <p className="black-text timezoneDate">
            {date}
        </p>
    </div>
</div>
 )
}

export default Timezone;