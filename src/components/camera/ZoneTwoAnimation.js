import React, {useEffect, useState, useRef} from 'react'; 
import styled, {keyframes} from 'styled-components'
import RenderZoneTwo from '../AnimationZone/zone2.js';
import RenderZoneThree from '../AnimationZone/zone3.js'; 
import { Text } from '../global/globalStyleComponents.js'; 

import './ZoneTwoStyle.css'; 

const RenderCameraWork = props => {
    const { level } = props; 
    const ZoneTwoRef = useRef()
    var ZoneTwoElem; 

    var animationDelay = '2s'
    useEffect(() => {
        if (ZoneTwoRef.current) {
            ZoneTwoElem = document.querySelector('.ZoneTwo'); 
        }
    }, [ZoneTwoRef.current])

    useEffect(() => {
        ZoneTwoElem = document.querySelector('.ZoneTwo'); 
        if (level === 'level2') {
            if (ZoneTwoElem.classList.contains('ZoneTwoSlideToBottomRight'))
                ZoneTwoElem.classList.remove('ZoneTwoSlideToBottomRight')
            if (ZoneTwoElem.classList.contains('ZoneTwoSlideToTopRight'))
                ZoneTwoElem.classList.remove('ZoneTwoSlideToTopRight')
            ZoneTwoElem.classList.add('ZoneTwoSlideFromBottomRight')
        }
        else if (level === 'level3') {
            ZoneTwoElem.classList.remove('ZoneTwoSlideFromBottomRight')
            ZoneTwoElem.classList.add('ZoneTwoSlideToTopRight')
        }
        else {
            ZoneTwoElem.classList.remove('ZoneTwoSlideFromBottomRight')
            ZoneTwoElem.classList.add('ZoneTwoSlideToBottomRight')
        }
    }, [level])

    return (
        <Scene>
            <div
                className="ZoneTwo"
                ref={ZoneTwoRef}>
                <RenderZoneTwo
                    inView={level == 'level2' ? true : false}
                    duration='2s'
                />
                <Text id="ZoneTwoText">I help businesses tackle unique problems with software solutions, establish their online presence and improve the way their customers interact with them on their platforms. </Text>
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
transform-style: preserve-3d;
`

