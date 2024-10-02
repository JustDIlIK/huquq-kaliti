import React from 'react';
import './roller.css'

const Roller = ({className, ...props}) => {
    return (
        <div className={`lds-roller ${className}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Roller;