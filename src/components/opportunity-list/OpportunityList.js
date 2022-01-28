import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { Tag } from '../../components/tag/Tag'
import { StepProgressBar } from '../../components/step-progress-bar/StepProgressBar'
import { ReactComponent as IconStar } from '../../assets/icons/star.svg'
import { ReactComponent as IconEdit } from '../../assets/icons/edit.svg'
import { ReactComponent as IconWarning } from '../../assets/icons/warning.svg'
import { ReactComponent as IconStarFilled } from '../../assets/icons/star-filled.svg'

const StyledWrapper = Styled.div`
    padding: ${({ theme }) => theme.spacing.large};
    &:hover{
        background-color: ${({ theme }) => theme.colors.grayscale_1};
    }
    .primary-details {
        display: grid;
        grid-template-columns: 500px auto 0px;
        align-items: center;
       .primary-text{
            display: grid;
            grid-template-columns: 90px auto;
            align-items: center;
            grid-gap: ${({ theme }) => theme.spacing.medium};
            &.stagnant{
                grid-template-columns: 170px auto;
                .stagnant-date{
                    color: ${({ theme }) => theme.colors.black};
                    padding-right:6px;
                    border-right:1px solid ${({ theme }) =>
                        theme.colors.grayscale_4};
                    .warning-icon{
                        margin-right:4px;
                    } 
                  }
            }
              .date{
                  color: ${({ theme }) => theme.colors.grayscale_8};
                  padding-right:6px;
                  border-right:1px solid ${({ theme }) =>
                      theme.colors.grayscale_4};
                  .edit-icon{
                      margin-right:4px;
                      width:8px;
                  }
              }
             
              .seperator{
                  height:4px;
                  color: ${({ theme }) => theme.colors.secondary_main};
              }
              .by-name{
                color: ${({ theme }) => theme.colors.secondary_main};
              }
              .by{
                color: ${({ theme }) => theme.colors.grayscale_8};
              }
       }
       .from-name{
            color: ${({ theme }) => theme.colors.primary_dark};
            text-align: right;

       }
    }
    .secondary-text{
        padding:8px 0px 8px 0px;
    }
    .tertiary-text{
        display: grid;
        grid-template-columns: auto 200px;
        align-items: center;
        .progress-bar{
            z-index:0;
        }
        .progress-text{
            color: ${({ theme }) => theme.colors.primary_main};
            margin-top: -4px;
            text-align:right;
        }
    }
    .text-with-tag{
        display: grid;
        grid-template-columns: 200px auto;
        align-items: center;
        padding:0px 0px 0px 0px;
       .name{ 
        color: ${({ theme }) => theme.colors.secondary_main};
       }
    }

   
`

const OpportunityList = ({ stagnant,starFilled, ...props }) => {
    const data = props.opportunityListData
    return (
        <StyledWrapper>
            <div className='primary-details'>
                <div 
                className={"primary-text " + (stagnant ? 'stagnant' : '')}>
                    {stagnant ? (
                        <div className='stagnant-date overline'>
                            <IconWarning className='icon-14 warning-icon'></IconWarning>
                            Stagnant since {data.date}
                        </div>
                    ) : (
                        <div className='date overline'>
                            <IconEdit className='icon-14 edit-icon'></IconEdit>
                            {data.date}
                        </div>
                    )}

                    <div className=''>
                        <span className='by overline'>By:</span>
                        <span className='by-name overline'> {data.by}</span>
                    </div>
                </div>
                <div className='from-name overline'>
                {starFilled ? (
                    <IconStarFilled className='icon-14'></IconStarFilled>)
                    :
                    (<IconStar className='icon-14'></IconStar>)
                }
                </div>
            </div>
            <div className='secondary-text paragraph-1'>{data.planName}</div>
            <div className='text-with-tag'>
                <div className='name overline uppercase'>{data.company}</div>
                <Tag
                    label={data.policy}
                    type='small'
                    backgroundColor='#ebf7ff'
                    color='#000000'
                />
            </div>
            <div className='tertiary-text'>
                <div className='progress-bar'>
                    <StepProgressBar progressBarData={data.progressBarData} />
                </div>
                <div className='progress-text paragraph-3'>
                    {data.progressText}
                </div>
            </div>
        </StyledWrapper>
    )
}

export default OpportunityList
