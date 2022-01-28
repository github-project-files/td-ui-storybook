import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { ReactComponent as IconChevron1 } from '../../assets/icons/chevron_1.svg'
import { ReactComponent as IconChevron2 } from '../../assets/icons/chevron_2.svg'

const Wrapper = Styled.div`
border-bottom: 1px solid ${({ theme }) => theme.colors.border_color};
  
`

const AccordionButton = Styled.div`
    width: 100%;
    text-align: left;
    border: none;
    padding: 12px 10px;
    font-size: 16px;
    font-weight: normal;
    
    border-radius: 0;
    line-height: normal;
    text-transform: unset;
    color: ${({ theme }) => theme.colors.primary_main};
    &:hover {
        background-color: unset;
        color: ${({ theme }) => theme.colors.primary_main};
    }
    display: grid;
        grid-template-columns: auto 10px;
        align-items: center;
`
const AccordionBody = Styled.div`
    overflow: auto;
    transition: max-height 0.5s ease;
    padding: 0px 10px;
`
const AccordionIcon = Styled.span`
    float: right;
    margin-top: 6px;

    .not-active{
        transform: scaleY(-1);
    }
`

const Accordion = props => {
    const {
        title,
        children,
        isOpen,
        isDisabled,
        buttonStyles,
        bodyStyles,
        bodyMaxHeight
    } = props

    const [isActive, setIsActive] = React.useState(isOpen)
    const [height, setHeight] = React.useState('0px')

    const content = React.useRef(null)

    const toggleAccordion = (e) => {
        e && e.preventDefault();
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
        <Wrapper>
            <AccordionButton style={buttonStyles} onClick={toggleAccordion}>
                {title}
                {!isDisabled ? (
                    <AccordionIcon>
                        {isActive ? (
                            <IconChevron1 className='icon-14 icon cursor-pointer'></IconChevron1>
                        ) : (
                            <IconChevron2 className='icon-14 icon cursor-pointer not-active'></IconChevron2>
                        )}
                    </AccordionIcon>
                ) : (
                    ''
                )}
            </AccordionButton>
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

Accordion.propTypes = {
    title: PropTypes.string || PropTypes.node,
    isOpen: PropTypes.bool,
    buttonStyles: PropTypes.shape({}),
    bodyStyles: PropTypes.shape({}),
    bodyMaxHeight: PropTypes.string
}
Accordion.defaultProps = {
    title: null,
    isOpen: false,
    buttonStyles: {},
    bodyStyles: {},
    bodyMaxHeight: ''
}

export default Accordion
