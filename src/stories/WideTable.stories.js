import React from 'react'

import WideTable from '../components/wide-table/WideTable'

export default {
    title: 'Example/WideTable',
    component: WideTable
}
const WideTableData = [
    {
        id: 1,
        heading: 'Client',
        value: 'Think Design Collaborative',
        valueType: 'simple text'
    },
    {
        id: 2,
        heading: 'Domain',
        value: 'DESIG',
        valueType: 'tag',
        bColor: '#efebff'
    },
    {
        id: 3,
        heading: 'Business Unit',
        value: 'UI/UX',
        valueType: 'tag',
        bColor: '#ebf7ff'
    },
    {
        id: 4,
        heading: 'Location',
        value: 'Bangalore',
        valueType: 'simple text'
    },
    {
        id: 5,
        heading: 'Project Duration',
        value: '1 Jan 2021 - 31 Jul 2021',
        valueType: 'simple text'
    },
    {
        id: 6,
        heading: 'Sales Executive',
        value: 'Neil Sharma',
        valueType: 'name'
    },
    {
        id: 7,
        heading: 'Delivery Lead',
        value: 'Nithin Sharma',
        valueType: 'name'
    },
    {
        id: 8,
        heading: 'Project Owner',
        value: 'Mukesh Sharma',
        valueType: 'name'
    },
    {
        id: 9,
        heading: 'Billing Status',
        value: 'Started',
        valueType: 'status'
    },
    {
        id: 10,
        heading: 'Project Status',
        value: 'Ongoing',
        valueType: 'status'
    }
]

export const wideTable = () => (
    <WideTable tableType='wide' WideTableData={WideTableData} />
)
