import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import './pyramidStyle.css';
import { genNum } from '../randGen.js'; 

const RenderPyramid = () => {
    return (
        <Scene id = "PyramidScene">
            <Pyramid className="Pyramid">
                <PyramidBase className="Pyramid_base"></PyramidBase>
                <PyramidFace className="PyramidFace PyramidFace-back"></PyramidFace>
                <PyramidFace className="PyramidFace PyramidFace-front"></PyramidFace>
                <PyramidFace className="PyramidFace PyramidFace-left"></PyramidFace>
                <PyramidFace className="PyramidFace PyramidFace-right"></PyramidFace>
                </Pyramid>
        </Scene> 
        )

}

export default RenderPyramid; 

const Scene = styled.div`
    width: 200px; 
    height: 200px; 
    perspective: 300px;
    margin: 0 auto;

`
/*
const rotate = keyframes`
    from{ 
        transform: rotateY(0deg) rotateX(30deg) rotateZ(0deg);
    }
    to{ 
        transform: rotateY(360deg) rotateX(30deg) rotateZ(0deg);
    }
`*/

const rotate = keyframes`
0%{
    transform: rotateY(0deg) rotateX(30deg) rotateZ(0deg); 
}
 100% {
    transform: rotateY(360deg) rotateX(30deg) rotateZ(0deg) ; 
}
`

const Pyramid = styled.div`
    width: 200px; 
    height: 200px; 
    position: relative; 
    transform-style: preserve-3d; 
    transform: translateZ(-50px); 
    animation: ${rotate} 5s linear infinite;
`

const PyramidFace = styled.div`
    opacity: 0.7; 
    position: absolute; 
    width: 0;
    height: 0; 
    border: 100px solid transparent;
    border-bottom: 200px solid red;
    border-top: 0px;
}
`

const PyramidBase = styled.div`
    position: absolute; 
    width: 100%; 
    height: 100%;
    border: 0;
`
