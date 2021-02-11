import React, {useState, useEffect, useRef} from 'react';
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

const WorkSpaceElementText = (props) => {
    const [refs, setRefs] = useState({});
    const [selected, setSelected] = useState(false);
    const [bold, setBold] = useState('normal');
    const [italic, setItalic] = useState('normal');
    const [underlined, setUnderlined] = useState('none');
    const [showColorPalate, setShowColorPalate] = useState(false);
    const [defaultText, setDefaultText] = useState('Default Text');

    // Properties
    const [fontColor, setFontColor] = useState('deepPink');
    const [fontSize, setFontSize] = useState('20');

    // function
    const Bold = (props) => {return(bold ? <b>{props.children}</b> : <>{props.children}</>)} // fontWeight
    const Italic = (props) => {return(italic ? <i>{props.children}</i> : <>{props.children}</>)} // fontStyle
    const Underlined = (props) => {return(underlined ? <u>{props.children}</u> : <>{props.children}</>)} // textDecoration


    return (
        <Dragable elementId={props.id}>
            <>
                <OutsideClickAlerter function={setSelected}>
                    <>
                        <WorkSpaceElementBorder onClick={() => setSelected(true)} isSelected={selected} >
                            <TopLeftExpandCircle isSelected={selected} id='topLeft1'/>
                            <TopRightExpandCircle isSelected={selected} id='topRight1'/>
                            <BottomLeftExpandCircle isSelected={selected} id='bottomLeft1'/>
                            <BottomRightExpandCircle isSelected={selected} id='bottomRight1'/>

                            <WorkSpaceTextBox
                                id={props.id}
                                role='textbox'
                                contentEditable
                                spellcheck="false"
                                suppressContentEditableWarning={true}
                                fontFamily='sans-serif'
                                fontColor={fontColor}
                                fontSize={fontSize}
                                fontWeight={bold}
                                fontStyle={italic}
                                textDecoration={underlined}
                                onChange={(e) => {
                                    setDefaultText(e.target.textContent)
                                }}
                            >
                                {defaultText}
                            </WorkSpaceTextBox>

                        </WorkSpaceElementBorder>
                        <EditableElements isSelected={selected}>
                            <BoldIcon func={setBold} state={bold}/>
                            <ItalicIcon func={setItalic} state={italic}/>
                            <UnderlinedIcon func={setUnderlined} state={underlined}/>
                            <FontSize value={fontSize} func={setFontSize}/>
                            {/*<FontColorIcon onClick={() => setShowColorPalate(!showColorPalate)} showColorPalate={showColorPalate}/>*/}
                        </EditableElements>
                        <RotateElementIcon isSelected={selected}/>
                    </>

                </OutsideClickAlerter>
            </>
        </Dragable>
    )
}

export default WorkSpaceElementText;
