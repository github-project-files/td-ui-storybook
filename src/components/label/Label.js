import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const LabelElement = Styled.label`
    display: block;
    margin-bottom: 4px;
    font-size: 14px;
    text-align: left;
    text-transform: uppercase;
    color: ${props => props.theme.colors.black};
    .required {
        padding-left: 4px;
        color: ${props => props.theme.colors.danger};
    }
`;

const Label = props => {
    const { children, required } = props;

    return (
        <LabelElement>
            {children}
            {required && children && (
                <span className="required">{required && `*`}</span>
            )}
        </LabelElement>
    );
};

Label.propTypes = {
    children: PropTypes.any,
    required: PropTypes.bool
};
Label.defaultProps = {
    required: false
};

export default Label;
