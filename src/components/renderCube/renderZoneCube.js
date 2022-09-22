import React from 'react'; 
import styled, { keyframes } from 'styled-components'; 
import './cubeStyle.css'

const RenderCube = props => {
    const {
        animationType,
        TranslateX,
        TranslateY,
        TranslateZ,
        RotateX,
        RotateY,
        RotateZ, 
        Scale = "1, 1, 1", 
        duration = '2s', 
    } = props; 

    return (
        <Scene id = "Scene">
            <Cube
                id="Cube"
                className="cube"
                animationType={animationType}
                TranslateX={TranslateX}
                TranslateY={TranslateY}
                TranslateZ={TranslateZ}
                RotateX={RotateX}
                RotateY={RotateY}
                RotateZ={RotateZ}
                Scale={Scale}
                Duration={duration}
            >
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
perspective: 1000px; 
margin: auto;

`
const Cube = styled.div`
width: 100%; 
height: 100%; 
position: relative;
transform-style: preserve-3d;
/*transform: ${props => {
        return "translateX(" + props.TranslateX + ") translateY("
            + props.TranslateY + ") translateZ(" + props.TranslateZ + ") rotateX("
            + props.RotateX + ") rotateY(" + props.RotateY + ") rotateZ(" + props.RotateZ
            + ") scale3d(" + props.Scale + ")"
    }};*/
animation: ${props => props.animationType} ${props => props.Duration} linear;
animation-fill-mode: forwards;
`

const Cubeface = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
   // border: 1px solid #000;
    opacity: 0.5;
`