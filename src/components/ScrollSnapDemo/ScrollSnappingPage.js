import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components';
import RenderCube from '../renderCube/cube.js'; 
import RenderZoneOne from '../AnimationZone/zone1.js'; 
import RenderZoneTwo from '../AnimationZone/zone2.js'; 
import RenderZoneThree from '../AnimationZone/zone3.js'; 
import RenderZoneOneCamera from '../camera/ZoneOneAnimation.js'; 
import RenderZoneTwoCamera from '../camera/ZoneTwoAnimation.js'; 
import RenderZoneThreeCamera from '../camera/ZoneThreeAnimation.js'; 
import RenderProjectPanel from '../project_panel/projectIndex.js'; 

const RenderScrollSnappingPage = () => {
    const [level, setLevel] = useState('level0'); 
    const [position, setPosition] = useState('absolute') 
    const ContainerRef = useRef();
    var MainContElem; 
    var MainContElemHeight;
    var SectionHeight; 
    const SectionZeroRef = useRef(); 
    const SectionOneRef = useRef(); 
    const SectionTwoRef = useRef(); 
    const SectionThreeRef = useRef(); 
    const SectionFourRef = useRef(); 

    var FixedMarkerElem; 
    const [FixedMarkerHeight, setMarkerHeight] = useState(0); 

    var SectionOneMarkerElem; 
    const [MarkerOneHeight, setMarkerOneHeight] = useState(0);

    var rootMarginVal = '800px'

    const thresholdLevel = 0.5; 

    var SectionZero; 
    var SectionOne; 
    var SectionTwo; 
    var SectionThree; 
    var SectionFour; 

    const scrollEvent = event => {
       // FixedMarkerElem = document.querySelector('#HalfPageMarker');
       // var marker_height = FixedMarkerElem.getBoundingClientRect().top; 
       //// console.log('marker height: ' + marker_height)
       // setMarkerHeight(marker_height);
       // SectionOneMarkerElem = document.querySelector('#SectionOneMarker')
       // var SectionOne_markerHeight = SectionOneMarkerElem.offsetTop; 
       // setMarkerOneHeight(SectionOne_markerHeight); 

        if (MainContElem.scrollTop < 1009) {
            setPosition('absolute');
        }
        else {
            setPosition('fixed');
        }
        if (MainContElem.scrollTop < MainContElemHeight/5) {
            setLevel('level0');
        }
        if (SectionOne.getBoundingClientRect().top <= 0) {
            setLevel('level1')
        }
        if (SectionTwo.getBoundingClientRect().top <= 0) {
            setLevel('level2')
        }
        if (SectionThree.getBoundingClientRect().top <= 0) {
            setLevel('level3')
        }
        if (SectionFour.getBoundingClientRect().top <= 0) {
            setLevel('level4')
        }
    }

    useEffect(() => {
        if (ContainerRef.current) {
            MainContElem = document.querySelector('#container'); 
            MainContElem.addEventListener('scroll', scrollEvent)
            MainContElemHeight = MainContElem.clientHeight; 
            SectionHeight = MainContElemHeight / 5; 
            SectionZero = document.querySelector('#SectionZero');
            SectionOne = document.querySelector('#SectionOne');
            SectionTwo = document.querySelector('#SectionTwo');
            SectionThree = document.querySelector('#SectionThree');
            SectionFour = document.querySelector('#SectionFour'); 
          //  SectionOneMarkerElem = document.querySelector('#SectionOneMarker')
        }
    }, [ContainerRef.current])
    /*
    useEffect(() => {
        console.log("position: " + position)
    }, [position])
    */
    
    useEffect(() => {
        console.log("level: " + level)
    }, [level])
    
    useEffect(() => {
        console.log("MarkerOneHeight: " + MarkerOneHeight)
    }, [MarkerOneHeight])

    useEffect(() => {
        return () => { document.removeEventListener('scroll', scrollEvent)}
    }, [])

    return (
        <MainContainer id="container" ref={ContainerRef}>
            <FixedElement
                id="FixedElement"
                Position={position}
                ZIndex={level == 'level4' ? "20" : "-1"}
            >
                 <RenderZoneOneCamera
                    level={level}
                    textPosition={MarkerOneHeight}
                /> 
                <RenderZoneTwoCamera
                    level={level}
                    textPosition={FixedMarkerHeight} />
                <RenderZoneThreeCamera
                    level={level}
                    textPosition={FixedMarkerHeight} /> 
                <RenderProjectPanel inView={level === 'level4' ? true : false} />

            </FixedElement>
            <Section id="SectionZero" ref={SectionZeroRef}>
                <Title>Section Zero</Title>
            </Section >
            <Section id="SectionOne" ref={SectionOneRef}>
                <Title>First Section</Title>
            </Section >
            <Section id="SectionTwo" ref={SectionTwoRef}>
                <Title>Second Section</Title>
            </Section >
            <Section id="SectionThree" ref={SectionThreeRef}>
                <Title>ThirdSection</Title>
            </Section >
            <Section id="SectionFour" ref={SectionFourRef}>
                <Title>Fourth Section</Title>
            </Section>
        </MainContainer>
        )
}

export default RenderScrollSnappingPage; 


const MainContainer = styled.div`
    scroll-snap-type: y mandatory; 
    scroll-snap-stop: always;
    overflow-y: scroll;
    overflow-x: hidden; 
    height: 100vh; 
    //height: 800px; 
    //height: 866px;
    position: relative;
` 
const Section = styled.div`
    scroll-snap-align: end; 
    //height: 866px;  
    height: 800px;
   // height: 120vh;
    resize: none;
    text-align: center; 
    opacity: 0;
&#SectionOne{
    background-color: #EFF213; 
}
&#SectionTwo{
    background-color: #1792D8; 
}
&#SectionThree{
    background-color: #D81754; 
}
&#SectionFour{
    background-color: #17D849; 
}
`

const Title = styled.div`
    margin: auto; 
`

const FixedElement = styled.div`
    position: ${props => props.Position || 'fixed'}; 
    opacity: 1.0; 
    margin: auto;
    height: fit-content;
    top: ${props => {
        if (props.Position === 'absolute') {
            return '1200px'; 
        }
        else {
            return '25%';
        }
    }};
    left:  ${props => {
        if (props.Position === 'absolute') {
            return '15px';
        }
        else {
            return '0px';
        }
    }};
    right: 0;
    z-index: ${props => props.ZIndex || "-1"};
`

const HalfPageMarker = styled.div`
    position: fixed; 
    width: 100%; 
    top: 50%; 
    border: none;
    border-top: 1px solid red; 
    opacity: 1.0 !important; 
    z-index:3;
    display: ${props => props.Display || 'none' };
`
