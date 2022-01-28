import React from "react";

import OpportunitiesHeader from "../components/opportunities-header/OpportunitiesHeader";

export default {
    title: "Example/OpportunitiesHeader",
    component: OpportunitiesHeader,
    argTypes: {
        backgroundColor: { control: "color" }
    },
    decorators: [
        Story => (
            <div style={{ margin: "20px" }}>
                <Story />
            </div>
        )
    ]
};
const opportunityListData = {
    date: "25 Aug 2020",
    by: "Rishabh Kumar",
    planName:"New Term Life Insurance Plan",
    company: "Max Life Insurance pvt ltd",
    policy: "insurance",
    progressBarData: [
        {id: 1, state:"done"},
        {id: 2, state:"done"},
        {id: 3, state:"active"},
        {id: 4, state:"pending"},
        {id: 5, state:"pending"},
        {id: 6, state:"pending"}
      ],
    progressText: "Opportunity Recieved"


}
const Template = args => <OpportunitiesHeader opportunityListData={opportunityListData} {...args} />;

export const OpportunityListCard = Template.bind({});
OpportunityListCard.args = {
    label: "OpportunityList",
    stagnant: false
};

// export const StagnantOpportunityListCard = Template.bind({});
// StagnantOpportunityListCard.args = {
//     label: "OpportunityList",
//     stagnant: true
// };




