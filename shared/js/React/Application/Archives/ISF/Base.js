import React, {useEffect, useState, useRef} from 'react';


// GSAP
import {TweenMax, Power3, TimelineLite, gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
  }


const Section1 = ()=>{

    // Structure REF
    let Section  = useRef(null)
    let Title = useRef(null)
    let SubTitle = useRef(null)
    let Copy = useRef(null)
    
    useEffect(()=>{
        let ScrollSection = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: Section,
                pin:'.Section1',
                id:"Section",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                markers: true
                
            }
          })



    },[])

        return(
            <section className="Section Section1"   ref={el=>{ Section = el}}>
                <div className="ResponsiveContainer">
                    <div className="inner">
                        <h1 ref={el=>{ Title= el}}> Section Title in here</h1>
                        <h2 ref={el=>{ SubTitle= el}}> Section Subtitle in here</h2>
                        <div ref={el=>{ Copy= el}}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
                        </div>
                   
                        <Circles />
                        <AnimateBoxes />

                        <div ref={el=>{ Copy= el}}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Section1



// Section Animations

    // Boxes
    const AnimateBoxes = ()=>{
        
        let AnimateBoxes = useRef(null)
        let Box1  = useRef(null)
        let Box2  = useRef(null)
        let Box3  = useRef(null)
        let Box4  = useRef(null)       
        
        useEffect(()=>{

            let SpinBoxes = gsap.timeline({
                paused: true,
                scrollTrigger: {
                    trigger: AnimateBoxes,
                    id:"SpinBoxes",
                    start: "top center",
                    end: "bottom top",
                    scrub: 1,
                    markers: true
                    
                }
              })

            SpinBoxes.to( Box1, { xPercent:102,  yPercent:100, rotation:180 },0 )
                    .to( Box2, { xPercent:-102,  yPercent:102, rotation:180 },0)
                    .to( Box3, { xPercent:102,  yPercent:-102, rotation:180 },0)
                    .to( Box4, { xPercent:-102,  yPercent:-102, rotation:180 },0)

        })

        return(
            <div className="boxes" ref={el=>{ AnimateBoxes = el}}>
                <div className="box box1" ref={el=>{ Box1 = el}}>  box 1 </div>
                <div className="box box2" ref={el=>{ Box2 = el}}>  box 2 </div>
                <div className="box box3" ref={el=>{ Box3 = el}}>  box 3 </div>
                <div className="box box4" ref={el=>{ Box4 = el}}>  box 4 </div>
            </div>   
        )
    }




  // Circles
const Circles = ()=>{
    let Circle1 = useRef(null)
    let Circle2 = useRef(null)
    let Circle3 = useRef(null)
    let Circle4 = useRef(null)

    useEffect(()=>{

        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '.Section1',
                id:"Circle",
                start: "top top",
                end: "bottom center",
                scrub: 1,
                markers: true
            }
          })

          tl.fromTo([Circle1,Circle2],{yPercent:0}, {yPercent:50}, Power3.easeInOut)
          tl.fromTo([Circle3,Circle4],{yPercent:50}, {yPercent:0}, Power3.easeInOut)
        tl.to( Circle1, { width:"60%", height:"60%", opacity:1}, Power3.easeInOut);
        tl.to( Circle2, { width:800, height:800, opacity:1}, Power3.easeInOut);
        tl.from( Circle3, { width:600, height:600, opacity:0}, Power3.easeInOut);
        tl.from( Circle4, { width:800, height:800, opacity:0}, Power3.easeInOut);

    },[])

    return(
        <>
            <div className="Circle Circle1" ref={el=>{ Circle1 = el}}></div> 
            <div className="Circle Circle2" ref={el=>{ Circle2 = el}}></div> 
            <div className="Circle Circle3" ref={el=>{ Circle3 = el}}></div> 
            <div className="Circle Circle4" ref={el=>{ Circle4 = el}}></div> 
        </>
        
    )
}