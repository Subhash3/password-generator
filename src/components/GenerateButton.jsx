import React from 'react';
import '../styles/GenerateButton.scss'

const GenerateButton = (props) => {
    return (
        <button className="generate-btn" onClick={props.generatePassword}>Generate</button>
    );
}

export default GenerateButton;
