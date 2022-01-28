import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Tab from './Tab';
import Styled from "styled-components";
const StyledWrapper = Styled.div`
.tab-list {
    padding-left: 0;
  }
  
  .tab-list-item {
    display: inline-block;
    list-style: none;
    margin-bottom: -1px;
    padding: 0.5rem 0.75rem;
    border-bottom: 3px solid transperant;
    margin-right: 6px;
    cursor: pointer;
    color:${({ theme }) => theme.colors.grayscale_9};
    &:hover{
        color:${({ theme }) => theme.colors.grayscale_9} !important;
        border-bottom: 3px solid ${({ theme }) => theme.colors.primary_main} !important;
    }
  }
  
  .tab-list-active {
    background-color: white;
    color:${({ theme }) => theme.colors.secondary_main};
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondary_main};
  }
  .tab-content{
    padding-top:20px;
  }`

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired
    }

    constructor (props) {
        super(props)

        this.state = {
            activeTab: this.props.children[0].props.label
        }
    }

    onClickTabItem = tab => {
        this.setState({ activeTab: tab })
    }

    render () {
        const {
            onClickTabItem,
            props: { children },
            state: { activeTab }
        } = this

        return (
            <StyledWrapper>
                <div className='tabs'>
                    <ol className='tab-list'>
                        {children.map(child => {
                            const { label } = child.props

                            return (
                                <Tab
                                    activeTab={activeTab}
                                    key={label}
                                    label={label}
                                    onClick={onClickTabItem}
                                />
                            )
                        })}
                    </ol>
                    <div className='tab-content'>
                        {children.map(child => {
                            if (child.props.label !== activeTab)
                                return undefined
                            return child.props.children
                        })}
                    </div>
                </div>
            </StyledWrapper>
        )
    }
}

export default Tabs
