import React from "react";
import PropTypes from "prop-types";
import Styled, { css } from "styled-components";
import { cloneDeep } from "lodash";
import { ReactComponent as IconSearch } from '../../assets/icons/search.svg'

const SearchContainer = Styled.div`
    position: relative;
    width: 100%;
    ${css`
        &:hover {
            div.search-btn {
                visibility: visible;
                cursor: text;
            }
        }
        ul {
            width: inherit;
        }
    `}
    .search-btn{
        position: absolute;
        top: 11px;
        right: 12px;
        height:16px;
        width:16px;
        .cls-1 {
            fill: transparent;
            stroke: transparent;
        }
    }
`;

const SearchInput = Styled.input`
    color: ${props => props.theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.border_color};
    width: 100%;
    transition: width 0.3s;
    padding: 10px 12px 10px 12px;
    background-color: transparent;
    border-radius:3px;
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
`;


const SearchOptions = Styled.ul`
    position: absolute;
    z-index: 1000;
    top: 37px;
    display: block;
    list-style: none;
    transition: width 0.3s;
    max-height: 100vh;
    border-left: 1px solid ${({ theme }) => theme.colors.border_color};
    border-right: 1px solid ${({ theme }) => theme.colors.border_color};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border_color};
    background-color: ${props => props.theme.colors.white};
    overflow-y: auto;
`;

const SearchOption = Styled.li`
    // width: 400px;
    display: block;
    padding: 10px 16px;
    font-family: Merriweather;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: ${props => props.theme.colors.black};
    margin-top: ${props => (props.hasSeparator ? `2px` : "")};
    background-color: ${props =>
        props.className === "option-active"
            ? props.theme.colors.lightGrey
            : props.theme.colors.white};

    &:hover {
        cursor: pointer;
        transition: 0.3s all;

    }
`;

