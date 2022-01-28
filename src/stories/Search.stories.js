import React from "react";

import Search from "../components/search/Search";

export default {
    title: "Example/Search",
    component: Search
};

const OPTIONS = [
  { id: "Papaya sasss", value: "Papaya sasss" },
  { id: "Persimmon", value: "Persimmon" },
  { id: "Paw Paw", value: "Paw Paw" },
  { id: "Prickly Pear", value: "Prickly Pear" },
  { id: "Peach", value: "Peach" },
  { id: "Pomegranate", value: "Pomegranate" },
  { id: "Pineapple", value: "Pineapple" }
];



const filteredOptions = userInput => {
  // return [];
  return OPTIONS.filter(
    option => option.value.toLowerCase().indexOf(userInput.toLowerCase()) > -1
  );
};

const promiseOptions = inputValue => {
  console.log(inputValue);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(filteredOptions(inputValue));
    }, 100);
  });
};

export const Default = () => (
  <Search
    promiseOptions={promiseOptions}
    valueReferral={"value"}
    keyReferral={"id"}
    onChange={data => {
      console.log(data);
    }}
    value={""}
  ></Search>
);

const additionalOptions = [
  { id: "Dashboard", value: "Dashboard" },
  { id: "Papaya", value: "Papaya" },
  { id: "Pomegranate", value: "Pomegranate" },
  { id: "Pineapple", value: "Pineapple" }
];

export const AdditionalOptions = () => (
  <Search
    promiseOptions={promiseOptions}
    valueReferral={"value"}
    keyReferral={"id"}
    onChange={data => {
      console.log(data);
    }}
    additionalOptions={additionalOptions}
    value={"Papaya"}
    onFocusShowOptions
  ></Search>
);
