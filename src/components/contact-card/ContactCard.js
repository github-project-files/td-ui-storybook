import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { useMeasure } from "react-use";

import { ReactComponent as IconCall } from "../../assets/icons/call.svg";
import { ReactComponent as IconMail } from "../../assets/icons/mail.svg";
import { ReactComponent as IconChevron } from "../../assets/icons/small-chevron.svg";

const StyledWrapper = Styled.div`
    padding: ${({ theme }) => theme.spacing.large};
    &:hover {
        background-color: ${({ theme }) => theme.colors.grayscale_1};
    }
    .primary-details {
        grid-area: primary-details;
        display: grid;
        grid-template-columns: 36px 1fr;
        align-items: center;
        grid-column-gap: ${({ theme }) => theme.spacing.medium};
        grid-row-gap: ${({ theme }) => theme.spacing.x_small};

        .avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: #9499ff;
            grid-row: 1/3;
        }

        .paragraph-1 {
            line-height: 14px;
        }
        .overline {
            line-height: 14px;
            text-transform: uppercase;
            grid-column: 2/-1;
        }
        .icon-chevron {
            display: block;
        }
    }

    .secondary-details {
        grid-area: secondary-details;
        display: grid;
        grid-template-columns: 20px 1fr;
        align-items: center;
        grid-column-gap: ${({ theme }) => theme.spacing.medium};
        grid-row-gap: ${({ theme }) => theme.spacing.x_small};
        .paragraph-2 {
            line-height: 14px;
        }
    }

    .options {
        grid-area: options;
        display: grid;
        grid-template-columns: max-content;
        grid-gap: ${({ theme }) => theme.spacing.medium};
        .icon-chevron {
            height: 10px;
            width: 14px;
            &.invert {
                transform: rotate(180deg);
            }
        }
    }

    .notes {
        grid-area: notes;
        display: grid;
        grid-column: 1/-1;
        justify-content: center;
        margin-top: ${({ theme }) => theme.spacing.medium};
    }

    .paragraph-3 {
        color: ${({ theme }) => theme.colors.primary_main};
    }

    &.container--md, &.container--sm {
        display: grid;
        grid-column-gap: ${({ theme }) => theme.spacing.large};
        grid-template-columns: 1fr max-content;
        grid-template-areas: 'primary-details options'
                            'secondary-details .'
                            'notes .';
        .secondary-details, .notes {
            margin: 12px 0 0 46px;
        }
    }

    &.container--lg  {
        display: grid;
        grid-template-columns: 1fr auto max-content;
        grid-template-areas: "primary-details secondary-details options";
        grid-column-gap: ${({ theme }) => theme.spacing.large};
        .secondary-details {
            margin: unset;
        }
    }

`;

const containerSizes = {
    sm: 0,
    md: 200,
    lg: 600
};

const generateWidthClassesString = (containerClassName, width, sizes) =>
    Object.keys(sizes).reduce((sizesObjString, size) => {
        let newString = sizesObjString;
        if (width >= sizes[size]) {
            newString += `${containerClassName}--${size} `;
        }
        return newString;
    }, "");

const ContactCard = props => {
    const [ref, { width, ...others }] = useMeasure();
    const containerClasses = generateWidthClassesString(
        "container",
        width,
        containerSizes
    );

    const { name, designation, mobile, email, notes, showNotes } = props;
    const [hideNotes, setHideNotes] = React.useState(!showNotes);

    return (
        <StyledWrapper className={containerClasses} ref={ref}>
            <div className="primary-details">
                <div className="avatar"></div>
                <div className="paragraph-1">{name}</div>
                <div className="overline">{designation}</div>
            </div>
            <div className="secondary-details">
                <IconCall className="icon-14"></IconCall>
                <div className="paragraph-2">{mobile}</div>
                <IconMail className="icon-14"></IconMail>
                <div className="paragraph-2">{email}</div>
            </div>
            <div className="options">
                <IconChevron
                    className={`icon-chevron cursor-pointer ${
                        !hideNotes ? "invert" : ""
                    }`}
                    onClick={() => setHideNotes(!hideNotes)}
                />
            </div>
            {!hideNotes && <div className="notes paragraph-3">{notes}</div>}
        </StyledWrapper>
    );
};

ContactCard.propTypes = {
    designation: PropTypes.string,
    email: PropTypes.string,
    mobile: PropTypes.string,
    name: PropTypes.string,
    showNotes: PropTypes.bool
};

ContactCard.defaultProps = {
    name: "Johnathan Doe",
    designation: "UI/UX Designer",
    mobile: "91-9660923541",
    email: "johnathan.doe@think.design",
    notes: "Johnathan Doe reports directly to CEO for contract verification",
    showNotes: false
};

export default ContactCard;
