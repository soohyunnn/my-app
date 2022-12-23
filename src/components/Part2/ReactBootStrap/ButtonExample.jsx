import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

export default function ButtonExample() {
  return (
    <>
      <ButtonGroup size="lg" className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      {/*className="mb-2" 는 padding 만 주는 거고 기본 사이즈이다! */}
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="sm">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </>
  );
}
