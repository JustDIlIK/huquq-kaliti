import React from 'react';
import './loading.css'

const Loading = ({children, ...props}) => {
    return (
        <div className="loading">{children}...</div>
    );
};

export default Loading;