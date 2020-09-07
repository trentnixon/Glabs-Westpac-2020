import {gsap, Back} from 'gsap'

export const toggleAudioPosition = (RefObj)=>{

    const {AudioButton} = RefObj;
    let AudioPosition = gsap.timeline({ paused: false })
    //let easeThis = "Back.easeInOut.config(1.7)";

    AudioPosition.to(AudioButton, { x:0,y:(AudioButton.offsetTop/2), duration:1, ease: Back.easeInOut.config(1)},"+=2")
    .to(AudioButton, { x:0,y:-AudioButton.offsetTop, duration:1,ease: Back.easeInOut.config(1) },"+=23");
    
    return AudioPosition
}