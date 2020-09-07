import React , { useState,useEffect,useRef,createRef, useMemo }from 'react';
import {gsap} from 'gsap'

const ProgressBar = (props)=>{
    const {Audio} = props;

    const [progress, setProgress] = useState(0)

    const ProgressTicker = ()=>{
        //console.log("Progress Test", Audio.AudioRef.currentTime , Audio.AudioRef.duration)
        if(Audio.AudioRef === null){
            gsap.ticker.remove(ProgressTicker);
        }
        else{
            setProgress((Audio.AudioRef.currentTime/Audio.AudioRef.duration)*100)
        }
        
    }
    useEffect(()=>{
        gsap.ticker.add(ProgressTicker);
    })

    return(
        <div className="ProgressBar" style={ {width: `${progress}vw`}} > </div>
    )
}

export default ProgressBar;