const EmptySearchOptions = Styled.span`
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    color: ${props => props.theme.colors.secondary};
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
`;

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
        }, wait);
    };
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeOption: 0,
            filteredOptions: [],
            showOptions: false,
            userInput: props.value || "",
            prevUserInput: props.value || "",
            focussed: false,
            hasEmptyResponseFromApi: false
        };
        this.debounceFetchSuggestions = debounce(
            this.fetchSuggestions,
            props.debounceDelay
        );
    }

    componentWillReceiveProps(newProps) {
        const { userInput } = this.state;
        if (userInput !== newProps.value) {
            this.props = newProps;
            this.setState({
                userInput: newProps.value || "",
                prevUserInput: newProps.value || "",
                activeOption: 0,
                filteredOptions: [],
                showOptions: false
            });
        }
    }

    onInputClick = event => {
        event && event.preventDefault();
        const { focussed, userInput } = this.state;
        if (!focussed) {
            event.target.select();
        }
        // this.setState({ focussed: true }, () => {
        //     const { userInput } = this.state;
        //     this.updateState(userInput, [], false);
        //     this.debounceFetchSuggestions(true);

        //     // const { userInput } = this.state;
        //     // const { onFocusShowOptions } = this.props;
        //     // if (onFocusShowOptions) {
        //     //     this.updateState(userInput, []);
        //     // }
        //     this.addRemoveEventListener();
        // });
        this.setState({ focussed: true });
        this.debounceFetchSuggestions(true);
        this.addRemoveEventListener();
    };

    onBlur = event => {
        // event && event.preventDefault();
        const { focussed } = this.state;
        if (focussed) {
            this.handleOutsideClick({});
        }
    };

    onChange = e => {
        const { options, promiseOptions, valueReferral } = this.props;
        const userInput = e.target.value;

        if (promiseOptions) {
            this.setState(
                {
                    userInput: userInput
                },
                this.debounceFetchSuggestions
            );
        }
         else {
            const filteredOptions = options.filter(
                option =>
                    option[valueReferral]
                        .toLowerCase()
                        .indexOf(userInput.toLowerCase()) > -1
            );
            this.updateState(userInput, filteredOptions);
        }
    };

    fetchSuggestions = isOnClick => {
        const { userInput } = this.state;
        const { promiseOptions } = this.props;
        promiseOptions(isOnClick ? "" : userInput).then(
            res => {
                this.updateState(userInput, res, true);
            },
            err => {
                // TBD
            }
        );
    };

    handleOutsideClick = event => {
        // ignore clicks on the component itself
        if (this.openedNode && this.openedNode.contains(event.target)) {
            return;
        }
        this.setState(
            prevState => ({
                userInput: prevState.userInput,
                // prevUserInput: "",
                activeOption: 0,
                showOptions: false,
                filteredOptions: [],
                focussed: false
            }),
            this.addRemoveEventListener
        );
    };

    addRemoveEventListener = () => {
        const { focussed } = this.state;
        if (focussed) {
            document.addEventListener("click", this.handleOutsideClick, false);
        } else {
            document.removeEventListener(
                "click",
                this.handleOutsideClick,
                false
            );
        }
    };

    updateState = (userInput, filteredOptions, fromApi) => {
        const { additionalOptions, valueReferral, keyReferral } = this.props;
        let separateOptions = [];
        let finalOptions = [...filteredOptions];
        if (
            additionalOptions &&
            Array.isArray(additionalOptions) &&
            additionalOptions.length
        ) {
            separateOptions = cloneDeep(additionalOptions);
            let isSeparatorAdded = false;
            separateOptions.forEach(x => {
                const existingOption = filteredOptions.find(
                    option => option[keyReferral] === x[keyReferral]
                );
                if (!existingOption) {
                    if (!isSeparatorAdded) {
                        isSeparatorAdded = true;
                        x.hasSeparator = true;
                    }
                    finalOptions.push(x);
                }
            });
            // separateOptions[0].hasSeparator = true;
        }
        const isPresent = finalOptions.find(
            option =>
                option[valueReferral]
                    .toLowerCase()
                    .indexOf(userInput.toLowerCase()) > -1
        );
        this.setState(prevState => {
            return {
                activeOption: 0,
                hasEmptyResponseFromApi:
                    fromApi && !filteredOptions.length && !isPresent,
                filteredOptions: prevState.focussed ? finalOptions : [],
                showOptions: true
            };
        });
    };

    onClick = selectedOption => event => {
        const { onChange, valueReferral, keyReferral } = this.props;
        // event && event.preventDefault();
        if (!selectedOption) {
            this.setState(prevState => ({
                activeOption: 0,
                filteredOptions: [],
                showOptions: false,
                focussed: false,
                userInput: prevState.prevUserInput
            }));
            document.removeEventListener(
                "click",
                this.handleOutsideClick,
                false
            );
            return;
        }
        this.setState({
            activeOption: 0,
            filteredOptions: [],
            showOptions: false,
            userInput: selectedOption[valueReferral],
            prevUserInput: selectedOption[valueReferral],
            focussed: false
        });
        document.removeEventListener("click", this.handleOutsideClick, false);
        this.openedNode &&
            this.openedNode.children[0] &&
            this.openedNode.children[0].blur();
        selectedOption && delete selectedOption.hasSeparator;
        onChange && onChange(selectedOption);
    };

    onKeyDown = event => {
        const { activeOption, filteredOptions } = this.state;

        if (event.keyCode === 13) {
            this.onClick(filteredOptions[activeOption])();
        } else if (event.keyCode === 38) {
            if (activeOption === 0) {
                return;
            }
            this.setState({ activeOption: activeOption - 1 });
        } else if (event.keyCode === 40) {
            if (activeOption === filteredOptions.length - 1) {
                return;
            }
            this.setState({ activeOption: activeOption + 1 });
        }
    };

    render() {
        const {
            activeOption,
            filteredOptions,
            showOptions,
            userInput,
            prevUserInput,
            focussed,
            hasEmptyResponseFromApi
        } = this.state;
        let optionList;
        // console.log(
        //     "filteredOptions: ",
        //     filteredOptions,
        //     userInput,
        //     prevUserInput
        // );
        const { keyReferral, valueReferral } = this.props;
        if (showOptions && focussed) {
            optionList = (
                <SearchOptions key={`options_${filteredOptions.length}_recent`}>
                    <>
                        {hasEmptyResponseFromApi && (
                            <SearchOption onMouseDown={this.onClick()}>
                                <EmptySearchOptions>
                                    We could not find what you were looking for.
                                </EmptySearchOptions>
                            </SearchOption>
                        )}
                        {filteredOptions.map((option, index) => {
                            let className;
                            if (index === activeOption) {
                                className = "option-active";
                            }
                            return (
                                <SearchOption
                                    id={`option_${option[keyReferral]}_recent`}
                                    className={className}
                                    key={`option_${option[keyReferral]}_recent`}
                                    onMouseDown={this.onClick(option)}
                                    hasSeparator={
                                        index === 0 && !hasEmptyResponseFromApi
                                            ? false
                                            : option.hasSeparator
                                    }
                                >
                                    {option[valueReferral]}
                                </SearchOption>
                            );
                        })}
                    </>
                </SearchOptions>
            );
        }
        return (
            <>
                <SearchContainer
                    id="meraki-workspace-search"
                    onBlur={this.onBlur}
                    ref={node => {
                        this.openedNode = node;
                    }}
                >
                    <SearchInput
                        type="text"
                        className="search-box"
                        onChange={this.onChange}
                        onKeyDown={this.onKeyDown}
                        onClick={this.onInputClick}
                        value={userInput}
                        placeholder= "Search"
                    ></SearchInput>
                    <IconSearch className="search-btn icon-20 icon-search"></IconSearch>
                    {optionList}
                </SearchContainer>
            </>
        );
    }
}

Search.propTypes = {
    options: PropTypes.instanceOf(Array),
    promiseOptions: PropTypes.func,
    keyReferral: PropTypes.string,
    valueReferral: PropTypes.string,
    additionalOptions: PropTypes.instanceOf(Array),
    onFocusShowOptions: PropTypes.bool,
    debounceDelay: PropTypes.number
};

Search.defaultProps = {
    options: [],
    promiseOptions: null,
    keyReferral: "value",
    valueReferral: "label",
    additionalOptions: [],
    onFocusShowOptions: false,
    debounceDelay: 0
};

export default Search;
