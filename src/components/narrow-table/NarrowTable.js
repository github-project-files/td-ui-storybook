import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { Tag } from '../../components/tag/Tag'
const StyledWrapper = Styled.div`
   table{
    border: 1px solid ${({ theme }) => theme.colors.grayscale_4};
    border-collapse: collapse;
    border-radius: 8px;
    // border-style: hidden; /* hide standard table (collapsed) border */

   }
  th, td {
    padding: 12px;
    text-align: left;    
  }
  th{
    color: ${({ theme }) => theme.colors.grayscale_6};
    background: ${({ theme }) => theme.colors.grayscale_1};
    border: 1px solid ${({ theme }) => theme.colors.grayscale_4};
  }
  td{
    border: 1px solid ${({ theme }) => theme.colors.grayscale_2};
    .name{
      color: ${({ theme }) => theme.colors.secondary_main};
    }
  }
  .table-wide{
    display:flex;
  }
`

const NarrowTable = ({ NarrowTableData, ...props }) => {
    const data = NarrowTableData

    return (
        <StyledWrapper>
            <table>
                <tbody>
                    {data.map((narrowTableData, i) => (
                        <tr key={i}>
                            <th>{narrowTableData.heading}</th>
                            <td>
                                {narrowTableData.valueType ===
                                    'simple text' && (
                                    <div>{narrowTableData.value}</div>
                                )}
                                {narrowTableData.valueType === 'tag' && (
                                    <Tag
                                        label={narrowTableData.value}
                                        type='small'
                                        backgroundColor={narrowTableData.bColor}
                                        color='#000000'
                                    />
                                )}
                                {narrowTableData.valueType === 'name' && (
                                    <div className='name'>
                                        {narrowTableData.value}
                                    </div>
                                )}
                                {narrowTableData.valueType === 'status' && (
                                    <div className='status uppercase'>
                                        {narrowTableData.value}
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </StyledWrapper>
    )
}

export default NarrowTable
