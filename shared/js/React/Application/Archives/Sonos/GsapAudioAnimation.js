import React, {useEffect, useState, useRef} from 'react';
// GSAP
import { gsap} from 'gsap'
// Audio Animations
import Audio_Stage_1 from "./AudioPlayer/Audio_Stage_1";

// Icons
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import SpeakerGroupIcon from '@material-ui/icons/SpeakerGroup';
const Sonos = ()=>{

    const [DisplaySection, setDisplaySection] = useState(0)

    const AudioComponents=[
        <Landing  setAudio={setDisplaySection} DisplaySection={DisplaySection}/>,
        <Audio_Stage_1 setAudio={setDisplaySection}/>,
        <Audio_Stage_1 setAudio={setDisplaySection}/>,
        <Audio_Stage_1 setAudio={setDisplaySection}/>
    ]

    
    const [Selected, setSelected] = useState(AudioComponents[0]);
    const SelectLayout = ()=>{  setSelected(AudioComponents[DisplaySection]); }

   useEffect(()=>{ SelectLayout();  },[DisplaySection])

    return(
        <section className="Section Section1">
            <div className="Inner">
                {Selected}
            </div>
        </section>
    )
}
export default Sonos;



let LandingMaster = gsap.timeline({ paused: true, })


const Landing = (props)=>{

    const CreateMaster = ()=>{
        LandingMaster.set("#List, .TransitionContainer, .LandingCTA", { autoAlpha:1})
        .set(".TransitionCircle", {scale:1000})
        .fromTo(".TransitionCircle", {scale:1000}, {scale:1, duration:1.1, ease: "power4.out" }, "+=1")
        .to(".TransitionCircle", {scale:1, y:1000, ease:"back.in(1)"},"+=.3")
        .from("#List li", { opacity:0, y:50, duration:.8, stagger:{each:.4}},"IntroCTA+=.5")
        .fromTo(".LandingTitle", { opacity:0, y:-50}, { opacity:1, y:0, duration:1.1},"IntroCTA")
    }

    const SelectOption = (num)=>{

        //LandingMaster.progress(1).reverse();

        console.log("Timeout", (LandingMaster.totalDuration()*1000), LandingMaster.totalDuration())
        
        setTimeout( () => { 

            console.log("Set this after ", LandingMaster.totalDuration(), "Seconds")

            LandingMaster.clear()

            props.setAudio(num)

        }, (LandingMaster.progress(1).reverse().totalDuration()*1000))
       
    }
    //useEffect(()=>{  },[])
    useEffect(()=>{  
        CreateMaster() 
            if(props.DisplaySection === 0){ 
                    LandingMaster.play() 
            } 

    },[props.DisplaySection])

    return(
        <div className="Landing">
            <div className="LandingCTA">
                
                <h1 className="LandingTitle" >Select a Audio Clip from the Demo</h1> 
                
                <ul id="List">
                    <li>
                           
                            <button onClick={()=>{SelectOption(1)}}>
                                <AudiotrackIcon />
                                Audio Clip 1
                            </button>
                    </li>
                    <li>
                            
                            <button onClick={()=>{SelectOption(2)}}>
                            <GraphicEqIcon />
                                Audio Clip 2
                            </button>
                    </li>
                    <li>
                            
                            <button onClick={()=>{SelectOption(3)}}>
                            <SpeakerGroupIcon />
                                Audio Clip 3
                            </button>
                    </li>
                </ul>
            </div>
            

                
            <div className="TransitionContainer">
                <div className="TransitionCircle">
                </div>
            </div>
                
        </div>
    )
}