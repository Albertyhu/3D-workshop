import React, {useEffect, useState, useRef} from 'react'; 
import styled, {keyframes} from 'styled-components'
import RenderZoneOne  from '../AnimationZone/zone1.js';
import RenderZoneTwo from '../AnimationZone/zone2.js';
import RenderZoneThree from '../AnimationZone/zone3.js'; 
import './ZoneOneStyle.css'; 
import {
    Text,
    HalfPageMarker,
} from '../global/globalStyleComponents.js'; 

const RenderCameraWork = props => {
    const { level, textPosition } = props; 
    const ZoneOneRef = useRef()
    var ZoneOneElem; 
    var TextElem; 
    var animationDelay = '2s'
    useEffect(() => {
        if (ZoneOneRef.current) {
            ZoneOneElem = document.querySelector('.ZoneOne'); 
        }
    }, [ZoneOneRef.current])

    useEffect(() => {
      //  console.log('level = ' + level)
        ZoneOneElem = document.querySelector('.ZoneOne'); 
        TextElem = document.querySelector("#ZoneOneText"); 
        if (level === 'level1') {
            if (ZoneOneElem.classList.contains('ZoneOneInScreen_noAnimation')) {
                ZoneOneElem.classList.remove('ZoneOneInScreen_noAnimation');
                ZoneOneElem.classList.add('ZoneOnePanTowards');
                TextElem.classList.add('textPanBack'); 
            }

            if (ZoneOneElem.classList.contains('ZoneOneOffScreen')) {
                ZoneOneElem.classList.remove('ZoneOneOffScreen')
                ZoneOneElem.classList.add('ZoneOneInScreen')
            }
        }
        else if (level === 'level0') {
            ZoneOneElem.classList.remove('ZoneOneInScreen')
            ZoneOneElem.classList.add('ZoneOneInScreen_noAnimation')
        }
        else {
            ZoneOneElem.classList.remove('ZoneOneInScreen')
            ZoneOneElem.classList.remove('ZoneOnePanTowards');
            TextElem.classList.remove('textPanBack'); 
            ZoneOneElem.classList.remove('ZoneOneInScreen_noAnimation'); 
            ZoneOneElem.classList.add('ZoneOneOffScreen')

        }
    }, [level])

    return (
        <Scene>
            <div
                className="ZoneOne ZoneOneInScreen_noAnimation"
                ref={ZoneOneRef}>
                <RenderZoneOne
                    inView={level == 'level1' || level == 'level0' ? true : false}
                    animationDelay={animationDelay}
                />
                <Text
                    id="ZoneOneText"
                    TextPosition={textPosition}
                >It is more important ever that businesses stay up to date on modern technology trends in order to stay competitive.</Text>
            </div>
        </Scene>
        )
}

export default RenderCameraWork;

const Scene = styled.div`
width: 100%; 
height: 100%; 
perspective: 1000px; 
position: absolute;
`

export const AnimatedText = styled.div`
 transform-style: preserve-3d; 
 animation-fill-mode: forwards;
`

const Pan = keyframes`
0%{
    transform: translateZ(0px); 
}
100%{
    transform: translateZ(200px); 
}
`

//Using the styled components to construct the ZoneOne div doesn't work. 
//I have to use the traditional way to write the div element.
const ZoneOne = styled.div`
    height: 100%;
    width: 100%;
    transform-style: preserve-3d; 
    animation: ${props => props.animationType} ${props => props.Duration || '2s'} linear;
    animation-fill-mode: forwards;
`

const ZoneOneTranslateX = '1000px'; 
const ZoneOneTranslateY = '-1000px'; 
const ZoneOneTranslateZ = '-100px';  

const ZoneOneInScreen = keyframes`
0%{
    transform: 
        translateZ(${ZoneOneTranslateZ})
        translateX(${ZoneOneTranslateX})
        translateY(${ZoneOneTranslateY}};
}
80%{
    transform: 
        translateZ(${ZoneOneTranslateZ})
        translateX(0px)
        translateY(0px);
}
100%{
    transform: 
        translateZ(0px)
        translateX(0px)
        translateY(0px);
}
`

const ZoneOneOffScreen = keyframes`
0%{
    transform: 
        translateZ(0px) 
        translateX(0px)
        translateY(0px);
}
20%{
    transform: 
        translateZ(${ZoneOneTranslateZ})
        translateX(0px)
        translateY(0px);
}
100%{
    transform: 
        translateZ(${ZoneOneTranslateZ})
        translateX(${ZoneOneTranslateX})
        translateY(${ZoneOneTranslateY}};
}
`
