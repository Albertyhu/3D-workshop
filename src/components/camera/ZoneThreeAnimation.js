import React, {useEffect, useState, useRef} from 'react'; 
import styled, {keyframes} from 'styled-components'
import RenderZoneThree from '../AnimationZone/zone3.js'; 
import { Text } from '../global/globalStyleComponents.js'; 

import './ZoneThreeStyle.css'; 

const RenderCameraWork = props => {
    const { level } = props; 
    const ZoneThreeRef = useRef()
    var ZoneThreeElem; 

    var animationDelay = '2s'
    useEffect(() => {
        if (ZoneThreeRef.current) {
            ZoneThreeElem = document.querySelector('.ZoneThree'); 
        }
    }, [ZoneThreeRef.current])

    useEffect(() => {
        ZoneThreeElem = document.querySelector('.ZoneThree'); 
        if (level === 'level3') {
            if (ZoneThreeElem.classList.contains('ZoneThreeSlideToBottomRight'))
                ZoneThreeElem.classList.remove('ZoneThreeSlideToBottomRight')
            if (ZoneThreeElem.classList.contains('ZoneThreeSlideToTopRight'))
                ZoneThreeElem.classList.remove('ZoneThreeSlideToTopRight')
            ZoneThreeElem.classList.add('ZoneThreeSlideFromBottomRight')
        }
        //else if (level === 'level3') {
        //    ZoneThreeElem.classList.remove('ZoneThreeSlideFromBottomRight')
        //    ZoneThreeElem.classList.add('ZoneThreeSlideToTopRight')
        //}
        else {
            ZoneThreeElem.classList.remove('ZoneThreeSlideFromBottomRight')
            ZoneThreeElem.classList.add('ZoneThreeSlideToBottomRight')
        }
    }, [level])

    return (
        <Scene>
            <div
                className="ZoneThree"
                ref={ZoneThreeRef}>
                <RenderZoneThree
                    inView={level == 'level3' ? true : false}
                    duration='2s'
                />
                <Table>
                    <tr>
                        <th colspan = '2'>Skills</th> 
                    </tr>
                    <tr>
                        <td>React JS</td>
                        <td>React Native</td>
                    </tr>
                    <tr>
                        <td>Typescript</td>
                        <td>Redux</td>
                    </tr>
                    <tr>
                        <td>Javscript</td>
                        <td>Git/Github</td>
                    </tr>
                    <tr>
                        <td>HTML5</td>
                        <td>CSS3</td>
                    </tr>
                    <tr>
                        <td>Responsive Design</td>
                        <td>User Experience Design</td>
                    </tr>
                    <tr>
                        <td>Firebase</td>
                        <td>Amazon AWS Amplify</td>
                    </tr>
                </Table>
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

const Table = styled.table`
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    width: 50%;
    margin: auto;
    text-align: center;
    position: fixed;
    top: 25%; 
    left: 0; 
    right: 0;
`
