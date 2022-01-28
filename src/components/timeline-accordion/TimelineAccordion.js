import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { ReactComponent as IconChevron1 } from '../../assets/icons/chevron_1.svg'
import { ReactComponent as IconChevron2 } from '../../assets/icons/chevron_2.svg'
import { ReactComponent as IconChevronWhite } from '../../assets/icons/chevron_white.svg'
import { ReactComponent as IconEdit } from '../../assets/icons/edit.svg'
import { Button } from '../../components/button/Button'

const Wrapper = Styled.div`
border: 1px solid ${({ theme }) => theme.colors.border_color};
margin-bottom:12px;
.acc-btn::before {
    content: " ";
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(12px * -1);
    left: calc(6px * -1);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-right-color: ${({ theme }) => theme.colors.secondary_dark}
}
.acc-btn{
    position: relative;
    border-left: 6px solid ${({ theme }) => theme.colors.border_color};
    .date{
        padding-top:5px;
        color: ${({ theme }) => theme.colors.grayscale_9};
        .edit-icon{
            margin-right:4px;
            width:8px;
        }
    }
    .editing{
        padding-top:5px;
    }
   
}
&.completed{
    .acc-btn{
        border-left: 6px solid ${({ theme }) => theme.colors.secondary_dark};
    }
    &.open{
        border: 1px solid ${({ theme }) => theme.colors.secondary_dark};
    }
}
&.in-progress{
    border: 1px solid ${({ theme }) => theme.colors.secondary_dark};
    .acc-btn{
        border-left: 6px solid ${({ theme }) => theme.colors.secondary_dark};
        background: ${({ theme }) => theme.colors.secondary_dark};
        .editing, .title{
            color: ${({ theme }) => theme.colors.white};
        }
    }
    &.open{
        border: 1px solid ${({ theme }) => theme.colors.secondary_dark};
    }
    .icon{
        stroke: ${({ theme }) => theme.colors.white} !important;
        .polyline{
            stroke: ${({ theme }) => theme.colors.white} !important;
        }
       
    }
}
&.pending{
    .acc-btn{
        border-left: 6px solid ${({ theme }) => theme.colors.border_color};
        &::before{
            border-right-color: ${({ theme }) =>
                theme.colors.border_color} !important;
        }
        
    } 
}

}
.acc-btn{
    width: 100%;
    text-align: left;
    border: none;
    padding: 12px 17px;
    font-size: 16px;
    font-weight: normal;
    
    border-radius: 0;
    line-height: normal;
    text-transform: unset;
    color: ${({ theme }) => theme.colors.primary_main};
    display: grid;
    grid-template-columns:  auto 200px;
    align-items: center;
    // &:hover {
    //     background-color: unset;
    //     color: ${({ theme }) => theme.colors.primary_main};
    // }
    .right-section{
        display: grid;
        grid-template-columns:  auto;
        align-items: center;
        text-align:right;
        &.button-visible{
            grid-template-columns:  auto 50px;
        align-items: center;
        text-align:right;
        }
    }
}
`

const AccordionBody = Styled.div`
    overflow: auto;
    transition: max-height 0.5s ease;
    padding: 0px 12px;
`
const AccordionIcon = Styled.span`
    float: right;
    margin-top:12px; 
    .not-active{
        transform: scaleY(-1);
    }
`

const TimelineAccordion = props => {
    const {
        title,
        children,
        isOpen,
        isDisabled,
        buttonStyles,
        bodyStyles,
        bodyMaxHeight,
        status,
        showDate,
        showButton,
        date
    } = props

    const [isActive, setIsActive] = React.useState(isOpen)
    const [height, setHeight] = React.useState('0px')

    const content = React.useRef(null)

    const toggleAccordion = e => {
        e && e.preventDefault()
        if (!isDisabled) {
            setIsActive(!isActive)
            setHeight(
                isActive
                    ? '0px'
                    : bodyMaxHeight || `${content.current.scrollHeight + 150}px`
            )
        }
    }

    useEffect(() => {
        // if (isOpen) {
        // setIsActive(isOpen);
        setHeight(
            isOpen
                ? bodyMaxHeight || `${content.current.scrollHeight + 150}px`
                : '0px'
        )
        // }
    }, [props.isOpen])

    return (
        <Wrapper className={status + ' ' + (isActive ? 'open' : '')}>
            <div
                style={buttonStyles}
                onClick={toggleAccordion}
                className='acc-btn'
            >
                <div className='left-section'>
                    <div className='title paragraph-2'>{title}</div>
                    {showDate && (
                        <div className='date overline'>
                            <IconEdit className='icon-14 edit-icon'></IconEdit>
                            {date}
                        </div>
                    )}
                    {status === 'in-progress' && (
                        <div className='editing overline'>Editing...</div>
                    )}
                </div>
                <div
                    className={
                        `right-section ` + (showButton ? 'button-visible' : '')
                    }
                >
                    {showButton && <Button label='Re-open Stage' />}

                    {!isDisabled ? (
                        <AccordionIcon>
                            {status === 'in-progress' ? (
                                <div>
                                    {isActive ? (
                                        <IconChevronWhite className='icon-14 icon cursor-pointer'></IconChevronWhite>
                                    ) : (
                                        <IconChevronWhite className='icon-14 icon cursor-pointer not-active'></IconChevronWhite>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    {isActive ? (
                                        <IconChevron1 className='icon-14 icon cursor-pointer'></IconChevron1>
                                    ) : (
                                        <IconChevron2 className='icon-14 icon cursor-pointer not-active'></IconChevron2>
                                    )}
                                </div>
                            )}
                        </AccordionIcon>
                    ) : (
                        ''
                    )}
                </div>
            </div>
            <AccordionBody
                ref={content}
                style={{
                    ...bodyStyles,
                    maxHeight: height,
                    overflow: isActive ? 'visible' : 'auto'
                }}
            >
                {children}
            </AccordionBody>
        </Wrapper>
    )
}

TimelineAccordion.propTypes = {
    title: PropTypes.string || PropTypes.node,
    isOpen: PropTypes.bool,
    buttonStyles: PropTypes.shape({}),
    bodyStyles: PropTypes.shape({}),
    bodyMaxHeight: PropTypes.string
}
TimelineAccordion.defaultProps = {
    title: null,
    isOpen: false,
    buttonStyles: {},
    bodyStyles: {},
    bodyMaxHeight: ''
}

export default TimelineAccordion
