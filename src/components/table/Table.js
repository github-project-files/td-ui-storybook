import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import TableComp from 'rc-table'
import 'rc-table/assets/index.css'

const StyledWrapper = Styled.div`
.rc-table-ping-left .rc-table-cell-fix-left-last::after {
  box-shadow: inset 10px 0 8px -8px ${({ theme }) => theme.colors.grayscale_4};
}
.rc-table-content{
  border-color: ${({ theme }) => theme.colors.grayscale_4};
  thead{
    background-color: ${({ theme }) => theme.colors.grayscale_1};
    th {
      border-color: ${({ theme }) => theme.colors.grayscale_4};
      color: ${({ theme }) => theme.colors.grayscale_6};
      padding: 12px 8px;
    }
  }
  tbody{
    td {
      border-color: ${({ theme }) => theme.colors.grayscale_4};
      color: ${({ theme }) => theme.colors.primary_main};
      padding: 12px 8px;
    }
  }

  
}
&.table-with-footer{
  tr{
    td:nth-child(1){
      background-color: ${({ theme }) => theme.colors.grayscale_1};
      color: ${({ theme }) => theme.colors.grayscale_6};
    }
  }
  tr:first-child{
    th{
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
  
}
`

const Table = props => {
    return (
        <StyledWrapper className={props.customClass}>
            <TableComp
                columns={props.columns}
                data={props.data}
                scroll={{ x: props.width }}
            />
        </StyledWrapper>
    )
}

export default Table
