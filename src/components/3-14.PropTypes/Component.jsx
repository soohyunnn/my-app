import React from "react";
import PropType from "prop-types";

function PropComponent(props) {
  return (
    <div>
      {props.name}
      <br />
      {props.age}
    </div>
  );
}

PropComponent.defaultProps = {
  name: "pia",
  age: 8,
};

PropComponent.propTypes = {
  name: PropType.string,
  // age: PropType.number.isRequired,
  age: function (props, propName, componentName) {
    if (!/[7][8]]/.test(props[propName])) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    }
  },
};

export default function Component() {
  return (
    <div>
      <PropComponent />
    </div>
  );
}
