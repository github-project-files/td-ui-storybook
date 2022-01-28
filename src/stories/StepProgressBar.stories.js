import React from "react";

import { StepProgressBar } from "../components/step-progress-bar/StepProgressBar";

export default {
    title: "Example/StepProgressBar",
    component: StepProgressBar
};
const progressBarData = [
    {id: 1, state:"done", tooltipValue:"sample 1"},
    {id: 2, state:"done", tooltipValue:"sample 2"},
    {id: 3, state:"active", tooltipValue:"sample 3"},
    {id: 4, state:"pending", tooltipValue:"sample 4"},
    {id: 5, state:"pending", tooltipValue:"sample 5"},
    {id: 6, state:"pending", tooltipValue:"sample 6"}
  ];
const Template = args => <StepProgressBar progressBarData={progressBarData} {...args} />;

export const Small = Template.bind({});
Small.args = {
    size: "small"
};

// export const Medium = Template.bind({});
// Medium.args = {
//     size: "medium"
// };

// export const Large = Template.bind({});
// Large.args = {
//     size: "large"
// };

