import React from "react";
import { ProgressBar, ProgressCircular } from "react-onsenui";

export default function ProgressExample() {
  return (
    <div>
      <ProgressCircular indeterminate></ProgressCircular>
      <ProgressBar indeterminate></ProgressBar>
    </div>
  );
}
