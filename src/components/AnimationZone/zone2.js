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
                identifier="1"
                animationType={inView ? Cube1Animation : Cube1AnimationReverse}
                TranslateX={Cube1XCoor}
                TranslateY={Cube1YCoor}
                TranslateZ={Cube1ZCoor}
                RotateX={'0deg'}
                RotateY={Cube1YRotate}
                RotateZ={Cube1ZRotate} 
            /> 
            <RenderZoneCube
                identifier="2"
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
                identifier="3"
                animationType={inView ? Cube3Animation : Cube3AnimationReverse}
                TranslateX={Cube3XCoor}
                TranslateY={Cube3YCoor}
                TranslateZ={Cube3ZCoor}
                RotateX={Cube3XRotate}
                RotateY={Cube3YRotate}
                RotateZ={'0deg'}
            /> 

            <RenderZoneCube
                identifier="4"
                animationType={inView ? Cube4Animation : Cube4AnimationReverse}
                TranslateX={Cube4XCoor}
                TranslateY={Cube4YCoor}
                TranslateZ={Cube4ZCoor}
                RotateX={Cube4XRotate}
                RotateY={Cube4YRotate}
                RotateZ={'0deg'}
            /> 
            <RenderZoneCube
                identifier="5"
                animationType={inView ? Cube5Animation : Cube5AnimationReverse}
                TranslateX={Cube5XCoor}
                TranslateY={Cube5YCoor}
                TranslateZ={Cube5ZCoor}
                RotateX={Cube5XRotate}
                RotateY={Cube5YRotate}
                RotateZ={Cube5ZRotate}
            /> 
            <RenderZonePyramid
                identifier="1"
                animationType={inView ? Pyramid1Animation : Pyramid1AnimationReverse}
                TranslateX={Pyramid1XCoor}
                TranslateY={Pyramid1YCoor}
                TranslateZ={Pyramid1ZCoor}
                RotateX={Pyramid1XRotate}
                RotateY={Pyramid1YRotate}
                RotateZ={Pyramid1ZRotate}
            />
            <RenderZonePyramid
                identifier="2"
                animationType={inView ? Pyramid2Animation : Pyramid2AnimationReverse}
                TranslateX={Pyramid2XCoor}
                TranslateY={Pyramid2YCoor}
                TranslateZ={Pyramid2ZCoor}
                RotateX={Pyramid2XRotate}
                RotateY={Pyramid2YRotate}
                RotateZ={Pyramid2ZRotate}
            />
            <RenderZonePyramid
                identifier="3"
                animationType={inView ? Pyramid3Animation : Pyramid3AnimationReverse}
                TranslateX={Pyramid3XCoor}
                TranslateY={Pyramid3YCoor}
                TranslateZ={Pyramid3ZCoor}
                RotateX={Pyramid3XRotate}
                RotateY={Pyramid3YRotate}
                RotateZ={Pyramid3ZRotate}
            />
            <RenderZoneCube
                identifier="6"
                animationType={inView ? Cube6Animation : Cube6AnimationReverse}
                TranslateX={Cube6XCoor}
                TranslateY={Cube6YCoor}
                TranslateZ={Cube6ZCoor}
                RotateX={Cube6XRotate}
                RotateY={Cube6YRotate}
                RotateZ={Cube6ZRotate}
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

const Cube1XCoor = '300px';
const Cube1YCoor = '150px'
const Cube1ZCoor = '190px';
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



