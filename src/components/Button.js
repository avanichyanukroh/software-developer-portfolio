import React from 'react';

const Button = (props) => {
    return (
        <button
            className={props.animationStart ? 'fadeIn' : 'hidden'}
            style={{
                padding: '8px 24px',
                color: props.textColor,
                backgroundColor: props.backgroundColor,
                border: `1px solid ${props.backgroundColor}`,
                fontFamily: `"Oswald", sans-serif`,
                display: 'inline-block',
                cursor: 'pointer',
                ...props.style
            }}
        >
            {props.text}
        </button>
    );
}

export default Button;
