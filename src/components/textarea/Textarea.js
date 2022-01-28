import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

 import Label from "../../components/label/Label";

const TextAreaElement = Styled.textarea`
    width: 100%;
    line-height: 16px;
    font-size: 14px;
    resize: vertical;
    min-height: 130px;
    border: 1px solid ${({ theme }) => theme.colors.border_color};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 3px 9px;
    border-radius: 4px;
    border-color: ${props =>
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
    }
    :disabled {
        background-color: ${props => props.theme.colors.secondary_lighter};
        border-color: ${props =>
            props.error
                ? `${props.theme.colors.danger} !important`
                : props.theme.colors.grayscale_6};
    }

    ::placeholder {
        line-height: 16px;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.grayscale_6};
    }
`;

const HelpText = Styled.span`
    display: block;
    font-size: 14px;
    margin-top:4px;
    color: ${({ theme }) => theme.colors.black};
`;

const Error = Styled(HelpText)`
    color: ${({ theme }) => theme.colors.danger};
`;

const Textarea = props => {
    const { label, required, errorMessage, helpText, ...others } = props;

    return (
        <>
            <Label className="meraki-label" required={required}>
                {label}
            </Label>
            <TextAreaElement
                className="meraki-textarea-element"
                error={errorMessage}
                {...others}
            />
            {errorMessage && <Error>{errorMessage}</Error>}
            {helpText && (
                <HelpText className="meraki-helptext">{helpText}</HelpText>
            )}
        </>
    );
};

Textarea.propTypes = {
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    helpText: PropTypes.string,
    required: PropTypes.bool
};
Textarea.defaultProps = {
    label: "",
    errorMessage: "",
    helpText: "",
    required: false
};

export default Textarea;
