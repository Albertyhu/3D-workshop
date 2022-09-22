import React, {useEffect} from 'react'; 
import styled, { keyframes } from 'styled-components'; 
import RenderZoneCube from '../renderCube/renderZoneCube.js'; 
import RenderZonePyramid from '../pyramid/renderZonePyramid.js'; 

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

            <RenderZoneCube
                animationType={inView ? Cube4Animation : Cube4AnimationReverse}
                TranslateX={Cube4XCoor}
                TranslateY={Cube4YCoor}
                TranslateZ={Cube4ZCoor}
                RotateX={Cube4XRotate}
                RotateY={Cube4YRotate}
                RotateZ={'0deg'}
            /> 
            <RenderZoneCube
                animationType={inView ? Cube5Animation : Cube5AnimationReverse}
                TranslateX={Cube5XCoor}
                TranslateY={Cube5YCoor}
                TranslateZ={Cube5ZCoor}
                RotateX={Cube5XRotate}
                RotateY={Cube5YRotate}
                RotateZ={Cube5ZRotate}
            /> 
            <RenderZonePyramid
                animationType={inView ? Pyramid1Animation : Pyramid1AnimationReverse}
                TranslateX={Pyramid1XCoor}
                TranslateY={Pyramid1YCoor}
                TranslateZ={Pyramid1ZCoor}
                RotateX={Pyramid1XRotate}
                RotateY={Pyramid1YRotate}
                RotateZ={Pyramid1ZRotate}
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


const Cube4XCoor = '800px';
const Cube4YCoor = '-400px';
const Cube4ZCoor = '-200px';
const Cube4YRotate = '20deg';
const Cube4ZRotate = '45deg';
const Cube4XRotate = '45deg';
const Cube4Scale = '0.2, 0.2, 0.2';
const Cube4Animation = keyframes`
    0%{
        transform:
            translateX(${Cube4XCoor})
            translateY(${Cube4YCoor})
            translateZ(${Cube4ZCoor})
            rotateY(${Cube4YRotate}) 
            rotateX(0deg) 
            rotateZ(0deg) 
            scale3d(${Cube4Scale});
}
    50%{
        transform: 
            translateX(${Cube4XCoor})
            translateY(${Cube4YCoor})
            translateZ(${Cube4ZCoor})
            rotateY(${Cube4YRotate}) 
            rotateX(360deg)) 
            rotateZ(360deg)
            scale3d(${Cube4Scale}); 
}
    100%{
        transform: 
            translateX(${Cube4XCoor})
            translateY(${Cube4YCoor})
            translateZ(${Cube4ZCoor})
            rotateY(${Cube4YRotate}) 
            rotateX(720deg) 
            rotateZ(720deg)
            scale3d(${Cube4Scale});
}
`
const Cube4AnimationReverse = keyframes`
    0%{
        transform:
            translateX(${Cube4XCoor})
            translateY(${Cube4YCoor})
            translateZ(${Cube4ZCoor})
            rotateY(${Cube4YRotate}) 
            rotateX(0deg) 
            rotateZ(0deg)
            scale3d(${Cube4Scale}); 
}
    50%{
        transform: 
            translateX(${Cube4XCoor})
            translateY(${Cube4YCoor})
            translateZ(${Cube4ZCoor})
            rotateY(${Cube4YRotate}) 
            rotateX(-360deg)) 
            rotateZ(-360deg)
            scale3d(${Cube4Scale}); 
}
    100%{
        transform: 
            translateX(${Cube4XCoor})
            translateY(${Cube4YCoor})
            translateZ(${Cube4ZCoor})
            rotateY(${Cube4YRotate}) 
            rotateX(-720deg) 
            rotateZ(-720deg)
            scale3d(${Cube4Scale});
}
`

