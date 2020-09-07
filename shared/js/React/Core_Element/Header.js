import React, {useEffect, useState} from 'react';
import Titles from "./Title";


const Header = (props)=>{
    const [image, setImage] = useState();
    let [BottomMargin, SetMargin ] = useState(0);
    //   
    const HeaderStyles = {
        backgroundImage: `url(<%= path %>/images/${image})`,
        marginBottom:BottomMargin,
        backgroundSize:'cover',
        backgroundPosition: 'center center'
      };

    useEffect(()=>{
        //console.log("Header", props.Meta.Header)
        let ReturnHeight = Math.floor(document.getElementById('MainTitle').clientHeight*1.2);
        SetMargin(Math.floor(ReturnHeight)) 
        setImage(props.Meta.Header)
    })
    return(
        <div id="Header" style={HeaderStyles}>
            <div className="FlexHeader">
                <div id="BG_Image_Container"  style={HeaderStyles}></div>
                <Titles Title={props.Meta.Title} SubTitle={props.Meta.SubTitle}/>
            </div>
        </div>
    )
}

export default Header;