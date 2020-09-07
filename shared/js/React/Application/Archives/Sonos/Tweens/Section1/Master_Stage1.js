// GSAP
import {gsap} from 'gsap'



const TweenImageGallery = (Images,RefObj)=>{
    const {ImageRef,ImageContainerRef} = RefObj;
    
    const tl = gsap.timeline();
    
        Images.map((img,i)=>{
            tl.fromTo(ImageContainerRef.current[i], {yPercent:300, opacity:0, scale:0.3, rotate:145} , { yPercent:0, opacity:0.8,scale:1.3, rotate:0, duration:1.1, ease: "power2.out"}, "-=1.5")
                .fromTo(ImageRef.current[i], {scale:1.3, opacity:0.8,duration:0}, {scale:2,opacity:1, duration:5.5, ease: "power2.inOut"}, "-=1")
            })
    return tl;
}




const TweenImageGalleryCopy = (Stage1Text, RefObj)=>{
    const {PRef} = RefObj;
    let move = -100 ;

    const tl = gsap.timeline();
        Stage1Text.map((img,i)=>{
            
        move === 0 ? move=(-PRef.current[i].offsetLeft + 20) : move=0; 
        //top ? top=(-PRef.current[i].offsetTop + 20)
        tl.set(PRef.current[i], {opacity:0})
        .to(PRef.current[i],{x:move, y:(-PRef.current[i].offsetTop + 200)})
        .fromTo(PRef.current[i], 
                        { yPercent:100, opacity:0, scale:0.3, rotate:0} , 
                        { yPercent:0, opacity:1,scale:1, rotate:0, duration:.9, ease: "power2.out"})
        .fromTo(PRef.current[i], 
                        {scale:1,  duration:0}, 
                        {opacity:0, duration:.5, ease: "power2.inOut"}, "+=2.5")

        })
    return tl;
}


const MoveGallery = (RefObj)=>{
    const {ImageGallery} = RefObj;
    const tl = gsap.timeline();

        tl.fromTo(ImageGallery,{xScale:1.5}, {xPercent:50, xScale:1, duration:.9, ease: "power3.inOut"}, "+=3.7")
        .fromTo(ImageGallery, {xScale:1.5}, {xPercent:0, xScale:1,duration:.9, ease: "power3.inOut"}, "+=3.7")
        .fromTo(ImageGallery, {xScale:1.5}, {xPercent:50, xScale:1,duration:.9, ease: "power3.inOut"}, "+=3.7")
        .fromTo(ImageGallery, {xScale:1.5}, {xPercent:0,xScale:1, duration:.9, ease: "power3.inOut"}, "+=3.7")
        
    return tl;
}

const DestroyStage = (RefObj)=>{
    const {ImageGallery,Stage1} = RefObj
    const tl = gsap.timeline();
        tl.to([ImageGallery,Stage1], {scale:0, duration:0.2})
    return tl;
}
 /* **  End Timeline sequences */


/* ******  MASTER TL HERE   */
export const Master_Stage1 = (Images,Stage1Text,RefObj)=>{

    const Master = gsap.timeline();

          Master.set(RefObj.ImageGallery,{opacity:0})
                .to(RefObj.ImageGallery,{opacity:1, duration:0.5})
                .add(TweenImageGallery(Images, RefObj), "Gallery-=.5")
                .add(MoveGallery(RefObj), "Gallery-=.5")
                .add(TweenImageGalleryCopy(Stage1Text, RefObj),"Gallery-=.5")
                .add(DestroyStage(RefObj))

    return Master;
}
 