import React from 'react'

import OpportunityList from '../components/opportunity-list/OpportunityList'

export default {
    title: 'Example/OpportunityList',
    component: OpportunityList,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        Story => (
            <div style={{ margin: '20px' }}>
                <Story />
            </div>
        )
    ]
}
const opportunityListData = {
    date: '25 Aug 2020',
    by: 'Rishabh Kumar',
    planName: 'New Term Life Insurance Plan',
    company: 'Max Life Insurance pvt ltd',
    policy: 'insurance',
    progressBarData: [
        { id: 1, state: 'done', tooltipValue: 'sample 1' },
        { id: 2, state: 'done', tooltipValue: 'sample 2' },
        { id: 3, state: 'active', tooltipValue: 'sample 3' },
        { id: 4, state: 'pending', tooltipValue: 'sample 4' },
        { id: 5, state: 'pending', tooltipValue: 'sample 5' },
        { id: 6, state: 'pending', tooltipValue: 'sample 6' }
    ],
    progressText: 'Opportunity Recieved'
}
const Template = args => (
    <OpportunityList opportunityListData={opportunityListData} {...args} />
)

export const OpportunityListCard = Template.bind({})
OpportunityListCard.args = {
    label: 'OpportunityList',
    stagnant: false,
    starFilled: true
}

export const StagnantOpportunityListCard = Template.bind({})
StagnantOpportunityListCard.args = {
    label: 'OpportunityList',
    stagnant: true,
    starFilled: false
}
