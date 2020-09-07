// GSAP
import {gsap} from 'gsap'



const AddStage3 = (Stage3RefObj)=>{
    const{Parallax,overlay,layer1,layer2,layer4,layer3}=Stage3RefObj;
    const tl = gsap.timeline();
    tl.fromTo(Parallax, {yPercent:100, duration:.1}, {yPercent:0, duration:.5})
        .from(overlay, {opacity:0, ease: "power3.out", duration:1.2},"-=0.5")
    return tl;
}
const PlayStage3 = (Stage3RefObj)=>{
    const{Parallax,overlay,layer1,layer2,layer4,layer3}=Stage3RefObj;
    const tl = gsap.timeline();
    tl.from(layer1, {yPercent:100, opacity:0, ease: "power3.out", duration:1.9},"-=1.5")
        .from(layer2, {yPercent:100, opacity:0, ease: "power3.out", duration:1.9},"-=1.5")
        .from(layer4, {yPercent:100, opacity:0, ease: "power3.out", duration:1.9},"-=1.5")
        .fromTo(layer3, {yPercent:100, opacity:0, ease: "power3.out", duration:1.9},{yPercent:3, opacity:1,}, "-=.8")
        //.to([overlay,layer1,layer2], {yPercent:3, x:20, opacity:1, ease: "power3.out", duration:8})
        //.to([layer3,layer4], {yPercent:0, opacity:1, ease: "power3.out", duration:8},"-=7")
        
    return tl;
}

const HorizontalMove = (Stage3RefObj)=>{
    const{Parallax,overlay,layer1,layer2,layer4,layer3}=Stage3RefObj;
    const tl = gsap.timeline();
    tl.to([overlay,layer1,layer2], { yPercent:1, scale:1.2, x:20,   ease: "power3.out", duration:8},"MoveH")
        .to([layer3,layer4],       { yPercent:2,            x:30,  ease: "power3.out", duration:8},"MoveH")
        
    return tl;
}

const DestoryStage3 = (Stage3RefObj)=>{
    const{Parallax,overlay,layer1,layer2,layer4,layer3}=Stage3RefObj;
    const tl = gsap.timeline();
    
    tl.to(layer3, {yPercent:100, opacity:0, ease: "power3.out", duration:1.5}, "-=.8")
        .to(layer1, {yPercent:100, opacity:0, ease: "power3.out", duration:1.5}, "-=1.2")
      .to(layer4, {yPercent:100, opacity:0, ease: "power3.out", duration:1.5}, "-=2.2")
      .to(layer2, {yPercent:100, opacity:0, ease: "power3.out", duration:1.5}, "-=1.2")
     
      .to([Parallax, overlay], { opacity:0, ease: "power3.out", duration:1.5}, "-=1.5")
        
    return tl;
}

/* ******  MASTER TL HERE   */
export const Master_Stage3 = (Stage3RefObj)=>{

    const Master = gsap.timeline();

          Master.set(Stage3RefObj.Parallax,{ autoAlpha:1})
          .add(AddStage3(Stage3RefObj))
          .add(PlayStage3(Stage3RefObj),"-=1.5")
          .add(HorizontalMove(Stage3RefObj), "-=.4")
          .add(DestoryStage3(Stage3RefObj), "-=1")
    

    return Master;
}
