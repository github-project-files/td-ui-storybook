import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { ReactComponent as IconAttachment } from '../../assets/icons/attachment.svg'

const StyledWrapper = Styled.div`
    label {
        display: block;
        width: 100%;
        color: ${({ theme }) => theme.colors.primary_dark};
        margin-bottom: 4px;
        &::after {
            content: ${({ required }) => (required ? "'*'" : "")};
            color: ${({ theme }) => theme.colors.danger};
        }
    }
    input {
        display: block;
        width: 100%;
        padding: 12px 8px;
        height: 40px;
        border: 1px solid ${({ hasError, theme }) =>
            hasError ? theme.colors.danger : theme.colors.grayscale_4};
        border-radius: 4px;
        color: ${({ theme }) => theme.colors.primary_dark};
        &:placeholder {
            color: ${({ theme }) => theme.colors.primary_main};
        }
        &:hover {
            border: 1px solid ${({ theme }) => theme.colors.grayscale_6};
        }
        &:active {
            border: 1px solid ${({ theme }) => theme.colors.secondary_main};
        }
        &:focus {
            outline: unset;
            border: 1px solid ${({ theme }) => theme.colors.secondary_main};
        }
    }
    .helpText {
        margin-top: 4px;
    }
    .errorMessage {
        margin-top: 4px;
        color: ${({ theme }) => theme.colors.danger};
    }
    .input-wrapper{
        position:relative;
        .icon-wrapper{
            position: absolute;
            right: 10px;
            top: 12px;
            .icon{
                margin-left:8px;
            }
        }
    }
`;

const Input = props => {
    const {
        label,
        id,
        className,
        labelClassName,
        helpText,
        required,
        errorMessage,
        inputWithIcon,
        ...others
    } = props;
    const labelClasses = `paragraph-3 ${labelClassName || ""}`;
    const inputClasses = `paragraph-3 ${className || ""}`;
    return (
        <StyledWrapper hasError={!!errorMessage} required={required}>
            <label className={labelClasses} for={id}>
                {label}
            </label>
            <div className="input-wrapper">
            <input
                className={inputClasses}
                id={id}
                required={required}
                {...others}
            />
            {inputWithIcon && (
                <div className="icon-wrapper">
                    <IconAttachment className="icon cursor-pointer"></IconAttachment>
                    <IconAttachment className="icon cursor-pointer"></IconAttachment>
                </div>
            )}
            </div>
            {errorMessage && (
                <div className="overline errorMessage">{errorMessage}</div>
            )}

            {helpText && <div className="overline helpText">{helpText}</div>}
        </StyledWrapper>
    );
};

Input.propTypes = {
    required: PropTypes.bool,
    errorMessage: PropTypes.any,
    helpText: PropTypes.any,
    id: PropTypes.any,
    label: PropTypes.any,
    className: PropTypes.string,
    labelClassName: PropTypes.string
};

Input.defaultProps = {
    required: false,
    errorMessage: "",
    helpText: "",
    id: "",
    label: "",
    className: "",
    labelClassName: ""
};

export default Input;
