import React, {useState} from 'react';
import {UnderlinedElementIcon} from "../../global.style";

const UnderlinedIcon = (props) => {
    const { state, func } = props;
    const [isUnderlined, setIsUnderlined] = useState(true)

    return (
        <UnderlinedElementIcon isSelected={!isUnderlined} onClick={() => {
            setIsUnderlined(!isUnderlined)
            if (isUnderlined) {
                func(() => 'underline')
            } else {
                func(() => 'none')
            }
        }}/>
    )
}

export default UnderlinedIcon;
