import {gsap, Back} from 'gsap'

export const toggleControls = (RefControls)=>{
    
    //console.log("toggleControls", RefControls.AudioButton)
   
    let AudioControls = gsap.timeline({ paused: false })
    let easeThis = "Back.easeInOut.config(1.7)";

    AudioControls.set(RefControls.AudioButton,{ autoAlpha:1})
            .fromTo(RefControls.StopAudio,  {opacity:0, scale:0, x:100, duration:0}, {opacity:1,scale:1,  x:0,  duration:.9, ease: Back.easeInOut.config(3)}) 
            .fromTo(RefControls.SessionKill, {opacity:0,scale:0, x:-100, duration:0}, {opacity:1,scale:1, x:0, duration:.9, ease: Back.easeInOut.config(3) },0)
            .fromTo(RefControls.back5,      {opacity:0,scale:0, x:100, duration:0}, {opacity:1,  scale:1, x:0,  duration:.9, ease: Back.easeInOut.config(3)},"timeshift-=.6") 
            .fromTo(RefControls.forward5,   {opacity:0,scale:0, x:-100, duration:0}, {opacity:1, scale:1, x:0, duration:.9, ease: Back.easeInOut.config(3) },"timeshift-=.6") 
            
            return AudioControls
}