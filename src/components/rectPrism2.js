import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './rectStyle2.css';
import { genNum } from './randGen.js'; 

const ROTATION = [
    "front",
    "back",
    "top",
    "bottom", 
    "left",
    "right",
]

const RenderRectPrism = () => {
    const [View, setView] = useState('front'); 
    const [currentView, setCurrentView] = useState('show-front'); 
    const boxRef = useRef(); 

    var boxElement; 
    var currentNum = 0; 
    const handleRotate = () => {
        var newNum = 0
        do {
            newNum = genNum(6)
        } while (currentNum === newNum)
        currentNum = newNum; 
        setView(ROTATION[currentNum])
    }

    useEffect(() => {
        if (boxRef.current) {
            boxElement = document.querySelector('.box2')
        }
    }, [boxRef.current])
    useEffect(() => {
        boxElement = document.querySelector('.box2')
        boxElement.classList.remove(currentView); 
        var newSide = `show-${View}`; 
        setCurrentView(newSide)
        boxElement.classList.add(newSide); 
    }, [View])

    useEffect(() => {
        var unsubscribe = setInterval(() => { handleRotate() }, 1000)
        return () => { clearInterval(unsubscribe)}
    }, [])
    return (
        <Scenic id = "Scenic">
            <Box className="box2" id="box2" ref={boxRef}>
                <BoxFace className="BoxFace2 BoxFace-front"></BoxFace> 
                <BoxFace className="BoxFace2 BoxFace-back"></BoxFace>
                <BoxFace className="BoxFace2 BoxFace-top"></BoxFace>
                <BoxFace className="BoxFace2 BoxFace-bottom"></BoxFace>
                <BoxFace className="BoxFace2 BoxFace-left"></BoxFace>
                <BoxFace className="BoxFace2 BoxFace-right"></BoxFace>

            </Box> 
        </Scenic>
        )
}

export default RenderRectPrism; 

const Scenic = styled.div`
    width: 400px;
    height: 600px;
    perspective: 600px; 
    margin: 20px auto; 
`

const Box = styled.div`
   width: 400px; 
    height: 600px; 
    position: relative; 
    transform-style: preserve-3d; 
    transform: translateZ(-250px); 
   transition: transform 1s; 
`

const BoxFace = styled.div`
    position: absolute; 
    opacity: 0.5;
&.BoxFace-front, &.BoxFace-back {
    width: 400px; 
    height: 600px; 
}
&.BoxFace-top, &.BoxFace-bottom{
    width: 400px; 
    height: 500px;
    top: 50px;
}
&.BoxFace-left, &.BoxFace-right{
    width: 500px;
    height: 600px; 
    left: -50px;
}
`