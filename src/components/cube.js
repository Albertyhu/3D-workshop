import React, { useEffect, useRef, useState } from 'react'; 
import styled from 'styled-components'; 
import './cubeStyle.css'

const RenderCube = props => {
    const { View } = props; 
    const [currentClass, setCurrentClass] = useState('show-front'); 


    const CubeRef = useRef(); 
   // var CubeElement = document.querySelector('.cube');
    var CubeElement;

    useEffect(() => {
        if(CubeRef.current)
            CubeElement = document.querySelector('.cube');
    }, [CubeRef.current])
    useEffect(() => {
        //this line is necessary because after rotating the cube once, 
        //...for some reason, the app loses reference to the cube element
        CubeElement = document.querySelector('.cube');

        CubeElement.classList.remove(currentClass)
        var class_name = `show-${View}`; 
        setCurrentClass(class_name);
        CubeElement.classList.add(class_name); 

    }, [View])

    return (
        <Scene id = "Scene">
            <Cube id="Cube" className = "cube" ref={CubeRef}>
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

export default RenderCube; 

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