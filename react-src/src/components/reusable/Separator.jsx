import React from 'react';
import './Separator.css';

const Separator = (props) => {
    return (
        <div className="separator-container">
            <div className="separator-line" />
            <div className="separator-title">
                <span>{props.title}</span>
            </div>
        </div>
    );
};

export default Separator;
