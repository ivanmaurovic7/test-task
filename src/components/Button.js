import React from "react";

const Button = ({ buttonText, buttonTextColor, onClick, }) => (
    <button style={{color: buttonTextColor}} onClick={onClick}>{buttonText}</button>
);

export default Button;
