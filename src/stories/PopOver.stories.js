import React, { useState } from "react";
import Styled from "styled-components";
import PopOver from "../components/popover/PopOver";

export default {
    title: "Example/PopOver",
    component: PopOver
};

const closedComponent = (
  <div>
    <h3>Click Here</h3>
  </div>
);
const openedComponent = (
  <div>
    content
  </div>
);

const Wrapper = Styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 20px;
`;

export const popover = () => {
  return (
    <Wrapper>
      <div>
        <PopOver
        
          openedComponentStyles={{
            zIndex: 4,
            borderColor: "black",
            backgroundColor: "white",
            notchPosition: 55,
            borderRadius: 4,
            boxShadowColor: "grey"
          }}
          closedComponent={closedComponent}
          openedComponent={openedComponent}
        />
      </div>
      </Wrapper>
  );
};
