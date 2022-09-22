import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './pyramidStyle.css';
import { genNum } from './randGen.js'; 

const RenderPyramid = () => {
    return (
        <Scene id = "PyramidScene">
            <Pyramid className="Pyramid">
                <PyramidFace className="PyramidFace PyramidFace-front"></PyramidFace>
                <PyramidFace className="PyramidFace PyramidFace-back"></PyramidFace>
                <PyramidFace className="PyramidFace PyramidFace-bottom"></PyramidFace>
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
`

const Pyramid = styled.div`
    width: 200px; 
    height: 200px; 
    position: relative; 
    transform-style: preserve-3d; 
    transform: translateZ(-50px); 
    transition: transform 1s; 
`

const PyramidFace = styled.div`
    opacity: 0.5; 
    position: absolute; 
    width: 0;
    height: 0; 
    
}
`