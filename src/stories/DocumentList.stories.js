import React from "react";

import DocumentList from "../components/document-list/DocumentList";

export default {
    title: "Example/DocumentList",
    component: DocumentList,
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

const DocumentListData = {
   pdfName:"Quality assessment.pdf",
   size:"472 kb",
   date:"14 Jan 2021",
   prevInformation:"12sdfqasmnt.pdf",
 

}

const Template = args => <DocumentList DocumentListData={DocumentListData} {...args} />;

export const DocumentListCard = Template.bind({});
DocumentListCard.args = {
    label: "DocumentList",

};




