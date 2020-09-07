import React, {useEffect, useState,createRef,  useRef} from 'react';

import BaseSVG from "./SVG/testsvg"

// GSAP
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
  }



const MiniContainer = ()=>{

    let Cover = useRef(null);  

    useEffect(()=>{},[])
        return(
            <section className="Section Section1">
                <div className="ResponsiveContainer">
                  
                        <h1 > Section Title in here</h1>
                        <h2 > Section Subtitle in here</h2>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <AnimateBoxes Cover={Cover}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
                        </div>
                        <div className="Cover" ref={el => Cover = el}></div>
                </div>
            </section>
        )
}
export default MiniContainer

// <Circles />



const  Icons = [
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    },
    {
        icon:<BaseSVG />,
        title:"Title",
        copy:"This is copy"
    }
]

// Section Animations

    // Boxes
    const AnimateBoxes = (props)=>{
        
        let AnimateBoxes = useRef(null);     
        const MiniItem = useRef(Icons.map(() => createRef()))
        const MiniFakeButton = useRef(Icons.map(() => createRef()))
        
        const MiniFadein = ()=>{
            const tl = gsap.timeline({id:"Fadein"});
            
                tl.fromTo('.box', 
                            {opacity:0, y:20, scale:.4, rotation:-5}, 
                            { stagger: { each: 0.12 }, opacity:1, y:0, scale:1, rotation:0 ,ease: "power3.inOut" },
                            0.2 )
            return tl;
        }
        
        const OnHover = (Hover)=>{
            gsap.to(Hover,{  scale:1.05,  duration: 0.5, fill:"#414141",ease: "power3.out"} )
           // gsap.to(AnimateBoxes, {backgroundColor:"rgba(0,0,0,0.7) "})

        }
    
        const onMouseLeave = (miniItem)=>{
            gsap.to(miniItem,{ scale:1, fill:"black",duration: 0.5, ease: "power3.out"})
           // gsap.to(AnimateBoxes, {backgroundColor:"rgba(255,255,255,1)"})
        }

        const OnClick = (button)=>{
          
            let CardHeight = 300, CardWidth = 300; 
            let w = AnimateBoxes.getBoundingClientRect().width;
            let h = window.innerHeight;
        
            gsap.to(button, 
                    { 
                        position:"absolute",
                        width:CardWidth,
                        height:CardHeight,
                        rotate:90, 
                        duration:.8,
                        zIndex:100,
                        transformOrigin:"50% 50%",
                        x:(w/2-button.getBoundingClientRect().left+(CardWidth/2)),
                        y:(h/2-button.getBoundingClientRect().top+(CardHeight/2))
                    })
        
        }

        useEffect(()=>{

            let AddMiniItem = gsap.timeline({
                paused: true,
                scrollTrigger: {
                    trigger: AnimateBoxes,
                    id:"Mini Item",
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true,
                    markers: true
                    
                }
              })

              AddMiniItem.add(MiniFadein())
       

        })

        return(
            <div className="boxes" ref={el=>{ AnimateBoxes = el}}>
                {
                    Icons.map((icon, i)=>{
                        return(
                            <div key={i} className="box " 
                                    ref={el => MiniItem.current[i] = el} 
                                    onMouseLeave={()=>{onMouseLeave(MiniItem.current[i])}} 
                                    onMouseEnter={ ()=>{OnHover(MiniItem.current[i])} }
                                    
                            >
                                {icon.icon}

                          
                                <div 
                                    className="FakeButton"
                                    onClick={()=>{OnClick(MiniFakeButton.current[i], i);}}
                                    ref={el => MiniFakeButton.current[i] = el} 
                                >
                                        Fake Button
                                </div>

                                <h1> {icon.title}</h1>
                                <p> {icon.copy}</p>
                            </div>
                        )
                    })
                }
            </div>   
        )
    }