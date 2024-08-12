import React from 'react';
import './style.css';

function ErrorMessage({ message }) {
    return (
        <div className="Err-mess">
            {message}
        </div>
    );
}

export default ErrorMessage;
