import React, {useState, useEffect} from 'react';
import {DragableElementContainer} from "../../global.style";

const Dragable = (props) => {
    const [diffX, setDiffX] = useState(0);
    const [diffY, setDiffY] = useState(0);
    const [drag, setDrag] = useState(false);
    const [style, setStyle] = useState({});

    let left = 0; let top = 0;
    const dragStart = (e) => {
        setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
        setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
        let topLeft = document.getElementById('topLeft1');
        let topRight = document.getElementById('topRight1');
        let bottomLeft = document.getElementById('bottomLeft1');
        let bottomRight = document.getElementById('bottomRight1');
        setDrag(true);
        console.log('Dragable: Drag Start')
    }

    const dragging = (e) => {
        if (drag) {
            left = e.screenX - diffX;
            top = e.screenY - diffY;
            setStyle((state) => ({left, top}));
            console.log('Dragable: dragging', style);
        }
    }

    const dragEnd = (e) => {
        setDrag(false);
        console.log('Dragable: Drag End')
    }

    return (
        <DragableElementContainer style={style} onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragEnd}>
            {props.children}
        </DragableElementContainer>
    )
}

export default Dragable;
