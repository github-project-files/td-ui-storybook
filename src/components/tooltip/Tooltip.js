import React, { useState } from 'react'
import Styled from 'styled-components'

const StyledWrapper = Styled.div`

/* Wrapping */
.Tooltip-Wrapper {
  display: inline-block;
  position: relative;
}

/* Absolute positioning */
.Tooltip-Tip {
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;
}

/* CSS border triangles */
.Tooltip-Tip::before {
  content: " ";
  left: 50%;
  border: solid transparent;
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-width: 6px;
  margin-left: calc(6px * -1);
}

/* Absolute positioning */
.Tooltip-Tip.top {
  top: calc(30px * -1);
}
/* CSS border triangles */
.Tooltip-Tip.top::before {
  top: 100%;
  border-top-color:${({ theme }) => theme.colors.black}
}

/* Absolute positioning */
.Tooltip-Tip.right {
  left: calc(100% + 30px);
  top: 50%;
  transform: translateX(0) translateY(-50%);
}
/* CSS border triangles */
.Tooltip-Tip.right::before {
  left: calc(6px * -1);
  top: 50%;
  transform: translateX(0) translateY(-50%);
  border-right-color: ${({ theme }) => theme.colors.black}
}

/* Absolute positioning */
.Tooltip-Tip.bottom {
  bottom: calc(30px * -1);
}
/* CSS border triangles */
.Tooltip-Tip.bottom::before {
  bottom: 100%;
  border-bottom-color: ${({ theme }) => theme.colors.black};
}

/* Absolute positioning */
.Tooltip-Tip.left {
  left: auto;
  right: calc(100% + 30px);
  top: 50%;
  transform: translateX(0) translateY(-50%);
}
/* CSS border triangles */
.Tooltip-Tip.left::before {
  left: auto;
  right: calc(6px * -2);
  top: 50%;
  transform: translateX(0) translateY(-50%);
  border-left-color: ${({ theme }) => theme.colors.black};
}

    
`

const Tooltip = props => {
    let timeout
    const [active, setActive] = useState(false)

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true)
        }, props.delay || 400)
    }

    const hideTip = () => {
        clearInterval(timeout)
        setActive(false)
    }

    return (
        <StyledWrapper>
            <div
                className='Tooltip-Wrapper cursor-pointer'
                // When to show the tooltip
                onMouseEnter={showTip}
                onMouseLeave={hideTip}
            >
                {/* Wrapping */}
                {props.children}
                {active && (
                    <div className={`Tooltip-Tip ${props.direction || 'top'}`}>
                        {/* Content */}
                        {props.content}
                    </div>
                )}
            </div>
        </StyledWrapper>
    )
}

export default Tooltip
