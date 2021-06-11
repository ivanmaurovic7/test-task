import React from "react";

const ListItem = ({ colors, color, lastColor, setColors }) => {
    const incrementPosition = () => {
        const colorToReplacePosition = colors.findIndex(c => c.position === color.position - 1);
        const currentColorPosition = colors.findIndex(c => c.hex === color.hex);
        const updatedColors = [...colors];
        if (colorToReplacePosition > -1 && currentColorPosition > -1) {
            updatedColors[currentColorPosition].position = updatedColors[colorToReplacePosition].position;
            updatedColors[colorToReplacePosition].position++;
            setColors(updatedColors)
        }
    }

    const decrementPosition = () => {
        const colorToReplacePosition = colors.findIndex(c => c.position === color.position + 1);
        const currentColorPosition = colors.findIndex(c => c.hex === color.hex);
        const updatedColors = [...colors];
        if (colorToReplacePosition > -1 && currentColorPosition > -1) {
            updatedColors[currentColorPosition].position = updatedColors[colorToReplacePosition].position;
            updatedColors[colorToReplacePosition].position--;
            setColors(updatedColors)
        }
    }
    return (
        <li style={{color: color.hex, order: color.position}}  className={`List-item ${color.hex === lastColor ? "List-item--last-item" : ""}`}>
            <div className="List-item-controls">
                {
                    color.position !== 0 && <button onClick={incrementPosition}>Up</button>
                }
                {
                    color.position !== colors.length - 1 && <button onClick={decrementPosition}>Down</button>
                }
            </div>
            <span>{color.hex}</span>
        </li>
    );
};

export default ListItem;
