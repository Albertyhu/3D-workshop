import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'; 
import createScrollSnap from 'scroll-snap'

const RenderPage = () => {
    const ContainerRef = useRef(); 
    var MainContElem; 
    useEffect(() => {
        if (ContainerRef.current) {
            MainContElem = document.getElementById('MainContainerSD')
            
        }
    }, [ContainerRef.current])

    const bindScrollSnap = () => {
        var ContElem = ContainerRef.current;
        createScrollSnap(ContElem, {
            snapDestinationY: '90%',
            snapStop: true,
            
            timeout: 1000,
            threshold: 0.1,
            /*
             duration: 1000,
              threshold: 0.2,
              easing: easeInOutQuad,
          
            */
        }, () => { console.log('snapped') })
    }

    useEffect(() => {
        bindScrollSnap();
    }, [])

    return (
        <MainContainer id="MainContainerSD" ref={ContainerRef}>
            <Section className='Section1'><Title>Section 1</Title></Section>
            <Section className='Section2'><Title>Section 2</Title></Section>
            <Section className='Section3'><Title>Section 3</Title></Section>
        </MainContainer> 
        )
}

export default RenderPage;

const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
    position: absolute;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
`
const Section = styled.div`
  align-items: center;
  position: relative;
  width: 100%;
  padding: 20px;
  height: 95%;
    &.Section1{
        background-color: #FBFF00; 
}
    &.Section2{
        background-color: red; 

}
    &.Section3{
        background-color: blue; 
}
`

const Title = styled.div`
    text-align: center; 
    margin: 0px auto;
    font-weight: bold;
    font-size: 20px; 

`