const Cube2XCoor = '-800px';
const Cube2YCoor = '-200px'
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
            rotateZ(${Cube2ZRotate}) 
            scale3d(0, 0, 0);
}
    50%{
        transform: 
            translateX(${Cube2XCoor})
            translateY(${Cube2YCoor})
            translateZ(${Cube2ZCoor})
            rotateY(1080deg) 
            rotateX(${Cube2XRotate}) 
            rotateZ(${Cube2ZRotate}) 
            scale3d(0.5, 0.5, 0.5);
}
    100%{
        transform: 
            translateX(${Cube2XCoor})
            translateY(${Cube2YCoor})
            translateZ(${Cube2ZCoor})
            rotateY(2160deg) 
            rotateX(${Cube2XRotate}) 
            rotateZ(${Cube2ZRotate})
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


const Cube3XCoor = '500px';
const Cube3YCoor = '-320px';
const Cube3ZCoor = '10px';
const Cube3YRotate = '20deg';
const Cube3ZRotate = '45deg';
const Cube3XRotate = '45deg';
const Cube3Scale = '1, 1, 1'

const Cube3Animation = keyframes`
    0%{
        transform:
            translateX(${Cube3XCoor})
            translateY(${Cube3YCoor})
            translateZ(${Cube3ZCoor})
            rotateY(${Cube3YRotate}) 
            rotateX(${Cube3XRotate}) 
            rotateZ(0deg)
            scale3d(0, 0, 0); 
}
    100%{
        transform:
            translateX(${Cube3XCoor})
            translateY(${Cube3YCoor})
            translateZ(${Cube3ZCoor})
            rotateY(${Cube3YRotate}) 
            rotateX(${Cube3XRotate}) 
            rotateZ(0deg)
            scale3d(${Cube3Scale});
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
            rotateZ(0deg)
            scale3d(${Cube3Scale}); 
}

    100%{
        transform: 

            translateX(${Cube3XCoor})
            translateY(${Cube3YCoor})
            translateZ(${Cube3ZCoor})
            rotateY(${Cube3YRotate}) 
            rotateX(${Cube3XRotate}) 
            rotateZ(0deg)
            scale3d(0, 0, 0);
}
`


const Cube4XCoor = '200px';
const Cube4YCoor = '400px';
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

const Cube5XCoor = '-500px';
const Cube5YCoor = '200px';
const Cube5ZCoor = '10px';
const Cube5YRotate = '20deg';
const Cube5ZRotate = '45deg';
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
const Pyramid1YCoor = '-200px';
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
            scale3d(${Pyramid1Scale});
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
            scale3d(${Pyramid1Scale});
}
`


const Pyramid2XCoor = '600px';
const Pyramid2YCoor = '0px';
const Pyramid2ZCoor = '10px';
const Pyramid2YRotate = '0deg';
const Pyramid2ZRotate = '45deg';
const Pyramid2XRotate = '0deg';
const Pyramid2Scale = '0.2, 0.2, 0.2';
const Pyramid2Animation = keyframes`

    0%{
        transform:
            translateX(${Pyramid2XCoor})
            translateY(${Pyramid2YCoor})
            translateZ(${Pyramid2ZCoor})
            rotateY(0deg) 
            rotateX(${Pyramid2XRotate}) 
            rotateZ(${Pyramid2ZRotate})
            scale3d(${Pyramid2Scale});
}
    100%{
        transform: 
            translateX(${Pyramid2XCoor})
            translateY(${Pyramid2YCoor})
            translateZ(${Pyramid2ZCoor})
            rotateY(2800deg) 
            rotateX(${Pyramid2XRotate}) 
            rotateZ(${Pyramid2ZRotate})
            scale3d(${Pyramid2Scale});
}
`

const Pyramid2AnimationReverse = keyframes`
    0%{
        transform:
            translateX(${Pyramid2XCoor})
            translateY(${Pyramid2YCoor})
            translateZ(${Pyramid2ZCoor})
            rotateY(0deg) 
            rotateX(${Pyramid2XRotate}) 
            rotateZ(${Pyramid2ZRotate})
            scale3d(${Pyramid2Scale});
}
    100%{
        transform: 
            translateX(${Pyramid2XCoor})
            translateY(${Pyramid2YCoor})
            translateZ(${Pyramid2ZCoor})
            rotateY(2800deg) 
            rotateX(${Pyramid2XRotate}) 
            rotateZ(${Pyramid2ZRotate})
            scale3d(${Pyramid2Scale});
}
`

const Cube6XCoor = '0px';
const Cube6YCoor = '500px';
const Cube6ZCoor = '0px';
const Cube6YRotate = '20deg';
const Cube6ZRotate = '46deg';
const Cube6XRotate = '96deg';
const Cube6Scale = '0.8, 0.8, 0.8';
const Cube6Animation = keyframes`
    0%{
        transform:
            translateX(${Cube6XCoor})
            translateY(${Cube6YCoor})
            translateZ(${Cube6ZCoor})
            rotateY(0deg) 
            rotateX(0deg) 
            rotateZ(${Cube6ZRotate})
            scale3d(${Cube6Scale});
}
    100%{
        transform: 
            translateX(${Cube6XCoor})
            translateY(${Cube6YCoor})
            translateZ(${Cube6ZCoor})
            rotateY(120deg) 
            rotateX(720deg) 
            rotateZ(${Cube6ZRotate})
            scale3d(${Cube6Scale});
}
`
const Cube6AnimationReverse = keyframes`
    0%{
        transform:
            translateX(${Cube6XCoor})
            translateY(${Cube6YCoor})
            translateZ(${Cube6ZCoor})
            rotateY(120deg) 
            rotateX(0deg) 
            rotateZ(${Cube6ZRotate})
            scale3d(${Cube6Scale});
}
    100%{
        transform: 
            translateX(${Cube6XCoor})
            translateY(${Cube6YCoor})
            translateZ(${Cube6ZCoor})
            rotateY(0deg) 
            rotateX(-720deg) 
            rotateZ(${Cube6ZRotate})
            scale3d(${Cube6Scale});
}
`


const Pyramid3XCoor = '-600px';
const Pyramid3YCoor = '300px';
const Pyramid3ZCoor = '10px';
const Pyramid3YRotate = '0deg';
const Pyramid3ZRotate = '45deg';
const Pyramid3XRotate = '0deg';
const Pyramid3Scale = '0.2, 0.2, 0.2';
const Pyramid3Animation = keyframes`

    0%{
        transform:
            translateX(${Pyramid3XCoor})
            translateY(${Pyramid3YCoor})
            translateZ(${Pyramid3ZCoor})
            rotateY(0deg) 
            rotateX(${Pyramid3XRotate}) 
            rotateZ(${Pyramid3ZRotate})
            scale3d(${Pyramid3Scale});
}
    100%{
        transform: 
            translateX(${Pyramid3XCoor})
            translateY(${Pyramid3YCoor})
            translateZ(${Pyramid3ZCoor})
            rotateY(3800deg) 
            rotateX(${Pyramid3XRotate}) 
            rotateZ(${Pyramid3ZRotate})
            scale3d(${Pyramid3Scale});
}
`

const Pyramid3AnimationReverse = keyframes`
    0%{
        transform:
            translateX(${Pyramid3XCoor})
            translateY(${Pyramid3YCoor})
            translateZ(${Pyramid3ZCoor})
            rotateY(0deg) 
            rotateX(${Pyramid3XRotate}) 
            rotateZ(${Pyramid3ZRotate})
            scale3d(${Pyramid3Scale});
}
    100%{
        transform: 
            translateX(${Pyramid3XCoor})
            translateY(${Pyramid3YCoor})
            translateZ(${Pyramid3ZCoor})
            rotateY(3800deg) 
            rotateX(${Pyramid3XRotate}) 
            rotateZ(${Pyramid3ZRotate})
            scale3d(${Pyramid3Scale});
}
`