import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import PopOver from '../../components/popover/PopOver'
import Search from '../../components/search/Search'
import Accordion from '../../components/accordion/Accordion'
import CheckBox from '../../components/checkbox/CheckBox'
import { Button } from '../../components/button/Button'
import { action } from '@storybook/addon-actions'

import { ReactComponent as IconRange } from '../../assets/icons/range.svg'
import { ReactComponent as IconFilter } from '../../assets/icons/filter.svg'
import { ReactComponent as IconStats } from '../../assets/icons/stats.svg'

const StyledWrapper = Styled.div`
    .primary-text-block{
        display: grid;
        grid-template-columns: 200px auto;
        align-items: center;
        padding:12px 16px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.border_color};
        .heading{
            color: ${({ theme }) => theme.colors.grayscale_8};
        }
        .right-block{
            display: grid;
            grid-template-columns: auto 90px;
            align-items: center;
            .icon-section{
            display: grid;
            grid-template-columns: 30px 30px 30px;
            align-items: center;
            }
            .icon{
                margin-left:10px;
                &.with-width{
                    width:14px;
                    height:14px;
                }
            }
        }
    }
    .filter-component{
        width:276px;
        padding:0px !important;
        background:${({ theme }) => theme.colors.white};
        .filter-body{
            max-height:300px;
            overflow:auto;
        }
        .accordion-content{
            padding-top:10px;
           
        }
        label{
            padding-bottom:20px;
        }
        .filter-count{
            color:${({ theme }) => theme.colors.grayscale_8};
            padding-bottom:10px;
        }
        .filter-footer{
            border-top: 1px solid ${({ theme }) => theme.colors.grayscale_4};
            padding:12px;
            .filter-buttons{
                text-align:right;
                button{
                    margin-left:10px;
                }
            }
        }
    }
   
`
const OPTIONS = [
    { id: 'Papaya', value: 'Papaya' },
    { id: 'Persimmon', value: 'Persimmon' },
    { id: 'Paw Paw', value: 'Paw Paw' },
    { id: 'Prickly Pear', value: 'Prickly Pear' },
    { id: 'Peach', value: 'Peach' },
    { id: 'Pomegranate', value: 'Pomegranate' },
    { id: 'Pineapple', value: 'Pineapple' }
]
const filterData = [
    {
        id: 1,
        value: 'Filter by Sales Stage',
        data: [
            { id: 11, value: 'Lead Recieved' },
            { id: 12, value: 'Lead Validated' },
            { id: 13, value: 'Opportunity Recieved' },
            { id: 14, value: 'Opportunity Validated' },
            { id: 15, value: 'Pilot/PoC Done' },
            { id: 16, value: 'SoW Recieved' },
            { id: 17, value: 'Client Confirmation Recieved' }
        ],
        accordionOpen: true
    },
    {
        id: 2,
        value: 'Filter by Sales Executive',
        data: [
            { id: 21, value: 'Rishabh Kumar' },
            { id: 22, value: 'Abhijit Rao' },
            { id: 23, value: 'Sumit Kadam' }
        ],
        accordionOpen: false
    }
]

const filteredOptions = userInput => {
    // return [];
    return OPTIONS.filter(
        option =>
            option.value.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    )
}

const promiseOptions = inputValue => {
    console.log(inputValue)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(filteredOptions(inputValue))
        }, 100)
    })
}
const closedComponent = (
    <div>
        <IconFilter className='icon-14 icon cursor-pointer'></IconFilter>
    </div>
)
const openedComponent = (
    <div className='filter-component'>
        <div className="filter-body">
        {filterData.map(data => (
            <Accordion
                className='accordion-content'
                key={filterData.id}
                title={data.value}
                isOpen = {data.accordionOpen}
            >
                <section className='accordion-content'  key={filterData.id}>
                    {data.data.map(data => (
                        <CheckBox
                            key={data.id}
                            checkBoxLabel={data.value}
                            onChange={action('Checkbox clicked')}
                        />
                    ))}
                </section>
            </Accordion>
        ))}
        </div>
        <div className='filter-footer'>
            <div className='filter-count'>0 Filters Applied</div>
            <div className='filter-buttons'>
                <Button secondary={true} label='Clear All' />
                <Button primary={true} label='Apply' />
            </div>
        </div>
    </div>
)

const OpportunitiesHeader = ({ stagnant, ...props }) => {
    const data = props.opportunityListData
    return (
        <StyledWrapper>
            <div className='primary-text-block'>
                <div className='heading section-sub-header'>22 Total</div>
                <div className='right-block'>
                    <div className='search-section'>
                        <Search
                            promiseOptions={promiseOptions}
                            valueReferral={'value'}
                            keyReferral={'id'}
                            onChange={data => {
                                console.log(data)
                            }}
                            value={'Papaya'}
                        ></Search>
                    </div>
                    <div className='icon-section'>
                        <div>
                            <PopOver
                                openedComponentStyles={{
                                    zIndex: 4,
                                    borderColor: 'black',
                                    backgroundColor: 'white',
                                    notchPosition: 55,
                                    borderRadius: 4,
                                    boxShadowColor: 'grey'
                                }}
                                closedComponent={closedComponent}
                                openedComponent={openedComponent}
                            />
                        </div>

                        <IconStats className='icon-14 icon with-width cursor-pointer'></IconStats>
                        <IconRange className='icon-14 icon cursor-pointer'></IconRange>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    )
}

export default OpportunitiesHeader
