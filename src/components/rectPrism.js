import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './rectStyle.css'; 
import { genNum } from './randGen.js'; 
import Pikachu from '../assets/Pikachu.png'; 

const ROTATIONS = [
    'front',
    'back',
    'top',
    'bottom',
    'left',
    'right',
]

const RenderRectPrism = props => {
    const [View, setView] = useState('front');
    const [currentClass, setCurrentClass ] = useState('show-front')
    var currentView = 0; 
    const handleRotate = () => {
        var newView = 0; 
        do {
            newView = genNum(6);
        } while (newView === currentView); 
        currentView = newView; 
        setView(ROTATIONS[currentView])
    }

    var boxElement; 
    const boxRef = useRef(); 

    useEffect(() => {
        if (boxRef.current) {
            boxElement = document.querySelector('.box'); 
        }
    }, [boxRef.current])

    useEffect(() => {
        boxElement = document.querySelector('.box'); 
        boxElement.classList.remove(currentClass); 
        var newClass = `show-${View}`; 
        setCurrentClass(newClass); 
        boxElement.classList.add(newClass)
    }, [View])

    useEffect(() => {
        var unsubscribe = setInterval(() => {
            handleRotate(); 
        }, 1000)
    }, [])

    return (
        <Scene id="Scene">
            <Box id="box" className='box' ref={boxRef}>
                <BoxFace className="box_face box_face-front"><Image src={Pikachu} /></BoxFace>
                <BoxFace className="box_face box_face-back"></BoxFace>
                <BoxFace className="box_face box_face-right"></BoxFace>
                <BoxFace className="box_face box_face-left"></BoxFace>
                <BoxFace className="box_face box_face-top"></BoxFace>
                <BoxFace className="box_face box_face-bottom"></BoxFace>
            </Box>
        </Scene>
        )
}

export default RenderRectPrism; 

const Scene = styled.div`
width: 300px; 
height: 200px;
perspective: 600px; 
margin: 20px auto;
`

const Box = styled.div`
    width: 300px; 
    height: 200px;
    position: relative; 
    transform-style: preserve-3d; 
    transform: translateZ(-50px); 
    transition: transform 1s;
`

const BoxFace = styled.div`
    position: absolute; 
    opacity: 0.5; 
   
&.box_face-front, &.box_face-back{
    width: 300px; 
    height: 200px; 
}
&.box_face-right, &.box_face-left{
    height: 200px; 
    width: 100px; 
    left: 100px; 
}
&.box_face-top, &.box_face-bottom{
    width: 300px; 
    height: 100px; 
    top:50px; 

}

`

const Image = styled.img`
    margin: auto; 
    width: 40%; 
    height: 60%; 
    top: 50%;
`