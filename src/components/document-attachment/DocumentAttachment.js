import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { Tag } from '../../components/tag/Tag'
import PopOver from '../../components/popover/PopOver'
import { ReactComponent as ImagePdf } from '../../assets/pdf.svg'
import { ReactComponent as ImageDelete } from '../../assets/icons/delete.svg'

const StyledWrapper = Styled.div`
    padding: 8px;
    border:1px solid ${({ theme }) => theme.colors.border_color};
    border-radius:8px;
    .primary-details {
        display: grid;
        grid-template-columns: 40px auto 20px;
        align-items: flext-start;
        grid-gap: ${({ theme }) => theme.spacing.medium};
        .pdf-image{
            height:40px;
            width:40px;
        }
        .heading{
            color: ${({ theme }) => theme.colors.black};
        }
        .size{
            color: ${({ theme }) => theme.colors.grayscale_8};
        }
        .delete-icon{
            display:none;
        }
       
       
    }

  &:hover{
    background-color: ${({ theme }) => theme.colors.grayscale_1};
    .delete-icon{
        display:block;
    } 
}
   
`

const DocumentAttachment = props => {
    const data = props.DocumentAttachmentData
    return (
        <StyledWrapper>
            <div className='primary-details'>
                <ImagePdf className='pdf-image cursor-pointer'></ImagePdf>
                <div className='right-section'>
                    <div className='paragraph-3 section-sub-header'>
                        {data.pdfName}
                    </div>
                    <div className='size overline'>{data.size}</div>
                </div>
                <ImageDelete className='delete-icon'></ImageDelete>
            </div>
        </StyledWrapper>
    )
}

export default DocumentAttachment
