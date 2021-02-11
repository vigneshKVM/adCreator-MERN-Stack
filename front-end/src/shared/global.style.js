import styled, { createGlobalStyle } from 'styled-components'
import {BiRotateLeft, AiOutlineBold, AiOutlineItalic, AiOutlineUnderline, AiOutlineFontColors} from "react-icons/all";

const GlobalStyles = createGlobalStyle`

/********************************************/
//@font-face {
//    font-family: 'Cormorant Infant';
//    font-style: normal;
//    font-weight: normal;
//    src: local('Cormorant Infant'), url('../../fonts/Cormorant_Infant/CormorantInfant-Bold.ttf');
//}
:root{
  /*----Colors-----*/
  --deepPink: #FF1493;
  
}

//body::-webkit-scrollbar {
//  width: 12px;               /* width of the entire scrollbar */
//}
//
//body::-webkit-scrollbar-track {
//  background: orange;        /* color of the tracking area */
//}
//
//body::-webkit-scrollbar-thumb {
//  background-color: blue;    /* color of the scroll thumb */
//  border-radius: 20px;       /* roundness of the scroll thumb */
//  border: 3px solid orange;  /* creates padding around scroll thumb */
//}

* {
box-sizing: border-box;
margin: 0;
padding: 0;
//font-family: 'Cormorant Infant',serif;
}

@media only screen and (max-width: 1250px) {
    
}

`;


/********************************************/
export default GlobalStyles;
/********************************************/

export const MainContainer = styled.main`
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;;
`;

/********************************************/

export const DragableElementContainer = styled.div`
    position: absolute;
`;

/********************************************/

export const ResizableElementContainer = styled.div`
    display: inline-block;
    position: absolute;
    width: auto;
    height: auto;
    padding: 1rem;
`;

/********************************************/

export const WorkSpaceElementBorder = styled.div`
    display: inline-block;
    width: auto;
    height: auto;
    padding: .5rem;
    position: relative;
    cursor: move;
    border: ${({isSelected}) => isSelected ? '2px solid deepskyblue' : "none"};
    &:hover {
      border: 2px solid deepskyblue;
    }
`;

/********************************************/

export const TopLeftExpandCircle = styled.div`
    position: absolute;
    top: -5px;
    left: -5px;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: ${({isSelected}) => isSelected ? 'white' : "none"};
    border: ${({isSelected}) => isSelected ? '1px solid deepskyblue' : "none"};
    &:hover{
      cursor: nw-resize;
    }
`;

/********************************************/

export const TopRightExpandCircle = styled.div`
    position: absolute;
    top: -5px;
    right: -5px;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: ${({isSelected}) => isSelected ? 'white' : "none"};
    border: ${({isSelected}) => isSelected ? '1px solid deepskyblue' : "none"};
    &:hover{
      cursor: ne-resize;
    }
`;

/********************************************/

export const BottomLeftExpandCircle = styled.div`
    position: absolute;
    bottom: -5px;
    left: -5px;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: ${({isSelected}) => isSelected ? 'white' : "none"};
    border: ${({isSelected}) => isSelected ? '1px solid deepskyblue' : "none"};
    &:hover{
      cursor: ne-resize;
    }
`;

/********************************************/

export const BottomRightExpandCircle = styled.div`
    position: absolute;
    bottom: -5px;
    right: -5px;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: ${({isSelected}) => isSelected ? 'white' : "none"};
    border: ${({isSelected}) => isSelected ? '1px solid deepskyblue' : "none"};
    &:hover{
      cursor: nw-resize;
    }
`;

/********************************************/

export const TextComponentContainer = styled.div`
    position: relative;
`;

/********************************************/

export const TextComponentEditContainer = styled.div`
    display: ${({isSelected}) => isSelected ? 'block' : "none"};
    position: absolute;
    top: -50px;
    z-index: 100;
`;

/********************************************/

export const EditableElements = styled.div`
    flex-direction: row;
    margin-top: .5rem;
    justify-content: flex-start;
    display: ${({isSelected}) => isSelected ? 'flex' : "none"};
`;

/********************************************/

export const RotateElementIcon = styled(BiRotateLeft)`
    font-size: 1.4rem;
    display: ${({isSelected}) => isSelected ? 'inline-block' : "none"};
    color: deepskyblue;
    &:hover {
      cursor: grabbing;
    }
`;

/********************************************/

export const BoldElementIcon = styled(AiOutlineBold)`
    font-size: 1.4rem;
    color: white;
    background: ${({isSelected}) => isSelected ? 'deepskyblue' : "#61dafb"};  
    border-radius: 5px;
    padding: .2rem;
    margin: .2rem .5rem;
    &:hover {
      background: deepskyblue;
      cursor: pointer;
    }
`;

/********************************************/

export const ItalicElementIcon = styled(AiOutlineItalic)`
    font-size: 1.4rem;
    color: white;
    background: ${({isSelected}) => isSelected ? 'deepskyblue' : "#61dafb"};
    border-radius: 5px;
    padding: .2rem;
    margin: .2rem .5rem;
    &:hover {
      background: deepskyblue;
      cursor: pointer;
    }
`;

/********************************************/

export const UnderlinedElementIcon = styled(AiOutlineUnderline)`
    font-size: 1.4rem;
    color: white;
    background: ${({isSelected}) => isSelected ? 'deepskyblue' : "#61dafb"};
    border-radius: 5px;
    padding: .2rem;
    margin: .2rem .5rem;
    &:hover {
      background: deepskyblue;
      cursor: pointer;
    }
`;

/********************************************/

export const FontColorIcon = styled(AiOutlineFontColors)`
    font-size: 1.4rem;
    color: white;
    background: ${({isSelected}) => isSelected ? 'deepskyblue' : "#61dafb"};
    border-radius: 5px;
    padding: .2rem;
    margin: .2rem .5rem;
    &:hover {
      background: deepskyblue;
      cursor: pointer;
    }
`;

/********************************************/

export const FontSizeInput = styled.input`
    width: 40px;
    border: deepskyblue;
`;

/********************************************/

export const FontColorContainer = styled.div`
    width: 40px;
    border: deepskyblue;
    display: ${({openColorPalate, isSelected}) => openColorPalate ? 'block' : "none"};;
`;

/********************************************/
