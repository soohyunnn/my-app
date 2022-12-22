import React from "react";
import { Button } from "react-onsenui";

export default function ButtonExample() {
  const handleClick = () => {
    alert("pressed");
  };
  return (
    <>
      <Button onClick={handleClick} modifier="large--cta">
        Tap Me
      </Button>
      <Button onClick={handleClick} disabled={true}>
        disabled
      </Button>
      <Button onClick={handleClick} modifier="outline">
        Outline
      </Button>
      <Button onClick={handleClick} modifier="light">
        light
      </Button>
      <Button onClick={handleClick} modifier="quiet">
        quiet
      </Button>
      <Button onClick={handleClick} modifier="large-quiet">
        large-quiet
      </Button>
      <Button onClick={handleClick} modifier="material">
        material
      </Button>
    </>
  );
}
