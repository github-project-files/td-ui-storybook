import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import Label from "../../components/label/Label";
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'

const StyledInputContainer = Styled.div`
    ${props =>
        props.type === "search" ? "position: absolute; width: 100%;" : ""};
    &.left-inner-addon {
        position: relative;
    }
    &.left-inner-addon input {
        padding-left: 35px !important;
    }
    &.left-inner-addon i {
        position: absolute;
        padding: 16px 16px;
        pointer-events: none;
    }


    &.right-inner-addon {
        position: relative;
    }
    &.right-inner-addon input {
        padding-right: 35px !important;
    }
    &.right-inner-addon i {
        position: absolute;
        right: 0px;
        padding: 16px 16px;
        pointer-events: none;
    }

    &.left-and-right-inner-addon {
        position: relative;
    }
    &.left-and-right-inner-addon input {
        padding-right: 35px !important;
        padding-left: 35px !important;
    }
    &.left-and-right-inner-addon i.left {
        position: absolute;
        padding: 16px 16px;
        pointer-events: none;
    }
    &.left-and-right-inner-addon i.right {
        position: absolute;
        right: 0px;
        padding: 16px 16px;
        pointer-events: none;
    }


    &.right-inner-addon-b {
        position: relative;
    }
    &.right-inner-addon-b input {
        padding-right: 35px !important;
    }
    &.right-inner-addon-b i {
        position: absolute;
        right: 0px;
        padding: 9px 12px;
        pointer-events: none;
    }
`;

const StyledInput = Styled.input`
    font-size: 14px;
    padding: 6px 8px 6px 8px;
    height:36px;
    ${props =>
        props.type === "search"
            ? `position: absolute;
                width: 14px;
                ${props.floatPosition}: 0px;
                top: 0px;
                background: ${props.theme.colors.white} url(${SearchIcon}) no-repeat 8px center;
                -webkit-transition: all .5s;
                -moz-transition: all .5s;
                transition: all .5s;
                -webkit-appearance: textfield;
                -webkit-box-sizing: content-box;
                cursor: pointer;
                border-radius: 10em;
                color: transparent;`
            : `width: 100%;
                background-color: ${props.theme.colors.white};
                border-radius: 4px;`};
    border: 1px solid ${props =>
        props.error
            ? `${props.theme.colors.danger} !important`
            : props.theme.colors.border_color};

    &:hover:not(:disabled) {
        border-color: ${props =>
            props.error
                ? `${props.theme.colors.danger} !important`
                : props.theme.colors.grayscale_6};
    }

    &:focus {
        outline: none;
        border-color: ${props =>
            props.error
                ? `${props.theme.colors.danger} !important`
                : props.theme.colors.secondary_main};
        color: ${props => props.theme.colors.black};
        ${props =>
            props.type === "search"
                ? "width: 100%; cursor: auto; border-radius: 4px; -webkit-box-sizing: border-box;"
                : ""};
    }

    :disabled {
        background-color: ${props => props.theme.colors.secondary_lighter};
        border-color: ${props =>
            props.error
                ? `${props.theme.colors.danger} !important`
                : props.theme.colors.border_color};
    }

    ::placeholder {
        line-height: 16px;
        font-size: 14px;
        color: ${props =>
            props.type === "search"
                ? "transparent"
                : props.theme.colors.grayscale_11};
    }

    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button {
	    display: none;
    }
`;

const HelpText = Styled.span`
    display: block;
    font-size: 14px;
    margin-top:4px;
    color: ${props => props.theme.colors.black};
`;

const Error = Styled(HelpText)`
    color: ${props => `${props.theme.colors.danger} !important`};
`;

const DatePicker = props => {
    const {
        children,
        classes,
        label,
        required,
        errorMessage,
        helpText,
        type,
        floatPosition,
        ...others
    } = props;

    return (
        <>
            <Label className="meraki-label" required={required}>
                {label}
            </Label>
            <StyledInputContainer className={classes} type={type}>
                {children}
                <StyledInput
                    className="meraki-input"
                    error={errorMessage}
                    type={type}
                    floatPosition={floatPosition.toLowerCase()}
                    {...others}
                />
                {errorMessage && <Error>{errorMessage}</Error>}
                {helpText && (
                    <HelpText className="meraki-helptext">{helpText}</HelpText>
                )}
            </StyledInputContainer>
        </>
    );
};

DatePicker.propTypes = {
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    helpText: PropTypes.string,
    required: PropTypes.bool,
    classes: PropTypes.string,
    floatPosition: PropTypes.string
};
DatePicker.defaultProps = {
    label: "",
    errorMessage: "",
    helpText: "",
    required: false,
    classes: "",
    floatPosition: "left"
};

export default DatePicker;
