import React from 'react'
import * as PropTypes from 'prop-types'
import styled from 'styled-components'

const TIME_LINE_ITEM_MIN_HEIGHT = 50
const MIN_TOP_PADDING = TIME_LINE_ITEM_MIN_HEIGHT / 2

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 0px 1fr;
    width: 100%;
    &.completed {
        .indicator {
            top: 46px !important;
        }
    }
    &.in-progress {
        .indicator {
            top: 44px !important;
        }
    }
    &.pending {
        .indicator {
            top: 40px !important;
        }
    }
`

const STATUSES = {
    PENDING: 'pending',
    IN_PROGRESS: 'in-progress',
    COMPLETED: 'completed'
}

const getNodeColor = (colors, status) => {
    switch (status) {
        case STATUSES.PENDING:
            return colors.grayscale_4

        case STATUSES.IN_PROGRESS:
            return colors.white

        case STATUSES.COMPLETED:
            return colors.secondary_dark

        default:
            return colors.secondary_dark
    }
}

const getNodeBorderColor = (colors, status) => {
    switch (status) {
        case STATUSES.PENDING:
            return colors.grayscale_4

        case STATUSES.IN_PROGRESS:
            return colors.secondary_dark

        case STATUSES.COMPLETED:
            return colors.secondary_dark

        default:
            return colors.secondary_dark
    }
}
const getTopBarColor = (colors, status) => {
    console.log(colors, status)
    switch (status) {
        case STATUSES.PENDING:
            return colors.grayscale_4

        case STATUSES.IN_PROGRESS:
            return colors.white

        case STATUSES.COMPLETED:
            return colors.secondary_dark

        default:
            return colors.secondary_dark
    }
}

const getBottomBarColor = (colors, status) => {
    console.log(colors, status)
    switch (status) {
        case STATUSES.PENDING:
            return colors.grayscale_4

        case STATUSES.IN_PROGRESS:
            return colors.grayscale_4

        case STATUSES.COMPLETED:
            return colors.secondary_dark

        default:
            return colors.secondary_dark
    }
}

const ProgressBarWrapper = styled.div`
    min-height: ${`${TIME_LINE_ITEM_MIN_HEIGHT}px`};
    width: 100%;
    height: 100%;
    position: relative;
    &.line:before {
        position: absolute;
        content: '';
        width: 2px;
        top: 0;
        bottom: 0;
        left: 50%;
    }
    &.top-bar:before {
        bottom: ${`calc(100% - 34px)`};
        background-color: ${props =>
            getTopBarColor(props.theme.colors, props.status)};
    }
    &.bottom-bar:before {
        top: 40px;
        background-color: ${props =>
            getBottomBarColor(props.theme.colors, props.status)};
    }
    &.completed:before {
        background-color: ${({ theme }) => theme.colors.secondary_dark};
        margin-bottom: -36px;

    }
    &.pending:before {
        background-color: ${({ theme }) => theme.colors.grayscale_4};
    }
    &.in-progress:before {
        background-color: ${({ theme }) => theme.colors.grayscale_4};
        border: 1px solid ${({ theme }) => theme.colors.grayscale_4};
        top: 36px;
        bottom: 0;
    }
    &.in-progress:after {
        background-color: ${({ theme }) => theme.colors.secondary_dark};
    }
`
const Index = styled.span`
    height: 12px;
    width: 12px;
    position: absolute;
    left: 50%;
    transform: translate(-40%, -50%);
    padding: 6px 6px;
    border-radius: 50%;
    color: ${props => props.theme.colors.white};
    background-color: ${props =>
        getNodeColor(props.theme.colors, props.status)};
    border: 2px solid
        ${props => getNodeBorderColor(props.theme.colors, props.status)};
`
const ComponentWrapper = styled.div`
    margin-top: ${`${TIME_LINE_ITEM_MIN_HEIGHT / 2 - 12}px`};
`

const TimeLineItem = props => {
    const {
        index,
        totalCount,
        status,
        noTopBar,
        noBottomBar,
        components,
        marginRight,
        marginLeft
    } = props

    let classes = ['line']
    if (1 === index && 1 === totalCount) {
        classes = []
    } else if (index === 1) {
        classes.push('bottom-bar')
    } else if (index === totalCount || status === STATUSES.IN_PROGRESS) {
        classes.push('top-bar')
    }
    classes.push(status)

    if (noTopBar && !classes.includes('bottom-bar')) {
        classes.push('bottom-bar')
    }
    if (noBottomBar && !classes.includes('top-bar')) {
        classes.push('top-bar')
    }

    // No changes to classes after this point.
    classes = classes.join(' ')

    return (
        <Wrapper className={status}>
            {components && (
                <ComponentWrapper style={{ marginRight: marginRight }}>
                    {components.A}
                </ComponentWrapper>
            )}
            <div>
                <ProgressBarWrapper className={classes} status={status}>
                    <Index className='indicator' status={status} />
                </ProgressBarWrapper>
            </div>
            {components && (
                <ComponentWrapper style={{ marginLeft: marginLeft }}>
                    {components.B}
                </ComponentWrapper>
            )}
        </Wrapper>
    )
}

TimeLineItem.propTypes = {
    index: PropTypes.number,
    totalCount: PropTypes.number.isRequired,
    status: PropTypes.oneOf(['pending', 'in-progress', 'completed']),
    components: PropTypes.shape({
        A: PropTypes.node,
        B: PropTypes.node
    }),
    noBottomBar: PropTypes.bool,
    noTopBar: PropTypes.bool
}
TimeLineItem.defaultProps = {
    index: 0,
    components: {},
    status: 'pending',
    noBottomBar: false,
    noTopBar: false
}

export default TimeLineItem
