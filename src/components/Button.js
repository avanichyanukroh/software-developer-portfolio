import React from 'react';

const Button = (props) => {

    const { animationStart, text, textColor, backgroundColor, style, onClick, isBordered, isLink, href } = props;

    if (!isLink) {
        return (
            <button
                className={animationStart ? 'fadeIn fadeInDelay' : 'hidden'}
                style={{
                    padding: '8px 24px',
                    color: textColor,
                    backgroundColor: isBordered ? 'rgba(0, 0, 0, 0)' : backgroundColor,
                    border: `1px solid ${backgroundColor}`,
                    fontFamily: `"Oswald", sans-serif`,
                    display: 'inline-block',
                    cursor: 'pointer',
                    ...style
                }}
                onClick={onClick}
            >
                {text}
            </button>
        );
    }
    else {
        return (
            <a
                href={href}
                target="_blank"
                className={animationStart ? 'fadeIn fadeInDelay' : 'hidden'}
                style={{
                    padding: '8px 24px',
                    color: textColor,
                    backgroundColor: isBordered ? 'rgba(0, 0, 0, 0)' : backgroundColor,
                    border: `1px solid ${backgroundColor}`,
                    fontFamily: `"Oswald", sans-serif`,
                    display: 'inline-block',
                    cursor: 'pointer',
                    ...style
                }}
                onClick={onClick}
            >
                {text}
            </a>
        );
    } 
}

export default Button;
