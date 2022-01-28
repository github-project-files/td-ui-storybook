import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const StyledWrapper = Styled.div`
    &.tag-details {
       width: max-content;
    }
     &.storybook-tag-small {
        padding: 1px 6px;
     }
      &.storybook-tag-medium {
        padding: 4px 10px;
     }
      &.storybook-tag-large {
        padding: 6px 12px;
     }
    
`;

export const Tag = ({ color, size, label, backgroundColor, ...props }) => {
    
    return (
        <StyledWrapper  {...props}  
            style={{backgroundColor:backgroundColor, color: color}}
            className={[
                "tag-details uppercase tag-text",
                `storybook-tag-${size}`
            ].join(" ")}
            
            {...props}>
           {label}
        </StyledWrapper>
    );
};

Tag.propTypes = {
    color: PropTypes.string,
    /**
     * Is this the principal call to action on the page?
     */
    size: PropTypes.string,
    /**
     * TagCard contents
     */
    label: PropTypes.string.isRequired,
     /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func
};

Tag.defaultProps = {
    color: null,
    size: "small",
    onClick: undefined,
    backgroundColor: null,
};
