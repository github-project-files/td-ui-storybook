import React from "react";

import { Tag } from "../components/tag/Tag";

export default {
    title: "Example/Tag",
    component: Tag
};

const Template = args => <Tag {...args} />;

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Tag",
    backgroundColor: "#ebf7ff",
    color: "#000000"
};

export const Medium = Template.bind({});
Medium.args = {
    size: "medium",
    label: "Tag",
    backgroundColor: "#efebff",
    color: "#000000"
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Tag",
    backgroundColor: "#efebff",
    color: "#000000"
};

