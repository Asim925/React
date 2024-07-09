// ToggleText.js
import { useState } from "react";

function ToggleText() {
  // Declare a state variable named "isVisible" and a function to update it named "setIsVisible"
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p>This is some text that can be toggled.</p>}
    </div>
  );
}

export default ToggleText;
