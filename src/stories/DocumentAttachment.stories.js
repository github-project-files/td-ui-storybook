import React from "react";

import DocumentAttachment from "../components/document-attachment/DocumentAttachment";

export default {
    title: "Example/DocumentAttachment",
    component: DocumentAttachment,
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

const DocumentAttachmentData = {
   pdfName:"Quality assessment.pdf",
   size:"472 kb",
   date:"14 Jan 2021",
   prevInformation:"12sdfqasmnt.pdf",
 

}

const Template = args => <DocumentAttachment DocumentAttachmentData={DocumentAttachmentData} {...args} />;

export const DocumentAttachmentCard = Template.bind({});
DocumentAttachmentCard.args = {
    label: "DocumentAttachment",

};




