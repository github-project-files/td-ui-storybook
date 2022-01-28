import React from "react";
import PropTypes from "prop-types";
import Styled, { css } from "styled-components";

const isInViewport = elem => {
    const bounding = elem.getBoundingClientRect();
    // if (bounding.top < 0 ) {
    //   return {flag: false, position: 'top', position_point: (bounding.top)}
    // } else if (bounding.left < 0){
    //   return {flag: false, position: 'left', position_point: (bounding.left)}
    // } else
    if (
        bounding.right >
        (window.innerWidth || document.documentElement.clientWidth) - 40
    ) {
        return {
            flag: false,
            position: "right",
            position_point:
                bounding.right -
                (window.innerWidth || document.documentElement.clientWidth)
        };
    }
    if (
        bounding.bottom >
        (window.innerHeight || document.documentElement.clientHeight) - 40
    ) {
        return {
            flag: false,
            position: "bottom",
            position_point:
                bounding.bottom -
                (window.innerHeight || document.documentElement.clientHeight)
        };
    }
    return { flag: true };
};

const PopOverWrapper = Styled.div`
    position: relative;
`;

const ClosedComponentWrapper = Styled.div`
    position: relative;
    top: 0;
    z-index: ${props => props.zIndex - 1};
    opacity: 1;
    transition: opacity 10ms ease-in;
    ${props => (props.isOpen && props.hideCloseComponent ? "opacity: 0;" : "")};
`;

const OpenedComponentWrapper = Styled.div`
    position: absolute;
    top: ${props => (props.hideCloseComponent ? 0 : props.minHeight + 10)}px;
    max-height: 0px;
    opacity: 0;
    transition: max-height 300ms ease-in 50ms, opacity 100ms ease-in 200ms;
    ${css`
        ${props => (props.isOpen ? `max-height: 100vh; opacity: 1;` : "")};
        ${props =>
            props.isOpen && props.zIndex ? `z-index: ${props.zIndex}` : ""};
        ${props =>
            props.isOpen && props.minHeight
                ? `min-height: ${props.minHeight}px`
                : ""};
        ${props =>
            props.enableMinWidth && props.minWidth
                ? `min-width: ${props.minWidth}px`
                : ""};
    `}
    ${css`
        .arrow_box {
            ${props => (props.isOpen ? `display: block;` : `display: none;`)};
            max-height: inherit;
            border-radius: ${props => props.borderRadius}px;
            position: relative;
            // overflow: hidden;
            border: 1px solid ${({ theme }) => theme.colors.border_color};
            box-shadow: 1px 4px 8px 0px
                ${({ theme }) => theme.colors.border_color};
            > div {
                padding: 10px;
            }
        }
        // added notch here considering openedComponent will alway open below closedComponent
        .arrow_box:after,
        .arrow_box:before {
            bottom: 100%;
            left: ${props =>
                props.notchPositionInPx
                    ? `${props.notchPositionInPx}px`
                    : `${props.notchPosition}%`};
            ${props => (props.hideCloseComponent ? "left: unset;" : "")}
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
        }

        // this will be effective if openedComponent breaks the right side window boundary
        .right:after,
        .right:before {
            left: ${props =>
                props.adjustNotchPosition
                    ? `${props.adjustNotchPosition}`
                    : "calc(100% - 5px)"} !important;
        }
    `}
`;

// NOTE: Currently notch of openedComponent is static,
// so we have to provide position from 0 to 90 in "notchPosition"

