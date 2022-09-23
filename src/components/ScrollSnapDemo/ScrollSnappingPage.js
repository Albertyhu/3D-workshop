import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components';
import RenderCube from '../renderCube/cube.js'; 
import RenderZoneOne from '../AnimationZone/zone1.js'; 
import RenderZoneTwo from '../AnimationZone/zone2.js'; 
import RenderZoneThree from '../AnimationZone/zone3.js'; 
import RenderCameraWork from '../camera/ZoneOneAnimation.js'; 

const RenderScrollSnappingPage = () => {
    const [level, setLevel] = useState('level0'); 
    const [position, setPosition] = useState('absolute') 
    const ContainerRef = useRef();
    var MainContElem; 
    const SectionZeroRef = useRef(); 
    const SectionOneRef = useRef(); 
    const SectionTwoRef = useRef(); 
    const SectionThreeRef = useRef(); 
    const SectionFourRef = useRef(); 


  //  const SectionOne = document.getElementById("SectionOne")
    const thresholdLevel = 0.5; 
    var SectionZeroObserver = new IntersectionObserver(() => {
        setLevel('level0')
    }, {
        threshold: thresholdLevel,
    })
    var SectionOneObserver = new IntersectionObserver(() => {
        setLevel('level1')
    }, {
            threshold: thresholdLevel, 
    })
    var SectionTwoObserver = new IntersectionObserver(() => {
        setLevel('level2')
    }, {
            threshold: thresholdLevel,
    })
    var SectionThreeObserver = new IntersectionObserver(() => {
        setLevel('level3')
    }, {
            threshold: thresholdLevel,
    })
    var SectionFourObserver = new IntersectionObserver(() => {
        setLevel('level4')
    }, {
        threshold: thresholdLevel,
    })
    var SectionZero; 
    var SectionOne; 
    var SectionTwo; 
    var SectionThree; 
    var SectionFour; 

    useEffect(() => {
        if (SectionZeroRef.current) {
            SectionZero = document.querySelector("#SectionZero")

            SectionZeroObserver.observe(SectionZero)
        }
    }, [SectionZeroRef.current])

    useEffect(() => {
        if (SectionOneRef.current) {
            SectionOne = document.querySelector("#SectionOne")

            SectionOneObserver.observe(SectionOne)
        }
    }, [SectionOneRef.current])

    useEffect(() => {
        if (SectionTwoRef.current) {
            SectionTwo = document.querySelector("#SectionTwo")

            SectionTwoObserver.observe(SectionTwo)
        }
    }, [SectionTwoRef.current])
    useEffect(() => {
        if (SectionThreeRef.current) {
            SectionThree = document.querySelector("#SectionThree")
            SectionThreeObserver.observe(SectionThree)
        }
    }, [SectionThreeRef.current])
    useEffect(() => {
        if (SectionFourRef.current) {
            SectionFour = document.querySelector("#SectionFour")

            SectionFourObserver.observe(SectionFour)
        }
    }, [SectionFourRef.current])
    /*
    useEffect(() => {
        console.log('level: ' + level)
    }, [level])*/

    const scrollEvent = event => {
        if (MainContElem.scrollTop < 1009) {
            setPosition('absolute');
        }
        else {
            setPosition('fixed');
        }
    }

    useEffect(() => {
        if (ContainerRef.current) {
            MainContElem = document.querySelector('#container'); 
            MainContElem.addEventListener('scroll', scrollEvent)
        }
    }, [ContainerRef.current])
    /*
    useEffect(() => {
        console.log("position: " + position)
    }, [position])
    */

    useEffect(() => {

        return () => { document.removeEventListener('scroll', scrollEvent)}
    }, [])

    return (
        <MainContainer id="container" ref={ContainerRef}>
            <FixedElement id="FixedElement" Position={position}>
                {/*<RenderZoneOne
                    inView={level == 'level1' ? true : false}
                    level={level}
                /> */}
                {/*<RenderZoneTwo inView={level == 'level1' ? true : false} />*/}
                {/*<RenderZoneThree inView={level == 'level1' ? true : false} />*/}
                <RenderCameraWork level={level} />
            </FixedElement>
            <Marker />
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
    overflow-y: scroll;
    overflow-x: hidden; 
    height: 100vh;
    position: relative;
` 
const Section = styled.div`
    scroll-snap-align: end; 
    height: 120vh;
    text-align: center; 
    opacity: 0.2;
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
    z-index: -1;
`

const Marker = styled.div`
    position: absolute; 
    height: 100; 
    top: 1000px; 
    border: none;
    border-top: 1px solid red; 
   opacity: 1.0;; 
`