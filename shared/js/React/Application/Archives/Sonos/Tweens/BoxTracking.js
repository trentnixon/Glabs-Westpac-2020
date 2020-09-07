import {gsap} from 'gsap'

export const CreateTrackingBox = (RefObj)=>{

    const {TrackingBox} = RefObj;
    //console.log("TRACKING BOX", RefObj)
    const Master = gsap.timeline();

    Master.set(TrackingBox, {opacity:0, x:0, y:0, scale:0,} )
    .to(TrackingBox, {opacity:1,scale:55, backgroundColor:"#313131", x:0, y:0, rotate:180, duration:.5})
    .to(TrackingBox, {opacity:1,scale:0, backgroundColor:"#111111", x:0, y:0, rotate:-180, duration:.5}, "+=.5")
    .to(TrackingBox, {x:100, scale:1, y:-200, rotate:90, duration:1},"+=1")
    .to(TrackingBox, { x:200, y:-250, rotate:90, duration:3})
    .to(TrackingBox, { x:600, y:-100, rotate:40, duration:4})
    .to(TrackingBox, { x:120, y:-500, rotate:120, duration:2})
    .to(TrackingBox, { x:700, y:300, rotate:180, duration:4})
    .to(TrackingBox, { x:20, y:100, rotate:45, scale:1.3, duration:6})
    .to(TrackingBox, { x:320, y:230, rotate:10,scale:1.8, duration:3})
    .to(TrackingBox, { x:0, y:0, rotate:0, borderRadius:100, scale:.3,backgroundColor:"#82e6e0", duration:7})
    .to(TrackingBox, { x:0, y:0, rotate:0,scale:50,backgroundColor:"#caced3", duration:.9},"=+1.5")
    .to(TrackingBox, { x:230, y:-230, rotate:0,opacity:0, scale:0.2, duration:.5}, "+=1")
    .to(TrackingBox, { x:120, y:30, rotate:120, scale:0.5, opacity:1, duration:.1})
    .to(TrackingBox, { x:10, y:140, rotate:180, opacity:1, backgroundColor:"#b04650",  scale:1,duration:1}, "+=4")
    .to(TrackingBox, { x:-230, y:430, scale:100,  rotate:0, backgroundColor:"#7c9fff",   duration:1.5},"+=3")
    .to(TrackingBox, {  backgroundColor:"#234fc7", duration:1.5},"+=1")
    .to(TrackingBox, {  backgroundColor:"#9723c7", duration:1.5},"+=1")
    .to(TrackingBox, {  backgroundColor:"#c72386", duration:1.5},"+=1")
    .to(TrackingBox, {  backgroundColor:"#c72323", duration:1.5},"+=1")
    .to(TrackingBox, {  backgroundColor:"#c79423", duration:1.5},"+=1")
    .to(TrackingBox, {  backgroundColor:"#b6c723", duration:1.5},"+=1")
    .to(TrackingBox, {  backgroundColor:"#2dc723", duration:1.5},"+=1")
    .to(TrackingBox, {  backgroundColor:"#237cc7", duration:1.5},"+=1")
    .to(TrackingBox, {  backgroundColor:"#313131", x:0,y:0, scale:1, duration:1.5},"+=1")

    return Master
}