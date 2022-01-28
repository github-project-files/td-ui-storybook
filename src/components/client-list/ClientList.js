import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { Tag } from '../../components/tag/Tag'
import { ReactComponent as ImageLogo } from '../../assets/logo.svg'
import { ReactComponent as ImageChevron } from '../../assets/icons/chevron.svg'

const StyledWrapper = Styled.div`
    padding: ${({ theme }) => theme.spacing.large};
    border-bottom:1px solid ${({ theme }) => theme.colors.border_color};
    &:hover{
        background-color: ${({ theme }) => theme.colors.grayscale_1};
    }
    .primary-details {
        display: grid;
        grid-template-columns: 100px auto 20px;
        align-items: center;
        grid-gap: ${({ theme }) => theme.spacing.medium};
        .heading{
            color: ${({ theme }) => theme.colors.primary_main};
            padding-bottom:4px;
        }
        .contacts{
            color: ${({ theme }) => theme.colors.grayscale_9};
            padding-bottom:8px;
        }
       .icon-chevron{
        transform: rotate(90deg);
       }
    }
  

   
`

const ClientList = props => {
    const data = props.ClientListData
    return (
        <StyledWrapper>
            <div className='primary-details'>
                <ImageLogo></ImageLogo>
                <div className='right-section'>
                    <div className='heading section-sub-header'>
                        {data.companyName}
                    </div>
                    <div className='contacts overline'>{data.contacts}</div>
                    <Tag
                        label={data.tagData.tagName}
                        type={data.tagData.type}
                        backgroundColor={data.tagData.backgroundColor}
                        color={data.tagData.color}
                    />
                </div>
                <ImageChevron className='icon-chevron cursor-pointer'></ImageChevron>
            </div>
        </StyledWrapper>
    )
}

export default ClientList
