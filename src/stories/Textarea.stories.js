import React from "react";

import Textarea from "../components/textarea/Textarea";

export default {
  title: "Example/Textarea",
  component: Textarea
};

export const Default = () => (
  <Textarea label="Label" placeholder="Placeholder" />
);
export const Required = () => (
  <Textarea label="Label" required placeholder="Placeholder" />
);

export const WithErrorMessage = () => (
  <Textarea
    label="Label"
    required
    placeholder="Placeholder"
    errorMessage="Error Message"
  />
);

export const WithHelpMessage = () => (
  <Textarea
    label="Label"
    required
    placeholder="Placeholder"
    helpText="Help Text"
  />
);

export const WithoutLabel = () => <Textarea placeholder="Placeholder" />;

export const Disabled = () => (
  <Textarea label="Label" placeholder="Placeholder" disabled />
);
