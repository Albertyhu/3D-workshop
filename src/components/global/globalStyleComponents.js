import styled, {keyframes} from 'styled-components'; 

export const Text = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 30px; 
    width: 50%; 
    margin: auto; 
    text-align: center; 
    position: fixed; 
   // top:${props => (393 - props.TextPosition) + 'px' || '50%'};
    top: 25%; 
    left: 0; 
    right: 0;
   
`

export const HalfPageMarker = styled.div`
    position: fixed; 
    width: 100%; 
    top: 50%; 
    border: none;
    border-top: 1px solid red; 
    opacity: 1.0;; 
    z-index:3;
display: none;
`


