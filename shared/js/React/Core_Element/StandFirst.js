import React from 'react';
import Sponsor from "./SponsorLogo";
const StandFirst = (props)=>{
    return(
        <div className="StandfirstContainer">
            <p className="Standfirst">
                {props.Meta.StandFirst}
            </p>
            <Sponsor {... props}/>
        </div>
    )
}
export default StandFirst;