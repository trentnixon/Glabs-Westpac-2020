import React, {useEffect, useState, useRef} from 'react';


// GSAP
import {TweenMax, Power3, TimelineLite, gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
  }




const Section1 = ()=>{
    
    
    const Ctl = gsap.timeline();
 //   let tl = gsap.timeline();
    let Section1  = useRef(null)
    let AnimationZone = useRef(null)
    let Boxes = useRef(null)
    let Box1  = useRef(null)
    let Box2  = useRef(null)
    let Box3  = useRef(null)
    let Box4  = useRef(null)
    let Circle1 = useRef(null)

    

    useEffect(()=>{
        
        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: Section1,
                pin:Section1,
                toggleActions:"play reverse play reverse",
                id:"AnimationZone",
                start: "top top",
                end: "bottom center",
                scrub: 1,
                markers: true
                
            }
          })

          let Splin = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: Boxes,
                //pin:Boxes,
                toggleActions:"play reverse play reverse",
                id:"SplinZone",
                start: "top 5%",
                end: "bottom center",
                scrub: 1,
                markers: true
                
            }
          })

          
    
    console.log(".offsetLeft", Box1.offsetWidth, Box1.offsetLeft, window.innerWidth)
    
    // Circle
        tl.to( Circle1, 
                {
                    width:400, 
                    height:400
                },
                Power3.easeInOut);

        Splin.to( Box1, { xPercent:102,  yPercent:100, rotation:180 },0 )
        .to( Box2, { xPercent:-102,  yPercent:102, rotation:180 },0)
        .to( Box3, { xPercent:102,  yPercent:-102, rotation:180 },0)
        .to( Box4, { xPercent:-102,  yPercent:-102, rotation:180 },0)

       /*
        ScrollTrigger.create({
            animation:tl,
            toggleActions:"restart pause reverse pause",
           
            trigger: Section1,
            start: "top top",
            end: "bottom 10%",
            markers: true,
            pin:AnimationZone,
            scrub:1,
          });
        */

    },[AnimationZone])

        return(
            <section className="Section1"   ref={el=>{ Section1 = el}}>
                
                    <div
                        className="AnimationZone"
                        ref={el=>{ AnimationZone= el}}
                    >
                         <h1>TITLE IN HERE</h1>
                         <p>ScrollTrigger creates jaw-dropping scroll-based animations with minimal code. Or trigger anything scroll-related, even if it has nothing to do with animation.</p>
                   
                        <div className="Circle1" ref={el=>{ Circle1 = el}}></div>   
                        <div className="boxes" ref={el=>{ Boxes = el}}>
                            <div className="box box1" ref={el=>{ Box1 = el}}>  box 1 </div>
                            <div className="box box2" ref={el=>{ Box2 = el}}>  box 2 </div>
                            <div className="box box3" ref={el=>{ Box3 = el}}>  box 3 </div>
                            <div className="box box4" ref={el=>{ Box4 = el}}>  box 4 </div>
                        </div>        
                        
                </div>
            </section>
        )
}
export default Section1