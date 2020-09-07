import React, {useEffect, useState, useRef} from 'react';


// GSAP
import {Power3, gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

import TestSVG from "./SVG/testsvg";

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
  }


const Section2 = ()=>{
    const tl = gsap.timeline();
    const onEntertl = gsap.timeline();

   

    let Section3  = useRef(null)
    let panel1  = useRef(null)
    let inner1  = useRef(null)
    let panel2  = useRef(null)
    let panel3  = useRef(null)
    let PanelSVGContainer = useRef(null)
    let PositionSVG = useRef(null)
    useEffect(()=>{
        

        // Pin SVG to container

        gsap.to(PanelSVGContainer, {
            scrollTrigger:{
                trigger:PanelSVGContainer,
                endTrigger:panel3,
                id:"PanelSVGContainer",
                toggleActions:"restart pause reverse pause",
                start:"top 10%",
                end:"bottom bottom",
                markers:true,
                pin:true,
                scrub:true
            },
        })

        gsap.to(PositionSVG, {
            scrollTrigger:{
                trigger:panel1,
                id:"panel1",
                toggleActions:"restart pause reverse pause",
                start:"top center",
                end:"bottom center",
                markers:true,
                scrub:true
            },
            scale:1,
            left:'100%',
            top:"100%"
         
        })

        // Panels
/*
        let Panels = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: Section,
                //pin:Content1,
                toggleActions:"restart pause reverse pause",
                id:"Part - 1",
                start: "top top",
                end: "200%",
                markers: true,
                pin:true,
                scrub:1,
                anticipatePin:1,
                
            }
          })

          Panels.from(panel1, {yPercent:-100})
          Panels.from(panel2, {yPercent:-100})
          Panels.from(panel3, {yPercent:-100})
          // End Panels
*/
/*
          // Grow SVG
          gsap.to(".PanelSVGContainer", {
              scrollTrigger:{
                  trigger:Section,
                  id:"SVG InnerContent 1",
                  toggleActions:"restart pause reverse pause",
                  start:"top center",
                  end:"bottom bottom",
                  markers:true,
                  pin:true,
              },
              scale:1.5
          })

         


          // Copy Transitions
          let onEntertl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                toggleActions:"restart pause reverse pause",
                id:"Enter Panel Copy",
                trigger: Section,
                start: "top center",
                end: "bottom center",
                markers: true,
            }
          })
        onEntertl.to(".StartingCopy", 1.5, {opacity:1, y:-30, duration:1.5}, 0.5, Power3.easeInOut)
      */

    },[])

        return(
            <section
                className="Section3"
                ref={el=>{ Section3= el}}
            >
                <div className="PanelSVGContainer" ref={el=>{ PanelSVGContainer= el}}> 
                    <div className="PositionSVG" ref={el=>{ PositionSVG= el}}>
                        <TestSVG /> 
                    </div>
                </div>

                <div className="StartingCopy " >
                    <div className="ResponsiveContainer">
                        <h1>Section Title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
                    </div>
                 </div>
               

                <div className="panel panel1" ref={el=>{ panel1 = el}}>  
                        <div className="InnerContent" ref={el=>{ inner1 = el}}> 
                            <h1>BIG NUMBER 1</h1>
                        </div>
                        
                </div>
                <div className="panel panel2" ref={el=>{ panel2 = el}}>  
                        <div className="InnerContent">
                            <h1>BIG NUMBER 2</h1>
                        </div>
                 </div>
                <div className="panel panel3" ref={el=>{ panel3 = el}}> 
                        <div className="InnerContent">
                            <h1>BIG NUMBER 3</h1>
                        </div>
                 </div>
            </section>

        )
}
export default Section2