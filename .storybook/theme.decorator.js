import React from "react";
import { ThemeProvider } from "styled-components";
import StyledApp from "./styled-app";

// We can add theming related constants in this file in json format.

const theme = {
    colors: {
        // primary: variables.primaryColor,
        primary_main: "#363636",
        primary_dark: "#1C1C1C",

        secondary_main: "#0066FF",
        secondary_dark: "#3A69AF",
        secondary_light: "#6FA2EF",

        comment_background: "#F0F7FF",

        notes_background: "#fffaf0",

        grayscale_1: "#F9F9F9",
        grayscale_2: "#F6F6F6",
        grayscale_4: "#E7E7E7",
        grayscale_6: "#8B8B8B",
        grayscale_8: "#8b8b8b",
        grayscale_9: "#666666",
        grayscale_10: "#8c8c8c",
        grayscale_11:"#dadada",

        danger: "#FF5B5B",

        white: "#FFFFFF",

        black: "#000000",

        border_color: "#f0f0f0"
    },
    spacing: {
        x_small: "4px",
        small: "8px",
        medium: "12px",
        large: "16px",
        x_large: "20px",
        xx_large: "24px"
    },
    fonts: {
        regular: "Commissioner-Regular",
        medium: "Commissioner-Medium"
    }
};

const ThemeDecorator = storyFn => (
    <ThemeProvider theme={theme}>
        <StyledApp>{storyFn()}</StyledApp>
    </ThemeProvider>
);

export default ThemeDecorator;