class PopOver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popOverCounter: 1,
            isOpen: false,
            isClosed: true,
            minWidth: null,
            minHeight: null
        };
    }

    componentWillReceiveProps(newProps) {
        this.props = newProps;
        console.log(this.state.popOverCounter);
        if (newProps.popOverCounter !== this.state.popOverCounter) {
            this.handleOnClick();
        }
    }

    componentWillMount() {
        document.removeEventListener("click", this.handleOutsideClick, false);
    }

    componentDidMount = () => {
        this.setState({
            minHeight: this.closeNode.clientHeight,
            minWidth: this.closeNode.clientWidth
        });
    };

    handleOnClick = event => {
        event && event.preventDefault();
        event && event.stopPropagation();
        console.log("clicked", this.state.isOpen);
        const { openedComponent } = this.props;
        if (!openedComponent) {
            return;
        }
        this.setState(
            prevState => ({
                isOpen: !prevState.isOpen,
                isClosed: prevState.isOpen
            }),
            this.addRemoveListener
        );
    };

    addRemoveListener = () => {
        console.log(this.state);
        const { isOpen } = this.state;
        if (isOpen) {
            document.addEventListener("click", this.handleOutsideClick, false);
            // Need to add delay of 300ms because of max-height animation
            this.openedNode.style.visibility = "hidden";
            this.openedNode.style.overflow = "hidden";

            setTimeout(() => {
                this.viewPortHandling();
            }, 100);
        } else {
            document.removeEventListener(
                "click",
                this.handleOutsideClick,
                false
            );
            // Removing inline styling
            this.openedNode.style = {};
            const { afterOutsideClick } = this.props;
            afterOutsideClick && afterOutsideClick();
        }
    };

    handleOutsideClick = event => {
        // ignore clicks on the component itself
        if (this.openedNode && this.openedNode.contains(event.target)) {
            return;
        }
        if (this.openedNode && this.openedNode.firstElementChild) {
            this.openedNode.firstElementChild.className = "arrow_box";
        }
        this.setState(
            {
                isClosed: true
            },
            () => {
                setTimeout(this.handleOnClick, 500);
            }
        );
    };

    viewPortHandling = () => {
        let elementData = isInViewport(this.openedNode);
        let prevPosition = elementData.position;
        while (!elementData.flag) {
            this.adjustExpandedView(elementData);
            elementData = isInViewport(this.openedNode);
            if (prevPosition === elementData.position) {
                break;
            } else {
                prevPosition = elementData.position;
            }
        }
        this.openedNode.style.visibility = "visible";
        this.openedNode.style.overflow = "inherit";
    };

    adjustExpandedView = elementData => {
        if (elementData && !elementData.flag) {
            switch (elementData.position) {
                // case 'left':
                //   this.openedNode.style.right = 'unset';
                //   this.openedNode.style.left = '-12px';
                //   break;
                // case 'top':
                //   this.openedNode.style.bottom = 'unset';
                //   this.openedNode.style.top = '-12px';
                //   break;
                case "right":
                    this.openedNode.style.left = "unset";
                    this.openedNode.style.right = "-12px";
                    this.openedNode.firstElementChild.className += " right";
                    break;
                case "bottom":
                    this.openedNode.style.top = "unset";
                    this.openedNode.style.bottom = "-12px";
                    break;
                default:
                    break;
            }
        }
    };

    render() {
        const { isOpen, isClosed, minWidth, minHeight } = this.state;
        const {
            closedComponent,
            openedComponent,
            hideCloseComponent,
            enableMinWidth,
            openedComponentStyles,
            openedComponentId,
            closedComponentId
        } = this.props;

        return (
            <PopOverWrapper>
                <OpenedComponentWrapper
                    id={openedComponentId}
                    enableMinWidth={enableMinWidth}
                    {...openedComponentStyles}
                    hideCloseComponent={hideCloseComponent}
                    minWidth={minWidth}
                    minHeight={minHeight}
                    isOpen={!isClosed}
                    ref={node => {
                        this.openedNode = node;
                    }}
                >
                    <div className="arrow_box">
                        {isOpen ? openedComponent : <div />}
                    </div>
                </OpenedComponentWrapper>
                <ClosedComponentWrapper
                    id={closedComponentId}
                    zIndex={openedComponentStyles.zIndex}
                    hideCloseComponent={hideCloseComponent}
                    isOpen={!isClosed}
                    ref={node => {
                        this.closeNode = node;
                    }}
                    onClick={this.handleOnClick}
                >
                    {closedComponent}
                </ClosedComponentWrapper>
            </PopOverWrapper>
        );
    }
}

PopOver.propTypes = {
    popOverCounter: PropTypes.number, // To change its isOpen state
    closedComponent: PropTypes.element.isRequired,
    openedComponent: PropTypes.element,
    hideCloseComponent: PropTypes.bool,
    afterOutsideClick: PropTypes.func,
    openedComponentId: PropTypes.string,
    closedComponentId: PropTypes.string,
    openedComponentStyles: PropTypes.shape({
        zIndex: PropTypes.number,
        borderColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        notchPosition: PropTypes.number,
        notchPositionInPx: PropTypes.number,
        borderRadius: PropTypes.number,
        boxShadowColor: PropTypes.string,
        adjustNotchPosition: PropTypes.string || PropTypes.number
    })
};

PopOver.defaultProps = {
    popOverCounter: 0,
    hideCloseComponent: false,
    afterOutsideClick: null,
    enableMinWidth: false,
    openedComponent: null,
    openedComponentId: "openedComponent",
    closedComponentId: "closedComponent",
    openedComponentStyles: {
        zIndex: 4,
        borderColor: "black",
        backgroundColor: "white",
        notchPosition: 20,
        notchPositionInPx: 0,
        borderRadius: 4,
        boxShadowColor: "grey",
        adjustNotchPosition: "calc(100% - 5px)" // this will be effective if openedComponent breaks the right side window boundary
    }
};

export default PopOver;
