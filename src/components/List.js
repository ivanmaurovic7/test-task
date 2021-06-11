import React from "react";
import ListItem from "./ListItem";

const List = ({ colors, setColors, lastColor }) => {
    return (
    <ul className="List">
        {colors.map((color, index) => <ListItem key={color.hex} colors={colors} color={color} lastColor={lastColor} setColors={setColors} />)}
    </ul>
)};

export default List;
