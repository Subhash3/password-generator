import React from 'react';
import '../styles/CopyIcon.scss'

const CopyIcon = (props) => {
    return (
        <div className="copy-icon" onClick={props.copyHandler}></div>
    );
}

export default CopyIcon;
