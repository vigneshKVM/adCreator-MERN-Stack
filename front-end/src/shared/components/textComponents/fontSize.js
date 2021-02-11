import React, {} from 'react';
import {FontSizeInput} from "../../global.style";

const FontSize = (props) => {
    const { value, func } = props;

    return (
        <>
            <FontSizeInput type='number' defaultValue={value} onChange={(e) => {func(e.currentTarget.value)}} />
        </>
    )
}

export default FontSize;