const Cube5XCoor = '-600px';
const Cube5YCoor = '-500px';
const Cube5ZCoor = '10px';
const Cube5YRotate = '20deg';
const Cube5ZRotate = '55deg';
const Cube5XRotate = '95deg';
const Cube5Scale = '0.2, 0.2, 0.2';
const Cube5Animation = keyframes`
    0%{
        transform:
            translateX(${Cube5XCoor})
            translateY(${Cube5YCoor})
            translateZ(${Cube5ZCoor})
            rotateY(0deg) 
            rotateX(0deg) 
            rotateZ(${Cube5ZRotate })
            scale3d(0 , 0, 0);
}
    50%{
        transform: 
            translateX(${Cube5XCoor})
            translateY(${Cube5YCoor})
            translateZ(${Cube5ZCoor})
            rotateY(900deg) 
            rotateX(360deg)) 
            rotateZ(${Cube5ZRotate })
            scale3d(0.1, 0.1, 0.1); 
}
    100%{
        transform: 
            translateX(${Cube5XCoor})
            translateY(${Cube5YCoor})
            translateZ(${Cube5ZCoor})
            rotateY(1800deg) 
            rotateX(720deg) 
            rotateZ(${Cube5ZRotate })
            scale3d(0.2, 0.2, 0.2);
}
`
const Cube5AnimationReverse = keyframes`
    0%{
        transform:
            translateX(${Cube5XCoor})
            translateY(${Cube5YCoor})
            translateZ(${Cube5ZCoor})
            rotateY(0deg) 
            rotateX(0deg) 
            rotateZ(${Cube5ZRotate})
            scale3d(0.2, 0.2, 0.2);
}
    50%{
        transform: 
            translateX(${Cube5XCoor})
            translateY(${Cube5YCoor})
            translateZ(${Cube5ZCoor})
            rotateY(-900deg) 
            rotateX(-360deg)) 
            rotateZ(${Cube5ZRotate})
            scale3d(0.1, 0.1, 0.1); 
}
    100%{
        transform: 
            translateX(${Cube5XCoor})
            translateY(${Cube5YCoor})
            translateZ(${Cube5ZCoor})
            rotateY(-1800deg) 
            rotateX(-720deg) 
            rotateZ(${Cube5ZRotate})
            scale3d(0, 0, 0);
}
`



const Pyramid1XCoor = '-200px';
const Pyramid1YCoor = '300px';
const Pyramid1ZCoor = '100px';
const Pyramid1YRotate = '0deg';
const Pyramid1ZRotate = '-45deg';
const Pyramid1XRotate = '0deg';
const Pyramid1Scale = '0.5, 0.5, 0.5';
const Pyramid1Animation = keyframes`

    0%{
        transform:
            translateX(${Pyramid1XCoor})
            translateY(${Pyramid1YCoor})
            translateZ(${Pyramid1ZCoor})
            rotateY(0deg) 
            rotateX(${Pyramid1XRotate}) 
            rotateZ(${Pyramid1ZRotate})
            scale3d(0 , 0, 0);
}
    100%{
        transform: 
            translateX(${Pyramid1XCoor})
            translateY(${Pyramid1YCoor})
            translateZ(${Pyramid1ZCoor})
            rotateY(1800deg) 
            rotateX(${Pyramid1XRotate}) 
            rotateZ(${Pyramid1ZRotate})
            scale3d(${Pyramid1Scale});
}
`

const Pyramid1AnimationReverse = keyframes`
    0%{
        transform:
            translateX(${Pyramid1XCoor})
            translateY(${Pyramid1YCoor})
            translateZ(${Pyramid1ZCoor})
            rotateY(0deg) 
            rotateX(${Pyramid1XRotate}) 
            rotateZ(${Pyramid1ZRotate})
            scale3d(${Pyramid1Scale});
}
    100%{
        transform: 
            translateX(${Pyramid1XCoor})
            translateY(${Pyramid1YCoor})
            translateZ(${Pyramid1ZCoor})
            rotateY(-1800deg) 
            rotateX(${Pyramid1XRotate}) 
            rotateZ(${Pyramid1ZRotate})
            scale3d(0,0,0);
}
`

