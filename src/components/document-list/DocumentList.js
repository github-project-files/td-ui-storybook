import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { Tag } from "../../components/tag/Tag";
import PopOver from "../../components/popover/PopOver";
import { ReactComponent as ImagePdf } from "../../assets/pdf.svg";
import { ReactComponent as Image3Dots } from "../../assets/icons/3_dots.svg";

const StyledWrapper = Styled.div`
    padding: ${({ theme }) => theme.spacing.large};
    border-bottom:1px solid ${({ theme }) => theme.colors.border_color};

    .primary-details {
        display: grid;
        grid-template-columns: 60px auto 20px;
        align-items: center;
        grid-gap: ${({ theme }) => theme.spacing.medium};
        .pdf-image{
            height:40px;
        }
        .heading{
            color: ${({ theme }) => theme.colors.black};
        }
        .secondary-text{
            color: ${({ theme }) => theme.colors.primary_main};
            padding-bottom:2px;
            padding-top:2px;
            .size{
             padding-right:10px;
             border-right:1px solid ${({ theme }) => theme.colors.border_color};
            }
            .date{
                padding-left:10px;
            }
        }
        .previously-saved-text{
            color: ${({ theme }) => theme.colors.grayscale_6};

        }
       .icon-3dots{
         display:none;
          height:14px;
       }
    }
  .filter-component{
      width:82px;
      padding:0px !important;
      background-color: ${({ theme }) => theme.colors.white};
      color:${({ theme }) => theme.colors.primary_main};
      .filter-element{
          padding: 4px 8px;
          border-bottom: 1px solid ${({ theme }) => theme.colors.border_color};
         &.delete{
             color:${({ theme }) => theme.colors.danger};
         }
      }
  }
  &:hover{
    background-color: ${({ theme }) => theme.colors.grayscale_1};
    .icon-3dots{
        display:block;
    }
}
`;

const closedComponent = (
    <div>
        <Image3Dots className="icon-20 icon-3dots cursor-pointer"></Image3Dots>
    </div>
);
const openedComponent = (
    <div className="filter-component">
        <div className="filter-element paragraph-3">Replace</div>
        <div className="filter-element paragraph-3">Rename</div>
        <div className="filter-element delete paragraph-3">Delete</div>
    </div>
);

const DocumentList = props => {
    const data = props.DocumentListData;
    return (
        <StyledWrapper>
            <div className="primary-details">
                <ImagePdf className="pdf-image cursor-pointer"></ImagePdf>
                <div className="right-section">
                    <div className="paragraph-3 section-sub-header">
                        {data.pdfName}
                    </div>
                    <div className="secondary-text small-text">
                        <span className="size">{data.size}</span>
                        <span className="date">{data.date}</span>
                    </div>
                    <div className="previously-saved-text small-text">
                        Previously saved as: {data.prevInformation}
                    </div>
                </div>
                <PopOver
                    openedComponentStyles={{
                        zIndex: 4,
                        borderColor: "black",
                        backgroundColor: "white",
                        notchPosition: 55,
                        borderRadius: 4,
                        boxShadowColor: "grey"
                    }}
                    closedComponent={closedComponent}
                    openedComponent={openedComponent}
                />
            </div>
        </StyledWrapper>
    );
};

export default DocumentList;
