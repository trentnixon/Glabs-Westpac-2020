import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";


import {FullWidthContainer, Container} from "./Structure/Structure";
import Westpack from "./Application/WestPack2020/index";
import ApplicationFooter from "./Core_Element/ApplicationFooter";
import Footer from "./Core_Element/TemplateFooter";


const Main = ()=>{

    const APP = useSelector(state => state.APP);

    const  preloadImage = (APP)=>
        {
            APP.map((s,i)=>{
                 let img=new Image();
                 img.src= `https://gdn-cdn.s3.amazonaws.com/embed/2020/07/westpac2020/assets${s.HeadShot}`;
            })
                  
    }

    useEffect(()=>{

        preloadImage(APP.APPLICATION[0])


    },[])
    if(APP.APPLICATIONREADY === true){
        return(
            <div id="Main">

                <FullWidthContainer>
                    <Westpack {... APP}/>
               
                    <ApplicationFooter />
                 
                    <Footer {... APP}/>
                </FullWidthContainer> 
            </div>
        )
    }
    
    else{
        return(
            <div id="Main"> Loading  </div>
        )
    }
} 

export default Main