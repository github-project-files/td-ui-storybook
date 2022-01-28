import React from 'react'

import Table from '../components/table/Table'

export default {
    title: 'Example/Table',
    component: Table
}

const RandNBcolumns = [
    {
        title: 'Month',
        dataIndex: 'a',
        key: 'a',
        width: 100,
        fixed: 'left',
        render (o, row, index) {
            const obj = {
                children: o,
                props: {}
            }
            if (index % 3 === 0) {
                obj.props.rowSpan = 3
            } else {
                obj.props.rowSpan = 0
            }
            return obj
        }
    },
    {
        title: 'Resource Group',
        dataIndex: 'b',
        key: 'b',
        width: 150,
        fixed: 'left'
    },
    {
        title: 'Consolidated Nm',
        children: [
            {
                title: 'Amount',
                key: 'c',
                dataIndex: 'd',
                width: 100,
                fixed: 'left',
                align: 'right'
            },
            {
                title: 'Percentage',
                key: 'c',
                dataIndex: 'e',
                width: 100,
                fixed: 'left',
                align: 'right'
            }
        ]
    },
    {
        title: 'Resources Count',
        children: [
            { title: 'Allocated', key: 'f', dataIndex: 'g', align: 'right' },
            { title: 'Billable', key: 'f', dataIndex: 'h', align: 'right' },
            { title: 'Buffer', key: 'f', dataIndex: 'i', align: 'right' },
            { title: 'Total', key: 'f', dataIndex: 'j', align: 'right' }
        ]
    },
    { title: 'Leave Count', key: 'k', dataIndex: 'k', align: 'right' },
    {
        title: 'Resources Cost',
        children: [
            { title: 'Variable', key: 'l', dataIndex: 'm', align: 'right' },
            { title: 'Loading', key: 'l', dataIndex: 'n', align: 'right' },
            { title: 'Salary', key: 'l', dataIndex: 'o', align: 'right' },
            {
                title: 'Total Resource Cost',
                key: 'l',
                dataIndex: 'p',
                align: 'right'
            }
        ]
    },
    {
        title: 'billing',
        children: [
            {
                title: 'Anticipated Billing',
                key: 'q',
                dataIndex: 'r',
                align: 'right'
            },
            { title: 'Revenue Loss', key: 'q', dataIndex: 's', align: 'right' },
            {
                title: 'Revenue Leakage',
                key: 'q',
                dataIndex: 't',
                align: 'right'
            },
            { title: 'Total Billing', key: 'q', dataIndex: 'u', align: 'right' }
        ]
    },
    {
        title: 'Net Margin',
        children: [
            { title: 'Amount', key: 'v', dataIndex: 'w', align: 'right' },
            { title: 'Margin', key: 'v', dataIndex: 'x', align: 'right' }
        ]
    }
]

