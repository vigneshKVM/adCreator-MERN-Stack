import React from 'react';

const ErrorText = (props) => {
    return (
        <div style={{width: '100%', textAlign: 'center', color:'red'}}>
            {props.value}
        </div>
    )
}

export default ErrorText;
