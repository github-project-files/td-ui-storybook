import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { ReactComponent as IconSend } from '../../assets/icons/send.svg'


const StyledButton = Styled.button`
  &.storybook-button {
    font-weight: 700;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }
  &.storybook-button--primary {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary_main};
    border-color: ${({ theme }) => theme.colors.primary_main};
    &:hover{
      background-color: ${({ theme }) => theme.colors.secondary_main};
      border: 1px solid transparent;
      border-color: ${({ theme }) => theme.colors.secondary_main};
    }
  }
  &.storybook-button--secondary {
    color: ${({ theme }) => theme.colors.primary_main};
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.grayscale_4};
    &:hover{
      background-color: ${({ theme }) => theme.colors.grayscale_1};
      color: ${({ theme }) => theme.colors.secondary_main};
      border-color: ${({ theme }) => theme.colors.secondary_main};
    }
  }
  &.storybook-button--tertiary {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.white};
    &:hover{
      background-color: ${({ theme }) => theme.colors.grayscale_2};
      color: ${({ theme }) => theme.colors.secondary_main};
      border-color: ${({ theme }) => theme.colors.grayscale_2};
    }
  }
  &.storybook-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  &.storybook-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  &.storybook-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
  &.with-icon{
    padding: 8px 11px !important;
  }
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary,secondary, backgroundColor, size, label,icon, ...props }) => {
    const mode = primary
        ? "storybook-button--primary"
        : (secondary ? "storybook-button--secondary" : "storybook-button--tertiary");
    const image = icon ? 'with-icon' : '';
    return (
        <StyledButton
            type="button"
            className={[
                "storybook-button",
                image,
                `storybook-button--${size}`,
                mode
            ].join(" ")}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {label.length > 0 && (<div>{label}</div>)}
            {icon && (<IconSend></IconSend>)}
        </StyledButton>
    );
};

Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    secondary: PropTypes.bool,
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func
};

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    secondary:false,
    size: "medium",
    onClick: undefined
};
