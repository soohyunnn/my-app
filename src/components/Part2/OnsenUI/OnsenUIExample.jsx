import React from "react";
import ButtonExample from "./ButtonExample";
import { Page } from "react-onsenui";
import ActionSheetExample from "./ActionSheetExample";
import CheckBoxExample from "./CheckBoxExample";
import FabExample from "./FabExample";
import ListExample from "./ListExample";
import ProgressExample from "./ProgressExample";
import TabExample from "./TabExample";
import AlertExample from "./AlertExample";

export default function OnsenUIExample() {
  return (
    <Page>
      <AlertExample />
      {/* <TabExample /> */}
      <ProgressExample />
      <br />
      <br />
      <br />
      <ListExample />
      <br />
      <br />
      <br />
      <FabExample />
      <br />
      <br />
      <br />
      <CheckBoxExample />
      <ActionSheetExample />
      <ButtonExample />
    </Page>
  );
}
