import { Switch } from "antd";
import React, { useState } from "react";

import Slider from "./components/Slider/Slider";
import RootContainer, { Rotate, RotatingContainer } from "./styled";

const App = () => {
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [rotationDisabled, setRotationDisabled] = useState(false);

  const handleSliderChange = (value) => setRotationSpeed(value);

  const handleSwitchChange = (disabled) => {
    setRotationDisabled(disabled);
  };

  return (
    <RootContainer>
      <RotatingContainer>
        <Rotate animated={!rotationDisabled} rotationSpeed={rotationSpeed}>
          &lt; 💅🏾 &gt;
        </Rotate>
        <Slider
          disabled={rotationDisabled}
          max={9}
          min={0}
          onChange={handleSliderChange}
          value={rotationSpeed}
        />
        Disable:{" "}
        <Switch
          checked={rotationDisabled}
          onChange={handleSwitchChange}
          size="small"
        />
      </RotatingContainer>
    </RootContainer>
  );
};

export default App;
