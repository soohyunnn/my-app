import React from "react";
import AlertDismissible from "./AlertDismissible";
import ButtonExample from "./ButtonExample";
import CarouselExample from "./CarouselExample";
import GridExample from "./GridExample";

export default function ReactBootStrapExample() {
  return (
    <div>
      <CarouselExample />
      <GridExample />
      <ButtonExample />
      <br />
      <br />
      <AlertDismissible />
    </div>
  );
}
