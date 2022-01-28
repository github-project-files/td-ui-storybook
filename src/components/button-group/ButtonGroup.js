import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const StyledWrapper = Styled.div`
.customButton {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grayscale_9};
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 2px;
    cursor: pointer;
    padding: 2px 6px;
    &.active{
        background-color: ${({ theme }) => theme.colors.primary_main};
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.primary_main};
    }
    &.storybook-button--small {
        font-size: 14px;
        padding: 2px 6px;
    }
    &.storybook-button--medium {
        font-size: 16px;
        padding: 6px 8px;
    }
    &.storybook-button--large {
        font-size: 18px;
        padding: 8px 10px;
    }
}   
`

export const ButtonGroup = ({ buttons, doSomethingAfterClick, size }) => {
    const [clickedId, setClickedId] = useState(0);
    const handleClick = (event, id) => {
        setClickedId(id)
        doSomethingAfterClick(event)
    }
    return (
        <StyledWrapper>
            {buttons.map((buttonLabel, i) => (
                <button
                    key={i}
                    name={buttonLabel}
                    onClick={event => handleClick(event, i)}
                    className={`customButton paragraph-3 uppercase ${
                        i === clickedId ? 'active' : ''
                    } storybook-button--${size}`}
                >
                    {buttonLabel}
                </button>
            ))}
        </StyledWrapper>
    )
}

ButtonGroup.propTypes = {
    size: PropTypes.string,
    onClick: PropTypes.func
}

ButtonGroup.defaultProps = {
    size: null,
    onClick: undefined
}
