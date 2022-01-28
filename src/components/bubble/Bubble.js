import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { ReactComponent as IconBlackEdit } from '../../assets/icons/black_edit.svg'
import { ReactComponent as IconDelete } from '../../assets/icons/delete.svg'

const StyledWrapper = Styled.div`
   .comment{
        padding:12px;
        display: grid;
        grid-template-columns:  auto 100px;
        align-items: flex-start;
        background-color: ${({ theme }) => theme.colors.comment_background};
        border-radius:8px;
        .message{
            color: ${({ theme }) => theme.colors.black};
            padding-bottom:4px;
        }
        .date{
            color: ${({ theme }) => theme.colors.grayscale_8};
        }
        .icon-block{
            text-align:right;
            display:none;
            .delete-icon{
                margin-left:10px
            }
        }
        &:hover{
            .icon-block{
                display:block;
            }
        }
   }
   .notes{
        padding:12px;
        display: grid;
        grid-template-columns:  auto 100px;
        align-items: flex-start;
        background-color: ${({ theme }) => theme.colors.notes_background};
        border-radius:8px;
        .message{
            color: ${({ theme }) => theme.colors.black};
            padding-bottom:4px;
        }
        .date{
            color: ${({ theme }) => theme.colors.grayscale_8};
        }
        .icon-block{
            text-align:right;
            display:none;
            .delete-icon{
                margin-left:10px;
            }
        }
        &:hover{
            .icon-block{
                display:block;
            }
        }
   }
   .chat{
     padding:12px;
     display: grid;
     grid-template-columns:  40px auto;
     align-items: flex-start;
     .circle{
        height:26px;
        width:26px;
        border-radius:50%;
        background-color: ${({ theme }) => theme.colors.grayscale_11};
     }
     .text-block{

        .name{
            color: ${({ theme }) => theme.colors.black};
        }
        .message-block{
            padding:12px;
            border-bottom-right-radius: 8px;
            border-top-right-radius: 8px;
            border-bottom-left-radius: 8px;
            background-color: ${({ theme }) => theme.colors.grayscale_2};
            .message{
                color: ${({ theme }) => theme.colors.black};
                padding-bottom:4px;
            }
            .time{
                color: ${({ theme }) => theme.colors.grayscale_8};
            }
        }
      
     }
   }
   .userchat{
        padding:12px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        background-color: ${({ theme }) => theme.colors.secondary_dark};
        .message{
            color: ${({ theme }) => theme.colors.white};
            padding-bottom:4px;
        }
        .time{
            color: ${({ theme }) => theme.colors.grayscale_4};
        }
   }
    
`

export const Bubble = ({
    bubbleType,
    message,
    date,
    time,
    name,
    width,
    ...props
}) => {
    return (
        <StyledWrapper>
            {bubbleType === 'comment' && (
                <div className={bubbleType}>
                    <div className='message-block'>
                        <div className='message paragraph-3'>{message}</div>
                        <div className='date overline'>{date}</div>
                    </div>
                    <div className='icon-block'>
                        <IconBlackEdit className='edit-icon cursor-pointer'></IconBlackEdit>
                        <IconDelete className='delete-icon cursor-pointer'></IconDelete>
                    </div>
                </div>
            )}
            {bubbleType === 'notes' && (
                <div className={bubbleType}>
                    <div className='message-block'>
                        <div className='message paragraph-3'>{message}</div>
                        <div className='date overline'>{date}</div>
                    </div>
                    <div className='icon-block'>
                        <IconBlackEdit className='edit-icon cursor-pointer'></IconBlackEdit>
                        <IconDelete className='delete-icon cursor-pointer'></IconDelete>
                    </div>
                </div>
            )}
            {bubbleType === 'chat' && (
                <div className={bubbleType} style={{ width: width }}>
                    <div class="circle">

                    </div>
                    <div className="text-block">
                        <div className="name overline">{name}</div>
                        <div className="message-block">
                           <div className="message paragraph-3">{message}</div>
                           <div className="time overline">{time}</div>
                        </div>
                    </div>
                </div>
            )}
            {bubbleType === 'userchat' && (
                <div className={bubbleType} style={{ width: width }}>
                    <div className='message paragraph-3'>{message}</div>
                    <div className='time overline'>{time}</div>
                </div>
            )}
        </StyledWrapper>
    )
}

Bubble.propTypes = {
    bubbleType: PropTypes.string,
    onClick: PropTypes.func
}

Bubble.defaultProps = {
    bubbleType: null,
    onClick: undefined
}
