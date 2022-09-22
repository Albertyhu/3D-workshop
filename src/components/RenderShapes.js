import React, { useState } from 'react';
import RenderCube from './cube.js';
import styled, { keyframes } from 'styled-components'
import RenderAutomatedCube from './automated-cube.js';
import RenderRectPrism from './rectPrism2.js';
import RenderSpinningCube from './spinning_cube/spinning_cube.js';
//import RenderPyramid from './old_pyramid/components/pyramid.js'; 
import RenderPyramid from './pyramid/pyramid.js';

function RenderShapes() {
    const [View, setView] = useState('front')

    const handleRotate = (val) => {
        setView(val)
    }


    return (
        <MainContainer className="App">
            <Wrapper>
                <RenderCube View={View} />
                <ButtonContainer>
                    <Button className="Button" onClick={() => handleRotate('front')}>Front</Button>
                    <Button className="Button" onClick={() => handleRotate('back')}>Back</Button>
                    <Button className="Button" onClick={() => handleRotate('right')}>Right</Button>
                    <Button className="Button" onClick={() => handleRotate('left')}>Left</Button>
                    <Button className="Button" onClick={() => handleRotate('top')}>Top</Button>
                    <Button className="Button" onClick={() => handleRotate('bottom')}>Bottom</Button>
                </ButtonContainer>
            </Wrapper>
            <Wrapper>
                <AnimationCont>
                    <RenderAutomatedCube />
                </AnimationCont>
            </Wrapper>
            <Wrapper>
                <AnimationCont id='PyramindContainer'>
                    <RenderPyramid />
                </AnimationCont>
            </Wrapper>
            <Wrapper>
                <AnimationCont>
                    <RenderSpinningCube />
                </AnimationCont>
            </Wrapper>
        </MainContainer>
    );
}

export default RenderShapes;

const MainContainer = styled.div`
    width: 100%; 
    height: 100%;
    text-align: center;
  //  overflow-y: scroll; 
  //  scroll-snap-type: y mandatory;
  //  scroll-padding-top: 15vh; 

`
const Shell = styled.div`
margin: auto; 
width: 100%;

`

const SceneTransform = keyframes`
    0%{
        transform: translateZ(-200px); 
    }
    50%{
        transform: translateZ(200px); 
    }
    100%{
        transform: translateZ(-200px); 
    }
`

const Wrapper = styled.div`
    width: 200px; 
    height: 150px; 
    perspective: 300px;
    margin: 0 auto;
   // scroll-snap-align: center; 
`

const AnimationCont = styled.div`
    margin: 500px auto;

&#PyramindContainer{
    position: relative;
    transform-style: preserve-3d;  
    transform: translateZ(-150px); 
    animation: ${SceneTransform} 2s linear infinite;
    
}
`

const ButtonContainer = styled.div`
    display: flex; 
    margin: 20px auto;
`
const Button = styled.div`
    width: fit-content; 
    border-radius: 25px; 
    user-select: none;
    cursor: pointer; 
    margin: 10px auto;
    padding: 10px 20px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
&:active{
    transform: translate(5px, 5px)
}

`