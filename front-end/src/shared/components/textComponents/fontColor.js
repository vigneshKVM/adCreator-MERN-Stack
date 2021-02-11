import React, {} from 'react';
import { SketchPicker } from 'react-color';
import {FontColorContainer} from "../../global.style";

const FontColor = (props) => {
    const {showColorPalate} = props

    return (
        <FontColorContainer openColorPalate={showColorPalate}>
            <SketchPicker
                onChangeComplete={() => console.log('color')}
                />
        </FontColorContainer>
    )
}

export default FontColor;
