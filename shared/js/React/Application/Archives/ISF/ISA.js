import React from 'react';

// Import Ineteractive Sections
import Section1 from "./Section1"
/*
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"
import Section6 from "./Section6"
*/

const ISA = (props)=>{
        return(
            <div className="ISA">
                <Section1 {... props}/>
            </div>
        )
}
export default ISA
//  <Section5 {... props}/>
//  <Section1 {... props}/>
//  <Section2 {... props}/>
//  <Section3 {... props}/>
// <Section4 {... props}/>
//  <Section6 {... props}/>