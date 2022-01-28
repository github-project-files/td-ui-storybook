import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

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
            grid-template-columns: 44px auto;
            align-items: center;
            grid-gap: ${({ theme }) => theme.spacing.medium};
              .project-id{
                  color: ${({ theme }) => theme.colors.grayscale_8};
                  padding-right:6px;
                  border-right:1px solid ${({ theme }) =>
                      theme.colors.grayscale_4};
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
    }
.secondary-text{
    padding-top:6px;
}
   
`

const ProjectList = props => {
    const data = props.ProjectListData
    return (
        <StyledWrapper>
            <div className='primary-details'>
                <div className='primary-text'>
                    <div className='project-id overline'>
                        {data.projectId}
                    </div>

                    <div className=''>
                        <span className='by overline'>By:</span>
                        <span className='by-name overline'> {data.by}</span>
                    </div>
                </div>
            </div>
            <div className='secondary-text paragraph-1'>{data.planName}</div>
        </StyledWrapper>
    )
}

export default ProjectList
