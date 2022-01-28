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
    line-height: initial !important;
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

const WideTable = ({ WideTableData,...props }) => {
    const data = WideTableData;
    const type = props.tableType
   
    const half = Math.ceil(data.length / 2)

    const firstHalf = data.splice(0, half)
    const secondHalf = data.splice(-half)

    return (
        <StyledWrapper>
            <div className='table-wide'>
                    <table>
                      <tbody>
                        {firstHalf.map((firstHalfTableData, i) => (
                            <tr key={i}>
                                <th>{firstHalfTableData.heading}</th>
                                <td>
                                    {firstHalfTableData.valueType === 'simple text' && (
                                        <div>{firstHalfTableData.value}</div>
                                    )}
                                    {firstHalfTableData.valueType === 'tag' && (
                                        <Tag
                                            label={firstHalfTableData.value}
                                            type='small'
                                            backgroundColor={firstHalfTableData.bColor}
                                            color='#000000'
                                        />
                                    )}
                                    {firstHalfTableData.valueType === 'name' && (
                                        <div className='name'>
                                            {firstHalfTableData.value}
                                        </div>
                                    )}
                                    {firstHalfTableData.valueType === 'status' && (
                                        <div className='status uppercase'>
                                            {firstHalfTableData.value}
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <table>
                      <tbody>
                        {secondHalf.map((tableData, i) => (
                            <tr key={i}>
                                <th>{tableData.heading}</th>
                                <td>
                                    {tableData.valueType === 'simple text' && (
                                        <div>{tableData.value}</div>
                                    )}
                                    {tableData.valueType === 'tag' && (
                                        <Tag
                                            label={tableData.value}
                                            type='small'
                                            backgroundColor={tableData.bColor}
                                            color='#000000'
                                        />
                                    )}
                                    {tableData.valueType === 'name' && (
                                        <div className='name'>
                                            {tableData.value}
                                        </div>
                                    )}
                                    {tableData.valueType === 'status' && (
                                        <div className='status uppercase'>
                                            {tableData.value}
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                      </tbody>
                    </table>
                </div>
        </StyledWrapper>
    )
}

export default WideTable
