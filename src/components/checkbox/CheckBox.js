import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const StyledCheckBoxContainer = Styled.label`
    width: fit-content;
    display: block;
    position: relative;
    padding-left: 25px;
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size:14px;


    /* On mouse-over, add a grey background color */
    &:hover input:not(:disabled) ~ .checkmark {
        border-color: ${({ theme }) => theme.colors.grayscale_4};
    }

    /* When the checkbox is checked, add a blue background */
    input:checked ~ .checkmark {
        background-color: ${({ theme }) => theme.colors.primary_main};
    }

    input:disabled ~ .checkmark {
       border-color: ${({ theme }) => theme.colors.grayscale_4};
       background-color: ${({ theme }) => theme.colors.grayscale_4};
       &:after{
        border-color:${({ theme }) => theme.colors.grayscale_6} !important;
    }
    }

    /* Show the checkmark when checked */
    input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .checkmark:after {
        left: 5px;
        top: 2px;
        width: 4px;
        height: 8px;
        border: solid white;
        border-width: 0 1px 1px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

const StyledCheckBox = Styled.input`
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
`;

const StyledCheckBoxSpan = Styled.span`
    /* Create a custom checkbox */
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    border: 1px solid ${props => props.theme.colors.secondary_lighter};
    border-radius: 4px;
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

    /* Create the checkmark/indicator (hidden when not checked) */
    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`;
const StyledCheckBoxValue = Styled.span`

`;

const ClientList = props => {
    const { checkBoxLabel, disabled, checkBoxStyles, ...others } = props;

    return (
        <StyledCheckBoxContainer
            style={checkBoxStyles}
            className="container"
            disabled={disabled}
        >
            <StyledCheckBoxValue disabled={disabled}>
                {checkBoxLabel}
            </StyledCheckBoxValue>
            <StyledCheckBox type="checkbox" disabled={disabled} {...others} />
            <StyledCheckBoxSpan className="checkmark" disabled={disabled} />
        </StyledCheckBoxContainer>
    );
};

ClientList.propTypes = {
    checkBoxLabel: PropTypes.node,
    checkBoxStyles: PropTypes.shape({}),
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

ClientList.defaultProps = {
    checkBoxLabel: "",
    checkBoxStyles: {},
    disabled: false
};

export default ClientList;
