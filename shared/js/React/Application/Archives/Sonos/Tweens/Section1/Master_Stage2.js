// GSAP
import {gsap} from 'gsap'

const PlayStage2=()=>{
    const tl = gsap.timeline();
   
    tl.from("#bowl", 1, {x:-400, opacity:0, ease: "power3.out", duration:1} )
        .from("#sushi_1",1, {y:-400, opacity:0, rotate:-70, transformOrigin:"50% 50%",  ease: "bounce.out" }, "+=.5")
        .from("#sushi_2",1, {y:-300, opacity:0, rotate:-120, transformOrigin:"50% 50%",  ease: "bounce.out" }, "+=.1")
        .from("#chopstick_1", .7, {y:-800, opacity:0, rotate:-80, transformOrigin:"50% 50%",  ease: "bounce.out" }, )
        .from("#chopstick_2",.5, {y:-800, opacity:0, rotate:-80, transformOrigin:"50% 50%",  ease: "bounce.out" }, "-=.8")
        .from("#bg2",1, {y:-5, opacity:0, scale:0.1, transformOrigin:"50% 50%",  ease: "power3.out" }, "-=.5")
        .from("#bg1",1, { opacity:0, scale:0.1, transformOrigin:"50% 50%",  ease: "power3.out" }, "-=1.5")
        .from("#Path_7",1, { opacity:0, scale:0.1, transformOrigin:"50% 50%",  ease: "power3.out"}, "-=1.5")
        
    return tl;
}


const AddStage2 = (SushiBG)=>{
  
    const tl = gsap.timeline();
    tl.fromTo(SushiBG, {yPercent:100,  duration:.1}, {yPercent:0, duration:.5}, "-=0.5")
    return tl;
}


const DestroyStage2 = (SushiBG)=>{
    const tl = gsap.timeline();
    tl.to(SushiBG, {yPercent:-100, opacity:0, ease: "power3.out", duration:1} )
    return tl;
}

/* ******  MASTER TL HERE   */
export const Master_Stage2 = (Stage2RefObj)=> {
    
    console.log("Stage2Sushi", Stage2RefObj)
    
    const {SushiBG} = Stage2RefObj
    
    const Master = gsap.timeline();
        Master.set(SushiBG,{ autoAlpha:1})
        .add(AddStage2(SushiBG))
               .add(PlayStage2())
              .add(DestroyStage2(SushiBG), "=+2")
    return Master;
}

