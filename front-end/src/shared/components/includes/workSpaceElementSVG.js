import React, {useState} from 'react';
import {
    BoldElementIcon,
    BottomLeftExpandCircle,
    BottomRightExpandCircle,
    EditableElements,
    FontColorIcon,
    ItalicElementIcon,
    RotateElementIcon,
    TopLeftExpandCircle,
    TopRightExpandCircle,
    UnderlinedElementIcon,
    WorkSpaceElementBorder
} from "../../global.style";
import OutsideClickAlerter from "./OutsideClickAlerter";
import {WorkSpaceImage, WorkSpaceImageContainer, WorkSpaceTextBox} from "../../../pages/postCreator/postCreator.style";
import BoldIcon from "../textComponents/BoldIcon";
import ItalicIcon from "../textComponents/ItalicIcon";
import UnderlinedIcon from "../textComponents/UnderlinedIcon";
import FontSize from "../textComponents/fontSize";
import Resizeable from "./resizeable";
import Dragable from "./dragable";

const WorkSpaceElementSVG = (props) => {
    const [selected, setSelected] = useState(false);

    return (
        <Dragable elementId={props.id}>
            <Resizeable elementId={props.id}>
                <OutsideClickAlerter function={setSelected}>
                    <>
                        <WorkSpaceElementBorder onClick={() => setSelected(true)} isSelected={selected}>
                            <TopLeftExpandCircle isSelected={selected} id='topLeft1'/>
                            <TopRightExpandCircle isSelected={selected} id='topRight1'/>
                            <BottomLeftExpandCircle isSelected={selected} id='bottomLeft1'/>
                            <BottomRightExpandCircle isSelected={selected} id='bottomRight1'/>
                            <WorkSpaceImageContainer id={props.id}>
                                <WorkSpaceImage src="butterfly.jpg" alt="" />
                            </WorkSpaceImageContainer>

                        </WorkSpaceElementBorder>
                    </>

                </OutsideClickAlerter>
            </Resizeable>
        </Dragable>
    )
}

export default WorkSpaceElementSVG;