const RandNBdata = [
    {
        a: 'Jan 2021',
        b: 'Mobile App Developers',
        d: '₹ 10',
        e: '0.00 %',
        g: '10',
        h: '1',
        i: '5',
        j: '6',
        k: '10',
        m: '₹ 10',
        n: '₹ 11',
        o: '₹ 12',
        p: '₹ 13',
        r: '₹ 14',
        s: '₹ 15',
        t: '₹ 16',
        u: '₹ 17',
        w: '₹ 18',
        x: '₹ 19',
        key: '1'
    },
    {
        a: 'Jan 2021',
        b: 'Testers',
        d: '₹ 10',
        e: '0.00 %',
        g: '10',
        h: '1',
        i: '5',
        j: '6',
        k: '10',
        m: '₹ 10',
        n: '₹ 11',
        o: '₹ 12',
        p: '₹ 13',
        r: '₹ 14',
        s: '₹ 15',
        t: '₹ 16',
        u: '₹ 17',
        w: '₹ 18',
        x: '₹ 19',
        key: '2'
    },
    {
        a: 'Jan 2021',
        b: 'Monthly Total',
        d: '₹ 10',
        e: '0.00 %',
        g: '10',
        h: '1',
        i: '5',
        j: '6',
        k: '10',
        m: '₹ 10',
        n: '₹ 11',
        o: '₹ 12',
        p: '₹ 13',
        r: '₹ 14',
        s: '₹ 15',
        t: '₹ 16',
        u: '₹ 17',
        w: '₹ 18',
        x: '₹ 19',
        key: '3'
    },
    {
        a: 'Jan 2021',
        b: 'Mobile App Developers',
        d: '₹ 10',
        e: '0.00 %',
        g: '10',
        h: '1',
        i: '5',
        j: '6',
        k: '10',
        m: '₹ 10',
        n: '₹ 11',
        o: '₹ 12',
        p: '₹ 13',
        r: '₹ 14',
        s: '₹ 15',
        t: '₹ 16',
        u: '₹ 17',
        w: '₹ 18',
        x: '₹ 19',
        key: '4'
    },
    {
        a: 'Jan 2021',
        b: 'Testers',
        d: '₹ 10',
        e: '0.00 %',
        g: '10',
        h: '1',
        i: '5',
        j: '6',
        k: '10',
        m: '₹ 10',
        n: '₹ 11',
        o: '₹ 12',
        p: '₹ 13',
        r: '₹ 14',
        s: '₹ 15',
        t: '₹ 16',
        u: '₹ 17',
        w: '₹ 18',
        x: '₹ 19',
        key: '5'
    },
    {
        a: 'Jan 2021',
        b: 'Monthly Total',
        d: '₹ 10',
        e: '0.00 %',
        g: '10',
        h: '1',
        i: '5',
        j: '6',
        k: '10',
        m: '₹ 10',
        n: '₹ 11',
        o: '₹ 12',
        p: '₹ 13',
        r: '₹ 14',
        s: '₹ 15',
        t: '₹ 16',
        u: '₹ 17',
        w: '₹ 18',
        x: '₹ 19',
        key: '6'
    },
    {
        a: 'Jan 2021',
        b: 'Mobile App Developers',
        d: '₹ 10',
        e: '0.00 %',
        g: '10',
        h: '1',
        i: '5',
        j: '6',
        k: '10',
        m: '₹ 10',
        n: '₹ 11',
        o: '₹ 12',
        p: '₹ 13',
        r: '₹ 14',
        s: '₹ 15',
        t: '₹ 16',
        u: '₹ 17',
        w: '₹ 18',
        x: '₹ 19',
        key: '7'
    },
    {
        a: 'Jan 2021',
        b: 'Testers',
        d: '₹ 10',
        e: '0.00 %',
        g: '10',
        h: '1',
        i: '5',
        j: '6',
        k: '10',
        m: '₹ 10',
        n: '₹ 11',
        o: '₹ 12',
        p: '₹ 13',
        r: '₹ 14',
        s: '₹ 15',
        t: '₹ 16',
        u: '₹ 17',
        w: '₹ 18',
        x: '₹ 19',
        key: '8'
    },
    {
        a: 'Jan 2021',
        b: 'Monthly Total',
        d: '₹ 10',
        e: '0.00 %',
        g: '10',
        h: '1',
        i: '5',
        j: '6',
        k: '10',
        m: '₹ 10',
        n: '₹ 11',
        o: '₹ 12',
        p: '₹ 13',
        r: '₹ 14',
        s: '₹ 15',
        t: '₹ 16',
        u: '₹ 17',
        w: '₹ 18',
        x: '₹ 19',
        key: '9'
    }
]
const RandBcolumns = [
    {
        title: 'Billing Parameters',
        children: [
            {
                title: '#',
                key: 'a',
                dataIndex: 'b',
                width: 50,
                fixed: 'left',
                align: 'center',
                render (o, row, index) {
                    const obj = {
                        children: o,
                        props: {}
                    }

                    if (o === 'Total Billing') {
                        obj.props.colSpan = 3
                    }
                    return obj
                }
            },
            {
                title: 'Role',
                key: 'a',
                dataIndex: 'c',
                width: 100,
                fixed: 'left',
                align: 'left',
                render (o, row, index) {
                    const obj = {
                        children: o,
                        props: {}
                    }

                    if (o === 'no content') {
                        obj.props.colSpan = 0
                    }
                    return obj
                }
            },
            {
                title: 'Billing Rate/Month',
                key: 'a',
                dataIndex: 'd',
                width: 150,
                fixed: 'left',
                align: 'right',
                render (o, row, index) {
                    const obj = {
                        children: o,
                        props: {}
                    }

                    if (o === 'no content') {
                        obj.props.colSpan = 0
                    }
                    return obj
                }
            }
        ]
    },
    {
        title: 'Resource Allocation[10 Jan 2021 - 22 Jul 2021]',
        children: [
            {
                title: '10-31 Jan 2021',
                key: 'e',
                dataIndex: 'f',
                align: 'right'
            },
            {
                title: 'Feb 2021',
                key: 'e',
                dataIndex: 'g',
                align: 'right'
            },
            {
                title: 'Mar 2021',
                key: 'e',
                dataIndex: 'h',
                align: 'right'
            },
            {
                title: 'Apr 2021',
                key: 'e',
                dataIndex: 'i',
                align: 'right'
            },
            {
                title: 'May 2021',
                key: 'e',
                dataIndex: 'j',
                align: 'right'
            },
            {
                title: 'Jun 2021',
                key: 'e',
                dataIndex: 'k',
                align: 'right'
            },
            {
                title: '1-22 Jul 2021',
                key: 'e',
                dataIndex: 'l',
                align: 'right'
            }
        ]
    }
]

