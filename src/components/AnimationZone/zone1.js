import React, {useEffect} from 'react'; 
import styled, { keyframes } from 'styled-components'; 
import RenderZoneCube from '../renderCube/renderZoneCube.js'; 

//
const RenderZone = props => {
    const { inView } = props; 

    useEffect(() => {
        console.log('inView: ' + inView)
    }, [inView])

    return (
        <Scene>
            <RenderZoneCube
                animationType={inView ? Cube1Animation : Cube1AnimationReverse}
                TranslateX={Cube1XCoor}
                TranslateY={Cube1YCoor}
                TranslateZ={Cube1ZCoor}
                RotateX={'0deg'}
                RotateY={Cube1YRotate}
                RotateZ={Cube1ZRotate} 
            /> 
            <RenderZoneCube
                animationType={inView ? Cube2Animation : Cube2AnimationReverse}
                TranslateX={Cube2XCoor}
                TranslateY={Cube2YCoor}
                TranslateZ={Cube2ZCoor}
                RotateX={Cube2XRotate}
                RotateY={Cube2YRotate}
                RotateZ={Cube2ZRotate}
                Scale='1, 1, 1'
                duration='1s'
            />
            <RenderZoneCube
                animationType={inView ? Cube3Animation : Cube3AnimationReverse}
                TranslateX={Cube3XCoor}
                TranslateY={Cube3YCoor}
                TranslateZ={Cube3ZCoor}
                RotateX={Cube3XRotate}
                RotateY={Cube3YRotate}
                RotateZ={'0deg'}
            /> 
        </Scene> 
        )
}

export default RenderZone; 

const Scene = styled.div`
    width: 200px;
    height: 200px; 
    perspective: 600px; 
    margin: auto; 
`

const Cube1XCoor = '-400px';
const Cube1YCoor = '50px'
const Cube1ZCoor = '40px';
const Cube1YRotate = '45deg'
const Cube1ZRotate = '45deg'

const Cube1Animation = keyframes`
    0%{
        transform:
            translateX(${Cube1XCoor})
            translateY(${Cube1YCoor})
            translateZ(${Cube1ZCoor})
            rotateY(${Cube1YRotate}) 
            rotateX(0deg) 
            rotateZ(${Cube1ZRotate}) ;
}
    50%{
        transform: 
            translateX(${Cube1XCoor})
            translateY(${Cube1YCoor})
            translateZ(${Cube1ZCoor})
            rotateY(${Cube1YRotate}) 
            rotateX(180deg) 
            rotateZ(${Cube1ZRotate}) ;
}
    100%{
        transform: 
            translateX(${Cube1XCoor})
            translateY(${Cube1YCoor})
            translateZ(${Cube1ZCoor})
            rotateY(${Cube1YRotate}) 
            rotateX(360deg) 
            rotateZ(${Cube1ZRotate}) ;
}
`
const Cube1AnimationReverse = keyframes`
    0%{
        transform:
            translateX(${Cube1XCoor})
            translateY(${Cube1YCoor})
            translateZ(${Cube1ZCoor})
            rotateY(${Cube1YRotate}) 
            rotateX(0deg) 
            rotateZ(${Cube1ZRotate}) ;

}
    50%{
        transform: 
            translateX(${Cube1XCoor})
            translateY(${Cube1YCoor})
            translateZ(${Cube1ZCoor})
            rotateY(${Cube1YRotate}) 
            rotateX(-180deg) 
            rotateZ(${Cube1ZRotate}) ;
}
    100%{
        transform: 
            translateX(${Cube1XCoor})
            translateY(${Cube1YCoor})
            translateZ(${Cube1ZCoor})
            rotateY(${Cube1YRotate}) 
            rotateX(-360deg) 
            rotateZ(${Cube1ZRotate}) ;
}
`; 



const Cube2XCoor = '400px';
const Cube2YCoor = '-90px'
const Cube2ZCoor = '-800px';
const Cube2YRotate = '0deg'
const Cube2ZRotate = '45deg'
const Cube2XRotate = '45deg'

