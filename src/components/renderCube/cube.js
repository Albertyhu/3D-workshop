import React, { useEffect, useRef, useState } from 'react'; 
import styled, { keyframes } from 'styled-components'; 
import './cubeStyle.css'

const RenderCube = props => {
    const {level} = props; 

    return (
        <Scene id = "Scene">
            <Cube id="Cube" className="cube" animationType={level}>
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
animation: ${props => {
switch(props.animationType){
    case 'level1':
        return RotateUp;
        break;
    case 'level2':
        return RotateDown;
        break;
    case 'level3':
        return RotateLeft;
        break; 
    case 'level4':
        return RotateRight;
        break; 
    case 'level0':
        break; 
}}} 2s linear
`

const Cubeface = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    opacity: 0.5;
`

const RotateUp = keyframes`
    0%{
        transform: 
            rotateY(0deg) 
            rotateX(0deg) 
            rotateZ(0deg) ;

}
    50%{
        transform: 
            rotateY(0deg) 
            rotateX(180deg) 
            rotateZ(0deg) ;
}
    100%{
        transform: 
            rotateY(0deg) 
            rotateX(360deg) 
            rotateZ(0deg) ;
}
`
const RotateDown = keyframes`
    0%{
        transform: 
            rotateY(0deg) 
            rotateX(0deg) 
            rotateZ(0deg) ;

}
    50%{
        transform: 
            rotateY(0deg) 
            rotateX(-180deg) 
            rotateZ(0deg) ;
}
    100%{
        transform: 
            rotateY(0deg) 
            rotateX(-360deg) 
            rotateZ(0deg) ;
}
`
const RotateLeft = keyframes`
    0%{
        transform: 
            rotateY(0deg) 
            rotateX(0deg) 
            rotateZ(0deg) ;

}
    50%{
        transform: 
            rotateY(-180deg) 
            rotateX(deg) 
            rotateZ(0deg) ;
}
    100%{
        transform: 
            rotateY(-360deg) 
            rotateX(0deg) 
            rotateZ(0deg) ;
}
`
const RotateRight = keyframes`
    0%{
        transform: 
            rotateY(0deg) 
            rotateX(0deg) 
            rotateZ(0deg) ;

}
    50%{
        transform: 
            rotateY(180deg) 
            rotateX(0deg) 
            rotateZ(0deg) ;
}
    100%{
        transform: 
            rotateY(360deg) 
            rotateX(0deg) 
            rotateZ(0deg) ;
}
`