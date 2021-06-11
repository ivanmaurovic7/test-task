import React, { useState, useEffect } from "react";
import { getColors } from "./services/colors";
import Button from "./components/Button";
import List from "./components/List";

import './App.css';

const App = () => {

  const [colors, setColors] = useState([]);
  const [lastColor, setLastColor] = useState(null);
  const buttonText = (colors.length && colors[colors.length - 1].hex) || 'Get color';

  const fetchColor = async () => {
    try {
      const fetchedColors = await getColors();
      const colorString = `#${fetchedColors.new_color}`;
      if(fetchedColors.new_color && !colors.find(c => c.hex === colorString)) {
        setColors([
          ...colors,
          {
            hex: colorString,
            position: colors.length,
          },
        ]);
        setLastColor(colorString);
      }

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchColor();
  }, []);

  return (
    <div className="App">
      <Button buttonText={buttonText} buttonTextColor={lastColor} onClick={fetchColor} />
      <List colors={colors} setColors={setColors} lastColor={lastColor} />
    </div>
  );
}

export default App;