const Cube2Animation = keyframes`
    0%{
        transform:
            translateX(${Cube2XCoor})
            translateY(${Cube2YCoor})
            translateZ(${Cube2ZCoor})
            rotateY(0deg) 
            rotateX(${Cube2XRotate}) 
            rotateZ(${Cube1ZRotate}) 
            scale3d(0, 0, 0);
}
    50%{
        transform: 
            translateX(${Cube2XCoor})
            translateY(${Cube2YCoor})
            translateZ(${Cube2ZCoor})
            rotateY(1080deg) 
            rotateX(${Cube2XRotate}) 
            rotateZ(${Cube1ZRotate}) 
            scale3d(0.5, 0.5, 0.5);
}
    100%{
        transform: 
            translateX(${Cube2XCoor})
            translateY(${Cube2YCoor})
            translateZ(${Cube2ZCoor})
            rotateY(2160deg) 
            rotateX(${Cube2XRotate}) 
            rotateZ(${Cube1ZRotate})
            scale3d(1, 1, 1);
}
`
const Cube2AnimationReverse = keyframes`
    0%{
        transform:
            translateX(${Cube2XCoor})
            translateY(${Cube2YCoor})
            translateZ(${Cube2ZCoor})
            rotateY(0deg) 
            rotateX(${Cube2XRotate}) 
            rotateZ(${Cube2ZRotate}) 
            scale3d(1, 1, 1);
}
    50%{
        transform: 
            translateX(${Cube2XCoor})
            translateY(${Cube2YCoor})
            translateZ(${Cube2ZCoor})
            rotateY(-900deg) 
            rotateX(${Cube2XRotate}) 
            rotateZ(${Cube1ZRotate}) 
            scale3d(0.5, 0.5, 0.5);
}
    100%{
        transform: 
            translateX(${Cube2XCoor})
            translateY(${Cube2YCoor})
            translateZ(${Cube2ZCoor})
            rotateY(-1800deg) 
            rotateX(${Cube2XRotate}) 
            rotateZ(${Cube2ZRotate}) 
            scale3d(0, 0, 0);
}
`; 


const Cube3XCoor = '250px';
const Cube3YCoor = '-600px';
const Cube3ZCoor = '100px';
const Cube3YRotate = '20deg';
const Cube3ZRotate = '45deg';
const Cube3XRotate = '45deg';

const Cube3Animation = keyframes`
    0%{
        transform:
            translateX(${Cube3XCoor})
            translateY(${Cube3YCoor})
            translateZ(${Cube3ZCoor})
            rotateY(${Cube3YRotate}) 
            rotateX(${Cube3XRotate}) 
            rotateZ(0deg); 
}
    50%{
        transform: 
            translateX(${Cube3XCoor})
            translateY(${Cube3YCoor})
            translateZ(${Cube3ZCoor})
            rotateY(${Cube3YRotate}) 
            rotateX(${Cube3XRotate}) 
            rotateZ(1260deg); 
}
    100%{
        transform: 
            translateX(${Cube3XCoor})
            translateY(${Cube3YCoor})
            translateZ(${Cube3ZCoor})
            rotateY(${Cube3YRotate}) 
            rotateX(${Cube3XRotate}) 
            rotateZ(2520deg);
}
`
const Cube3AnimationReverse = keyframes`
    0%{
        transform:
            translateX(${Cube3XCoor})
            translateY(${Cube3YCoor})
            translateZ(${Cube3ZCoor})
            rotateY(${Cube3YRotate}) 
            rotateX(${Cube3XRotate}) 
            rotateZ(0deg); 
}
    50%{
        transform: 
            translateX(${Cube3XCoor})
            translateY(${Cube3YCoor})
            translateZ(${Cube3ZCoor})
            rotateY(${Cube3YRotate}) 
            rotateX(${Cube3XRotate}) 
            rotateZ(-1260deg); 
}
    100%{
        transform: 
            translateX(${Cube3XCoor})
            translateY(${Cube3YCoor})
            translateZ(${Cube3ZCoor})
            rotateY(${Cube3YRotate}) 
            rotateX(${Cube3XRotate}) 
            rotateZ(-2520deg);
}
`

