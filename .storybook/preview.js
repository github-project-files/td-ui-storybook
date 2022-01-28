import React from "react";
import "../src/styles/main.scss";

import ThemeDecorator from "./theme.decorator";

export const decorators = [ThemeDecorator];

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" }
};
