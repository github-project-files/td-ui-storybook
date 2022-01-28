import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";


const Wrapper = Styled.div`
    position: relative;
    color: ${props => props.theme.colors.secondary_dark};

    /***
    * React Select
    */
   .react-select__multi-value{
    background-color: ${props => props.theme.colors.pastelYellow};
    color: ${props => props.theme.colors.darkGrey66};
    text-transform:uppercase;
}
.react-select__multi-value__remove{
    &:hover{
        background-color: ${props => props.theme.colors.pastelYellow};
        color: ${props => props.theme.colors.darkGrey66};
    }
}
.react-select__option{
    color: ${props => props.theme.colors.darkGrey66};
}
   .react-select__multi-value__label{
       padding:4px;
       padding-right:0px;
       text-transform:uppercase;
       color: ${props => props.theme.colors.darkGrey66};
   }
   .react-select__multi-value__value{

    text-transform:uppercase;
    color: ${props => props.theme.colors.darkGrey66};
}
    .react-select-container {
        width: 100%;
        font-size: 14px;
        .react-select__placeholder {
        }
        .react-select__input input {
            color: ${props => props.theme.colors.black};
        }
        .react-select__control {
            height:36px;
            border: 1px solid;
            border-color: ${props =>
                props.errorMessage
                    ? `${props.theme.colors.danger} !important`
                    : props.theme.colors.grayscale_4};
            padding: 1px 0;
            box-shadow: none;
            background-color: ${props =>
                props.isDisabled
                    ? props.theme.colors.secondary_lighter
                    : props.theme.colors.white};
            &--menu-is-open {
                box-shadow: none;
                border-color: ${props => props.theme.colors.secondary_lighter};
            }
            &:hover:not(:disabled) {
                border-color: ${props =>
                    props.errorMessage
                        ? `${props.theme.colors.danger} !important`
                        : props.theme.colors.grayscale_4};
            }
            &:focus {
                outline: none;
                border-color: ${props =>
                    props.errorMessage
                        ? `${props.theme.colors.danger} !important`
                        : props.theme.colors.grayscale_4
                    };
            }
            :disabled {
                background-color: ${props =>
                    props.theme.colors.secondary_lighter};
            }

            ::placeholder {
                font-size: 14px;
                line-height: 16px;
                color: ${props => props.theme.colors.secondary_light};
            }
        }
        .react-select__indicator-separator {
            display: none;
        }
        .react-select__menu_list {
            padding-top:0px;
            padding-bottom:0px;
            background-color: ${props => props.theme.colors.black};
            
        }
        .react-select__single-value {
            font-size: 14px;
            color: ${props => props.theme.colors.black};
        }
        .react-select__menu {
            font-size: 1rem;
            margin-top:0px;
            border-radius: 0px;

            color: ${props => props.theme.colors.black};
            background-color: ${props => props.theme.colors.white};
           
            &--menu-is-open {
                border: 1px solid rgba(218, 219, 226, 1);
            }
        }
    }
`;

const SelectComponent = props => {
    const {
        label,
        onChange,
        handleOnChangeCustomElements,
        widgetType,
        name,
        isMulti,
        isCreatable,
        onBlur,
        errorMessage,
        keyReferral,
        valueReferral,
        value: stateValue,
        ...others
    } = props;

    const ReactSelect = isCreatable ? CreatableSelect : Select;

    const newOptions = others.options.map(option => ({
        value: option[keyReferral],
        label: option[valueReferral]
    }));

    others.options = newOptions;

    let value;
    if (isMulti && isCreatable && Array.isArray(stateValue)) {
        const copyValues = stateValue;
        value = others.options.filter(option => {
            if (stateValue.includes(option.value)) {
                copyValues.filter(x => x !== option.value);
                return true;
            }
            return false;
        });
        copyValues.map(x => {
            value.push({ value: x, label: x });
        });
    } else if (isMulti && Array.isArray(stateValue)) {
        value = others.options.filter(x => stateValue.includes(x.value));
    } else {
        value = others.options.find(x => stateValue === x.value);
        if (stateValue === null) {
            value = stateValue;
        }
    }

    const handleOnChange = event => {
        const data = {
            widgetType,
            name
        };

        if (isMulti) {
            data.value = event ? event.map(x => x.value) : event;
        } else {
            data.value = event ? event.value : null;
        }

        data.others = { ...event, ...others };
        handleOnChangeCustomElements(data);
    };

    // TODO: Find better way to do this.
    const handleOnBlur = event => {
        let target = {
            name: name
        };
        if (isMulti) {
            target.value = value && value.length ? value[0].value : "";
        } else {
            target.value = value ? value.value : "";
        }
        onBlur &&
            onBlur({
                ...event,
                target
            });
    };

    const Error = Styled.span`
    display: block;
    font-size: 14px;
    color: ${props => props.theme.colors.danger};
  `;

    const customStyles = () => {
        return {
            control: base => ({
                ...base,
                minHeight: 30
            }),
            dropdownIndicator: base => ({
                ...base,
                padding: 4
            }),
            clearIndicator: base => ({
                ...base,
                padding: 4
            }),
            valueContainer: base => ({
                ...base,
                padding: "0px 6px"
            }),
            input: base => ({
                ...base,
                margin: 0,
                padding: 0
            })
        };
    };

    return (
        <Wrapper errorMessage={errorMessage} isDisabled={others.isDisabled}>
            <div required={others.required}>{label}</div>
            <ReactSelect
                id="meraki-react-select"
                className="react-select-container"
                classNamePrefix="react-select"
                {...others}
                onBlur={handleOnBlur}
                value={value}
                isMulti={isMulti}
                onChange={handleOnChange}
                styles={customStyles()}
            />
            {errorMessage && <Error>{errorMessage}</Error>}
        </Wrapper>
    );
};

Select.propTypes = {
    label: PropTypes.string,
    handleOnChangeCustomElements: PropTypes.func,
    isMulti: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    widgetType: PropTypes.string
};

Select.defaultProps = {
    name: "",
    widgetType: "",
    label: "",
    isMulti: false,
    onChange: () => {},
    handleOnChangeCustomElements: () => {},
    options: [],
    keyReferral: "value",
    valueReferral: "label"
};

export default SelectComponent;
