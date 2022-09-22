import React from 'react';
import styled, { keyframes } from 'styled-components';
import './pyramidStyle.css';

const RenderPyramid = props => {
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
        <Scene
            id="PyramidScene"
        >
            <Pyramid
                className="Pyramid"
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
    perspective: 1000px;
    margin: auto;

`

const Pyramid = styled.div`
    width: 200px; 
    height: 200px; 
    position: relative; 
    transform-style: preserve-3d; 
    transform: transform: ${props => {
            return "translateX(" + props.TranslateX + ") translateY("
                + props.TranslateY + ") translateZ(" + props.TranslateZ + ") rotateX("
                + props.RotateX + ") rotateY(" + props.RotateY + ") rotateZ(" + props.RotateZ
                + ") scale3d(" + props.Scale + ")"
        }}; 
    animation: ${props => props.animationType} ${props => props.Duration} linear;
    animation-fill-mode: forwards;
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
