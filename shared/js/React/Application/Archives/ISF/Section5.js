import React, {useEffect, useState,createRef,  useRef} from 'react';

// GSAP
import {Power3, gsap} from 'gsap'
//import { ScrollTrigger } from "gsap/ScrollTrigger"

/*
if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
    gsap.registerPlugin(CSSRulePlugin);
  }
*/


const Gallery=[
    {
        Image:'<%= path %>/images/black-lives-matter-protester.jpg',
        Title:"Arr Title 1",
        Copy:"Arr Copy in here Arr Copy in here Arr Copy in here Arr Copy in here "
    },
   
    {
        Image:'<%= path %>/images/black-lives-matter-protester-1.jpeg',
        Title:"Arr Title 2",
        Copy:"Arr Copy  2 in here Arr Copy 2 in here Arr Copy 2 in here Arr Copy 2 in here "
        
    }
    
]


const Section5 = ()=>{

    //let SingleImageGallery = useRef(null)

    let Section5 = useRef(null)
    let Circle = useRef(null)

    const ImageSrcRef = useRef(Gallery.map(() => createRef()))
    const ImageCopy = useRef(Gallery.map(() => createRef()))
    const ImageCopyH2 = useRef(Gallery.map(() => createRef()))
    const ImageCopyP = useRef(Gallery.map(() => createRef()))
    

    const ImageReveal = (ImageSrc)=>{
        const tl = gsap.timeline();
          tl.fromTo(ImageSrc, 
                { scale:1.8, x:0,  y:80,  ease: "none"}, 
                { scale:1, x:0, y:0,  duration:8, ease: "sine.out" }, "TweenImage")
            .from(ImageSrc, {opacity:0, duration:3}, "TweenImage")
            .to(".Mask", {duration: 1.1, xPercent:100, ease: "none" }, "-=7.5")
        return tl
    }

    const Pulse = ()=>{
        let PulseDuration  = 2;
        const tl = gsap.timeline();
          tl.fromTo(Circle, {scale:0, opacity:0, duration:PulseDuration },{scale:1, opacity:0.5, duration:PulseDuration })
            .fromTo(Circle, {scale:1, opacity:0.5, duration:PulseDuration },{scale:1.5, opacity:0, duration:PulseDuration,ease:"back.out(1.7)" })
        return tl
    }

    const Engulf = (ImageSrc)=>{
        let PulseDuration  = 2;
        const tl = gsap.timeline();
          tl.fromTo(Circle, {scale:0, opacity:0, duration:PulseDuration },{scale:1, opacity:0.5, duration:.5 })
            .fromTo(Circle, {scale:1, opacity:0.5, duration:PulseDuration },{scale:15, opacity:1, duration:PulseDuration, ease:"back.out(1.7)" })
            .to(".Mask", {duration: 0.2, xPercent:0, ease: "none"})
            .to(ImageSrc, {  scale:.1, x:-150, y:150, opacity:0, duration:.5, ease: "none"})
            
            
        return tl;
    }

    const ShowContent = (Title, Para)=>{
        const tl = gsap.timeline({id:"Content"});
            tl.fromTo(Title, {opacity:0 }, {opacity:1, yPercent:-20, duration:1.5,})
              .to(Para, {opacity:.8, yPercent:10, duration:1.9,},"-=1.3")
        return tl
    }

    const HideContent = (Title, Para)=>{
        const tl = gsap.timeline({id:"Content"});
        tl.to(Para, {opacity:0, yPercent:10,  duration:.5},"+=5")
          .to(Title, {opacity:0,yPercent:-20,  duration:.5}, "-=.5")
    return tl
    }

    const LoopDataAdd = (Data)=>{
        const tl = gsap.timeline();
        Data.map((item , i)=>{
               tl.add( ImageReveal(ImageSrcRef.current[i]))
                .add(Pulse().repeat(1), "-=8")
                .add(Engulf(ImageSrcRef.current[i]))
                .add(ShowContent(ImageCopyH2.current[i], ImageCopyP.current[i]), "-=1.8")
                .add(HideContent(ImageCopyH2.current[i], ImageCopyP.current[i]), "+=1")
        })

      // .addPause(2)
        return tl;
    }

    const CreateMaster = (Data)=>{
        const Master = gsap.timeline({repeat:-1});
        Master.add(LoopDataAdd(Data))
        //Master.play("Content")
    }

    useEffect(()=>{
    
        CreateMaster(Gallery)
       
    },[ImageSrcRef])

        return(
            <section className="Section5"   ref={el=>{ Section5 = el}}>
                    <div
                        className="SingleImageGallery"
                    >
                            <div className="Mask"></div>
                            <div id="circle"  ref={el=>{ Circle= el}} >
                                <svg  viewBox="0 0 100 100" >
                                    <circle cx="50" cy="50" r="50" />
                                </svg>
                            </div>
                        
                        {
                            Gallery.map((item, i )=>{
                                return(
                                    <div key={i} >
                                        <div className="Image" ref={el => ImageSrcRef.current[i] = el} >
                                            <img src={item.Image}/>
                                        </div>

                                        <div className="Content" ref={el=>{ ImageCopy.current[i]= el}}>
                                            
                                            <h2 ref={el => ImageCopyH2.current[i] = el}>{item.Title}</h2> 
                                            <p ref={el => ImageCopyP.current[i] = el}>
                                                {item.Copy}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
            </section>
        )
}
export default Section5