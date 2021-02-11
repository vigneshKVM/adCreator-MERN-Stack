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

const WorkSpaceElementText = () => {
    const [selected, setSelected] = useState(false);
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underlined, setUnderlined] = useState(false);
    const [showColorPalate, setShowColorPalate] = useState(false);
    const [defaultText, setDefaultText] = useState('Default Text');

    // Properties
    const [fontColor, setFontColor] = useState('deepPink');
    const [fontSize, setFontSize] = useState('20');

    // function
    const Bold = (props) => {return(bold ? <b>{props.children}</b> : <>{props.children}</>)}
    const Italic = (props) => {return(italic ? <i>{props.children}</i> : <>{props.children}</>)}
    const Underlined = (props) => {return(underlined ? <u>{props.children}</u> : <>{props.children}</>)}

    return (
        <Dragable>
            <Resizeable>
                <OutsideClickAlerter function={setSelected}>
                    <>
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
                    </>

                </OutsideClickAlerter>
            </Resizeable>
        </Dragable>
    )
}

export default WorkSpaceElementText;
