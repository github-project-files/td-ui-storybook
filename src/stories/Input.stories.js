import React from "react";

import Input from "../components/input/Input";

export default {
    title: "Example/Input",
    component: Input,
    argTypes: {
        helpText: { control: "text" },
        errorMessage: { control: "text" }
    },
    decorators: [Story => <Story />]
};

const Template = ({ width, ...args }) => (
    <div style={{ margin: "20px", width: "400px" }}>
        <Input {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {
    label: "Designation",
    id: "designation",
    name: "designation",
    // value: "UI/UX Designer",
    placeholder: "Designation"
};

export const Required = Template.bind({});

Required.args = {
    label: "Designation",
    id: "designation",
    name: "designation",
    required: true,
    // value: "UI/UX Designer",
    placeholder: "Designation"
};

export const WithHelpText = Template.bind({});

WithHelpText.args = {
    label: "Designation",
    id: "designation",
    name: "designation",
    placeholder: "Designation",
    helpText: "This field can be an optional"
};

export const ErrorState = Template.bind({});

ErrorState.args = {
    label: "Designation",
    id: "designation",
    name: "designation",
    // value: "UI/UX Designer",
    placeholder: "Designation",
    errorMessage: "Can't be empty"
};

export const InputWithIcon = Template.bind({});

InputWithIcon.args = {
    label: "Designation",
    id: "designation",
    name: "designation",
    // value: "UI/UX Designer",
    placeholder: "Designation",
    inputWithIcon: true
};
