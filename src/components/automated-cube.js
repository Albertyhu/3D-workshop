import React, { useEffect, useRef, useState } from 'react'; 
import styled from 'styled-components'; 
import './cubeStyle.css'
import { genNum } from './randGen.js'; 

const ROTATIONS = ['front',
    'back',
    'right',
    'left',
    'top',
    'bottom',
]

const RenderAutomatedCube = () => {
    const [AView, setAView] = useState('front'); 
    const [currentClass, setCurrentClass] = useState('show-front'); 
    var newSide = 0; 
    const handleRotate = () => {
        var newNum = 0;
        do {
            newNum = genNum(6);
        } while (newSide === newNum); 
        newSide = newNum; 
        setAView(ROTATIONS[newSide])
    } 

    const CubeRef = useRef(); 
    var ACubeElement;

    useEffect(() => {
        if(CubeRef.current)
            ACubeElement = document.querySelector('.automatedCube');
    }, [CubeRef.current])

    useEffect(() => {
        //this line is necessary because after rotating the cube once, 
        //...for some reason, the app loses reference to the cube element
        ACubeElement = document.querySelector('.automatedCube');

        ACubeElement.classList.remove(currentClass)
        var class_name = `show-${AView}`; 
        setCurrentClass(class_name);
        ACubeElement.classList.add(class_name); 
    }, [AView])

    useEffect(() => {
        var unsubscribe = setInterval(() => { handleRotate() }, 1000)
        return () => { clearInterval(unsubscribe)}
    }, [])

    return (
        <Scene id = "Scene">
            <Cube id="Cube" className = "automatedCube" ref={CubeRef}>
                <Cubeface className="cube_face cube_face-front"></Cubeface>
                <Cubeface className="cube_face cube_face-back"></Cubeface>
                <Cubeface className="cube_face cube_face-left"></Cubeface>
                <Cubeface className="cube_face cube_face-right"></Cubeface>
                <Cubeface className="cube_face cube_face-top"></Cubeface>
                <Cubeface className="cube_face cube_face-bottom"></Cubeface>
            </Cube>
        </Scene>
        )
}

export default RenderAutomatedCube; 

const Scene = styled.div`
width: 200px; 
height: 200px; 
perspective: 600px; 
margin: auto;
`
const Cube = styled.div`
width: 100%; 
height: 100%; 
position: relative;
transform-style: preserve-3d; 
transform: translateZ(-100px);
transition: transform 1s; 
`

const Cubeface = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    opacity: 0.5;
`