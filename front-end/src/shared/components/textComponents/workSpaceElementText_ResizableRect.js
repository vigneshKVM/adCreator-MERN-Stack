import React, {useState, useEffect} from 'react';
import {
    BottomLeftExpandCircle, BottomRightExpandCircle, EditableElements, FontColorIcon, RotateElementIcon,
    TopLeftExpandCircle,
    TopRightExpandCircle,
    WorkSpaceElementBorder
} from "../../global.style";
import OutsideClickAlerter from "../includes/OutsideClickAlerter";
import Dragable from "../includes/dragable";
import BoldIcon from "./BoldIcon";
import ItalicIcon from "./ItalicIcon";
import UnderlinedIcon from "./UnderlinedIcon";
import {WorkSpaceTextBox} from "../../../pages/postCreator/postCreator.style";
import FontSize from "./fontSize";
import Resizeable from "../includes/resizeable";
import FontColor from "./fontColor";
import ResizableRect from 'react-resizable-rotatable-draggable'

const WorkSpaceElementText = () => {
    const [selected, setSelected] = useState(false);
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underlined, setUnderlined] = useState(false);
    const [showColorPalate, setShowColorPalate] = useState(false);
    const [defaultText, setDefaultText] = useState('Default Text');
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const [top, setTop] = useState(100);
    const [left, setLeft] = useState(100);
    const [rotateAngle, setRotateAngle] = useState(0);

    // Properties
    const [fontColor, setFontColor] = useState('deepPink');
    const [fontSize, setFontSize] = useState('20');

    // function
    const Bold = (props) => {return(bold ? <b>{props.children}</b> : <>{props.children}</>)}
    const Italic = (props) => {return(italic ? <i>{props.children}</i> : <>{props.children}</>)}
    const Underlined = (props) => {return(underlined ? <u>{props.children}</u> : <>{props.children}</>)}

    const handleResize = (style, isShiftKey, type) => {
        // type is a string and it shows which resize-handler you clicked
        // e.g. if you clicked top-right handler, then type is 'tr'
        let { top, left, width, height } = style
        top = Math.round(top)
        left = Math.round(left)
        width = Math.round(width)
        height = Math.round(height)
        setTop(top)
        setLeft(left)
        setWidth(width)
        setHeight(height)
    }

    const handleRotate = (rotateAngle) => {
        setRotateAngle(rotateAngle)
    }

    const handleDrag = (deltaX, deltaY) => {
        setLeft(left + deltaX)
        setTop(top + deltaY)
    }

    return (
        <OutsideClickAlerter function={setSelected}>
            <ResizableRect
                left={left}
                top={top}
                width={width}
                height={height}
                rotateAngle={rotateAngle}
                // aspectRatio={false}
                // minWidth={10}
                // minHeight={10}
                zoomable='n, w, s, e, nw, ne, se, sw'
                // rotatable={true}
                // onRotateStart={this.handleRotateStart}
                onRotate={handleRotate}
                // onRotateEnd={this.handleRotateEnd}
                // onResizeStart={this.handleResizeStart}
                onResize={handleResize}
                // onResizeEnd={this.handleUp}
                // onDragStart={this.handleDragStart}
                onDrag={handleDrag}
                // onDragEnd={this.handleDragEnd}
            >
                <WorkSpaceElementBorder onClick={() => setSelected(true)} isSelected={selected}>

                    <TopLeftExpandCircle isSelected={selected}/>
                    <TopRightExpandCircle isSelected={selected}/>
                    <BottomLeftExpandCircle isSelected={selected}/>
                    <BottomRightExpandCircle isSelected={selected}/>
                    <Bold>
                        <Italic>
                            <Underlined>
                                <WorkSpaceTextBox
                                    contentEditable="true"
                                    suppressContentEditableWarning={true}
                                    fontColor={fontColor}
                                    fontSize={fontSize}
                                    onInput={(e) => {
                                        setDefaultText(e.target.textContent)
                                        console.log(e.target.textContent)
                                    }}
                                >
                                    {defaultText}
                                </WorkSpaceTextBox>
                            </Underlined>
                        </Italic>
                    </Bold>
                </WorkSpaceElementBorder>
                <EditableElements isSelected={selected}>
                    <BoldIcon func={setBold} state={bold}/>
                    <ItalicIcon func={setItalic} state={italic}/>
                    <UnderlinedIcon func={setUnderlined} state={underlined}/>
                    <FontSize value={fontSize} func={setFontSize}/>
                    <FontColorIcon onClick={() => setShowColorPalate(!showColorPalate)} showColorPalate={showColorPalate}/>
                </EditableElements>
                <RotateElementIcon isSelected={selected}/>
            </ResizableRect>
        </OutsideClickAlerter>

    )
}

export default WorkSpaceElementText;
