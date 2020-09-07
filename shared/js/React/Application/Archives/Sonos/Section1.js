import React, {useEffect, useState, useRef} from 'react';
// GSAP
import { gsap} from 'gsap'
import Section1 from "./AudioPlayer/Section1";

const Sonos = ()=>{

    const [DisplaySection, setDisplaySection] = useState(0)

    const AudioComponents=[
        <Landing  setAudio={setDisplaySection} DisplaySection={DisplaySection}/>,
        <Section1 setAudio={setDisplaySection}/>,
        <Section1 setAudio={setDisplaySection}/>,
        <Section1 setAudio={setDisplaySection}/>
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



let Master = gsap.timeline({ paused: false })
const Landing = (props)=>{

    const CreateMaster = ()=>{
        Master.from("#List li", { opacity:0, y:100, duration:.8, stagger:{each:.4}})
    }

    const SelectOption = (num)=>{

        Master.progress(1).reverse();

        setTimeout( () => { 
            props.setAudio(num)
            console.log("Set this after ", Master.totalDuration(), "Seconds")
        }, (Master.totalDuration()*1000))
       
    }
    useEffect(()=>{ CreateMaster()  },[])
    useEffect(()=>{  if(props.DisplaySection === 0){ Master.progress(0).play() } },[props.DisplaySection])

    return(
        <>
            <h1>Select a Audio Clip</h1> 
                <ul id="List">
                    <li>
                            <button onClick={()=>{SelectOption(1)}}>
                                Audio Clip 1
                            </button>
                    </li>
                    <li>
                            <button onClick={()=>{SelectOption(2)}}>
                                Audio Clip 2
                            </button>
                    </li>
                    <li>
                            <button onClick={()=>{SelectOption(3)}}>
                                Audio Clip 3
                            </button>
                    </li>
                </ul>
        </>
    )
}