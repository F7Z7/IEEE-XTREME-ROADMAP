import React from 'react';

interface ButtonProps {
    onClick: string
    text: string
    bgColor: string
}

function Button({onclick, text, bgColor}: ButtonProps) {
    return (
        <div>
            <button onClick={onclick} className={`${bgColor} text-white px-4 py-2 rounded `}>
                {text}
            </button>
        </div>
    );
}

export default Button;