import React from 'react';
import CopyIcon from './CopyIcon'
import '../styles/PasswordBox.scss'

const PasswordBox = (props) => {
    return (
        <div className="password-box">
            {props.value}
            <CopyIcon copyHandler={props.copyHandler} />
        </div>
    );
}

export default PasswordBox;
