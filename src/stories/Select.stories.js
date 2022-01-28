import React from "react";
import { action } from "@storybook/addon-actions";

import Select  from "../components/select/Select";

export default {
  title: "Example/Select",
  component: Select
 
};

const SINGLE_SELECT = {
  isMulti: false,
  isSearchable: false,
  isClearable: true,
  keyReferral: "id",
  valueReferral: "type",
  options: [
    {
      id: "1",
      type: "Fresher"
    },
    {
      id: "2",
      type: "Experienced"
    }
  ]
};

export const Single = () => (
  <Select handleOnChangeCustomElements={action("clicked")} {...SINGLE_SELECT}>
    Primary{" "}
  </Select>
);

const Multi_SELECT = {
  isMulti: true,
  isSearchable: false,
  keyReferral: "value",
  valueReferral: "label",
  value: ["fresher2", "fresher"],
  options: [
    {
      value: "fresher",
      label: "Fresher"
    },
    {
      value: "experienced",
      label: "Experienced"
    },
    {
      value: "fresher2",
      label: "Fresher2"
    },
    {
      value: "experienced2",
      label: "Experienced2"
    },
    {
      value: "fresher3",
      label: "Fresher3"
    },
    {
      value: "experienced3",
      label: "Experienced3"
    }
  ]
};

export const MultiSelect = () => (
  <Select handleOnChangeCustomElements={action("clicked")} {...Multi_SELECT}>
    Primary{" "}
  </Select>
);

const SEARCH_SELECT = {
  isMulti: true,
  isSearchable: true,
  keyReferral: "value",
  valueReferral: "label",
  options: [
    {
      value: "fresher",
      label: "Fresher"
    },
    {
      value: "experienced",
      label: "Experienced"
    },
    {
      value: "fresher2",
      label: "Fresher2"
    },
    {
      value: "experienced2",
      label: "Experienced2"
    },
    {
      value: "fresher3",
      label: "Fresher3"
    },
    {
      value: "experienced3",
      label: "Experienced3"
    }
  ]
};

export const SearchSelect = () => (
  <Select handleOnChangeCustomElements={action("clicked")} {...SEARCH_SELECT}>
    Primary{" "}
  </Select>
);

const CREATABLE_SELECT = {
  isMulti: true,
  isCreatable: true,
  keyReferral: "value",
  valueReferral: "label",
  options: [
    {
      value: "fresher",
      label: "Fresher"
    },
    {
      value: "experienced",
      label: "Experienced"
    },
    {
      value: "fresher2",
      label: "Fresher2"
    },
    {
      value: "experienced2",
      label: "Experienced2"
    },
    {
      value: "fresher3",
      label: "Fresher3"
    },
    {
      value: "experienced3",
      label: "Experienced3"
    }
  ]
};

export const CreatableSelect = () => (
  <Select
    handleOnChangeCustomElements={action("clicked")}
    {...CREATABLE_SELECT}
  />
);

export const Disable = () => (
  <Select
    handleOnChangeCustomElements={action("clicked")}
    {...SINGLE_SELECT}
    isDisabled
  >
    Primary{" "}
  </Select>
);
