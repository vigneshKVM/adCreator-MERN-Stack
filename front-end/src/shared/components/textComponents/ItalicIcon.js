import React, {useState} from 'react';
import {ItalicElementIcon} from "../../global.style";

const ItalicIcon = (props) => {
    const { state, func } = props;
    const [isItalic, setIsItalic] = useState(true)

    return (
        <ItalicElementIcon isSelected={!isItalic} onClick={() => {
            setIsItalic(!isItalic)
            if (isItalic) {
                func(() => 'italic')
            } else {
                func(() => 'normal')
            }
        }}/>
    )
}

export default ItalicIcon;
