import React from "react";

import  Label  from "../components/label/Label";

export default {
  title: "Example/Label",
  component: Label
};

export const Default = () => <Label>Default</Label>;

export const Required = () => <Label required>Default</Label>;
