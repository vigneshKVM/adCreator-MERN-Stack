import React, {useState} from 'react';
import {ItalicElementIcon} from "../../global.style";

const FontIcon = () => {
    const [selected, setSelected] = useState(false);
    return (
        <ItalicElementIcon isSelected={selected} onClick={() => setSelected(!selected)}/>
    )
}

export default FontIcon;
