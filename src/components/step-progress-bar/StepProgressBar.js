import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Tooltip from '../../components/tooltip/Tooltip'

const StyledWrapper = Styled.div`
.progress {
    width: 100%;
    list-style: none;
    list-style-image: none;
    margin: 14px 0 10px 0;
    padding: 0;
    display: flex;
    align-items: center;
}

.progress li {
    float: left;
    text-align: center;
    position: relative;
}

.progress .name {
    display: block;
    vertical-align: bottom;
    text-align: center;
    margin-bottom: 1em;
    color: black;
}

.progress .step {
    color: black;
    border: 2px solid ${({ theme }) => theme.colors.grayscale_2};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: inline-block;
    z-index: 0;
}

.progress .step span {
    opacity: 0.3;
}

.progress .active .name,
.progress .active .step span {
    opacity: 1;
}

.progress .step:before {
    content: "";
    display: block;
    background-color: ${({ theme }) => theme.colors.grayscale_2};
    height: 0.4em;
    width: 50%;
    position: absolute;
    bottom: 11px;
    left: 0;
    z-index: -1;
}

.progress .step:after {
    content: "";
    display: block;
    background-color: ${({ theme }) => theme.colors.grayscale_2};
    height: 0.4em;
    width: 50%;
    position: absolute;
    bottom: 11px;
    right: 0;
    z-index: -1;
}

.progress li:first-of-type .step:before {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display:none;
}

.progress li:last-of-type .step:after {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display:none;
}

.progress .done .step,
.progress .done .step:before,
.progress .done .step:after,
.progress .active .step,
.progress .active .step:before {
    background-color: ${({ theme }) => theme.colors.secondary_light};
}

.progress .done .step,
.progress .active .step {
    border: 2px solid ${({ theme }) => theme.colors.secondary_light};
}
.progress .active .step{
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.secondary_light} !important;
    height:15px;
    width:15px;
}
.tooltip-content{
    height:15px;
    width:15px;
    color: transparent;
}
`

export const StepProgressBar = ({ color, ...props }) => {
    const progressbarLength = 100 / props.progressBarData.length

    return (
        <StyledWrapper>
            <ol
                className='progress'
                data-steps={props.progressBarData.length}
                style={{ marginLeft: -(progressbarLength / 2 - 1) + '%' }}
            >
                {props.progressBarData.map(data => (
                    <li
                        key={data.id}
                        className={data.state}
                        style={{ width: progressbarLength + '%' }}
                    >
                        <span className='step'>
                            <Tooltip content={data.tooltipValue} direction='bottom' className="cursor-pointer">
                                <span className="tooltip-content cursor-pointer">.</span>
                            </Tooltip>
                        </span>
                    </li>
                ))}
            </ol>
        </StyledWrapper>
    )
}

StepProgressBar.propTypes = {
    color: PropTypes.string,
    /**
     * Is this the principal call to action on the page?
     */
    size: PropTypes.string,
    /**
     * TagCard contents
     */
    label: PropTypes.string,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func
}

StepProgressBar.defaultProps = {
    color: null,
    size: 'small',
    onClick: undefined,
    backgroundColor: null
}
