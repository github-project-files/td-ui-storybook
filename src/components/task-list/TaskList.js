import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { Tag } from '../../components/tag/Tag'

const StyledWrapper = Styled.div`
    padding: ${({ theme }) => theme.spacing.large};
    &:hover{
        background-color: ${({ theme }) => theme.colors.grayscale_1};
    }
    .primary-details {
        display: grid;
        grid-template-columns: 100px auto 0px;
        align-items: center;
        grid-gap: ${({ theme }) => theme.spacing.medium};
       .primary-text{
            display: grid;
            grid-template-columns: 44px auto;
            align-items: center;
            grid-gap: ${({ theme }) => theme.spacing.medium};
              .taskList-id{
                  color: ${({ theme }) => theme.colors.grayscale_8};
                  padding-right:6px;
              }
       }
       .from-name{
            color: ${({ theme }) => theme.colors.primary_dark};
            text-align: right;

       }
    }
    .secondary-text{
        padding:8px 0px 16px 0px;
    }
    .tertiary-text{
        .progress-text{
            color: ${({ theme }) => theme.colors.grayscale_8};
        }
    }

   
`

const TaskList = props => {
    const data = props.TaskListData;
    return (
        <StyledWrapper>
            <div className='primary-details'>
                <div className='primary-text'>
                    <div className='taskList-id overline'>{data.taskId}</div>
                    <Tag
                        label={data.tagData.tagName}
                        type={data.tagData.type}
                        backgroundColor={data.tagData.backgroundColor}
                        color={data.tagData.color}
                    />
                </div>
                <div className='from-name overline'>From: {data.from}</div>
            </div>
            <div className="secondary-text paragraph-2">
            {data.description}
            </div>
            <div className="tertiary-text">
            <div className="progress-bar"></div>
            <div className="progress-text overline">{data.slaText}</div>
            </div>
        </StyledWrapper>
    )
}

export default TaskList
