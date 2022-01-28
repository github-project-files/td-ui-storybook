import React from "react";

import DatePicker from "../components/date-picker/DatePicker";

export default {
  title: "Example/DatePicker",
  component: DatePicker
};

export const Default = () => <DatePicker label="Label" placeholder="Placeholder" />;

export const required = () => (
  <DatePicker label="Label" placeholder="Placeholder" required />
);

export const disabled = () => <DatePicker label="Label" value="Value" disabled />;

export const withoutLabel = () => <DatePicker placeholder="Placeholder" />;

export const withError = () => (
  <DatePicker
    label="Label"
    placeholder="Placeholder"
    value="Error Value"
    errorMessage="Error Message"
  />
);

export const withHelpText = () => (
  <DatePicker label="Label" placeholder="Placeholder" helpText="Help Text" />
);

export const Date = () => (
  <DatePicker
    type="date"
    value="2020-01-01"
    label="Label"
    placeholder="Placeholder"
    helpText="Help Text"
  />
);

export const Time = () => (
  <DatePicker
    type="time"
    defaultValue="10:00"
    label="Label"
    placeholder="Placeholder"
    helpText="Help Text"
  />
);

export const WithRightIcon = () => (
  <DatePicker
    label="Label"
    placeholder="Placeholder"
    helpText="Help Text"
    classes="right-inner-addon"
  >
    <i class="icon-16 icon-search"></i>
  </DatePicker>
);

export const WithLeftIcon = () => (
  <DatePicker
    label="Label"
    placeholder="Placeholder"
    helpText="Help Text"
    classes="left-inner-addon"
  >
    <i class="icon-16 icon-edit"></i>
  </DatePicker>
);

export const WithLeftAndRightIcon = () => (
  <DatePicker
    label="Label"
    placeholder="Placeholder"
    helpText="Help Text"
    classes="left-and-right-inner-addon"
  >
    <i class="icon-16 icon-edit left"></i>
    <i class="icon-16 icon-search right"></i>
  </DatePicker>
);

export const RightAlignedAnimatedSearch = () => (
  <DatePicker label="Label" type="search" floatPosition="right" />
);

export const LeftAlignedAnimatedSearch = () => (
  <DatePicker label="Label" type="search" floatPosition="left" />
);
