import React from "react";
import { action } from "@storybook/addon-actions";
import CheckBox from "../components/checkbox/CheckBox";

export default {
    title: "Example/CheckBox",
    component: CheckBox,
    argTypes: {
        showNotes: { control: "boolean" }
    },
    decorators: [Story => <Story />]
};

export const Toggle = () => (
  <CheckBox checkBoxLabel="Click Me" onChange={action("Checkbox clicked")} />
);

export const Checked = () => (
  <CheckBox
    checkBoxLabel="Click Me"
    onChange={action("Checkbox clicked")}
    checked={true}
  />
);

export const NotChecked = () => (
  <CheckBox
    checkBoxLabel="Click Me"
    onChange={action("Checkbox clicked")}
    checked={false}
  />
);

export const Disabled = () => (
  <CheckBox
    checkBoxLabel="Click Me"
    onChange={action("Checkbox clicked")}
    disabled={true}
    checked={true}
  />
);

export const CustomStyles = () => (
  <CheckBox
    onChange={action("Checkbox clicked")}
    checkBoxLabel="Check Box with margin 100px"
    checkBoxStyles={{ margin: "100px" }}
  />
);
