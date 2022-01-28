import React from "react";

import ClientList from "../components/client-list/ClientList";

export default {
    title: "Example/ClientList",
    component: ClientList,
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

const ClientListData = {
   companyName:"Think Design Collaborative",
   contacts:"2 Contacts",
    tagData: {
        tagName: "Design",
        type: "small",
        backgroundColor: "#f8ebff",
        color: "#000000"
    }

}

const Template = args => <ClientList ClientListData={ClientListData} {...args} />;

export const ClientListCard = Template.bind({});
ClientListCard.args = {
    label: "ClientList",

};




