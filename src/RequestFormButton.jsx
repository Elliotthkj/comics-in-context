import React, { useContext } from "react";
import StyleContext from "./StyleContext";

export default function RequestFormButton() {
  const buttonStyling = useContext(StyleContext);

  return (
    <div>
      <button style={buttonStyling}>Click Here!</button>
      <input type="submit" value="Submit" />
    </div>
  );
}
