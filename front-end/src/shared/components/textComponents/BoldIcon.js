import React, {useState} from 'react';
import {BoldElementIcon} from "../../global.style";

const BoldIcon = (props) => {
    const { state, func } = props;
    const [isBold, setIsBold] = useState(true)
    return (
        <BoldElementIcon isSelected={!isBold} onClick={() => {
            setIsBold(!isBold)
            if (isBold) {
                func(() => 'bold')
            } else {
                func(() => 'normal')
            }
        }}/>
    )
}

export default BoldIcon;
