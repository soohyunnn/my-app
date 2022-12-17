import React from "react";

export default function Event() {
  const handleButtonClick = () => {
    console.log("handleButtonClick");
  };

  const handleClickCapture = () => {
    console.log("handleClickCapture");
  };

  const handleClickChapture2 = () => {
    console.log("handleClickChapture2");
  };

  const handleClickBubble = () => {
    console.log("handleClickBubble");
  };

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickChapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick}>Button</button>
      </div>
    </div>
  );
}
