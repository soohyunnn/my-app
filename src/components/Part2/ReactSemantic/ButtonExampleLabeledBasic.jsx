import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";

export default function ButtonExampleLabeledBasic() {
  return (
    <div>
      <Button as="div" labelPosition="left">
        <Label as="a" basic color="red" pointing="right">
          2,048
        </Label>
        <Button color="red">
          <Icon name="heart" />
          Like
        </Button>
      </Button>
      <Button as="div" labelPosition="right">
        <Button basic color="blue">
          <Icon name="fork" />
          Fork
        </Button>
        <Label as="a" basic color="blue" pointing="left">
          2,048
        </Label>
      </Button>
      <br />
      <br />
      <br />
      <Button content="Standard" basic />
      <Button basic color="red" content="Red" />
      <Button basic color="orange" content="Orange" />
      <Button basic color="yellow" content="Yellow" />
      <Button basic color="olive" content="Olive" />
      <Button basic color="green" content="Green" />
      <Button basic color="teal" content="Teal" />
      <Button basic color="blue" content="Blue" />
      <Button basic color="violet" content="Violet" />
      <Button basic color="purple" content="Purple" />
      <Button basic color="pink" content="Pink" />
      <Button basic color="brown" content="Brown" />
      <Button basic color="grey" content="Grey" />
      <Button basic color="black" content="Black" />

      <Button color="red" content="Red" />
      <Button color="orange" content="Orange" />
      <Button color="yellow" content="Yellow" />
      <Button color="olive" content="Olive" />
      <Button color="green" content="Green" />
      <Button color="teal" content="Teal" />
      <Button color="blue" content="Blue" />
      <Button color="violet" content="Violet" />
      <Button color="purple" content="Purple" />
      <Button color="pink" content="Pink" />
      <Button color="brown" content="Brown" />
      <Button color="grey" content="Grey" />
      <Button color="black" content="Black" />
    </div>
  );
}