const RandBdata = [
    {
        b: 1,
        c: 'Developer',
        d: '₹ 10,000',
        f: '10',
        g: '10',
        h: '1',
        i: '5',
        j: '6',
        k: '10',
        l: '20',
        key: '1'
    },
    {
        b: 2,
        c: 'Tester',
        d: '₹ 10,000',
        f: '10',
        g: '10',
        h: '1',
        i: '5',
        j: '6',
        k: '10',
        l: '20',
        key: '2'
    },
    {
        b: 3,
        c: 'Designer',
        d: '₹ 10,000',
        f: '10',
        g: '10',
        h: '1',
        i: '5',
        j: '6',
        k: '10',
        l: '20',
        key: '3'
    },
    {
        b: 4,
        c: 'Developer',
        d: '₹ 10,000',
        f: '10',
        g: '10',
        h: '1',
        i: '5',
        j: '6',
        k: '10',
        l: '20',
        key: '4'
    },
    {
        b: 5,
        c: 'Tester',
        d: '₹ 10,000',
        f: '10',
        g: '10',
        h: '1',
        i: '5',
        j: '6',
        k: '10',
        l: '20',
        key: '5'
    },
    {
        b: 6,
        c: 'Designer',
        d: '₹ 10,000',
        f: '10',
        g: '10',
        h: '1',
        i: '5',
        j: '6',
        k: '10',
        l: '20',
        key: '6'
    },
    {
        b: 'Total Billing',
        c: 'no content',
        d: 'no content',
        f: '₹ 12,40,000',
        g: '₹ 12,40,000',
        h: '₹ 12,40,000',
        i: '₹ 12,40,000',
        j: '₹ 12,40,000',
        k: '₹ 12,40,000',
        l: '₹ 12,40,000',
        key: '7'
    }
]

export const RandNB = () => (
    <Table columns={RandNBcolumns} data={RandNBdata} width={2400}></Table>
)

export const RandB = () => (
    <Table
        customClass={'table-with-footer'}
        columns={RandBcolumns}
        data={RandBdata}
        width={1200}
    ></Table>
)
