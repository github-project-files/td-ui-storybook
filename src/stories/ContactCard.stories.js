import React from "react";

import ContactCard from "../components/contact-card/ContactCard";

export default {
    title: "Example/ContactCard",
    component: ContactCard,
    argTypes: {
        showNotes: { control: "boolean" }
    },
    decorators: [Story => <Story />]
};

const Template = ({ width, ...args }) => (
    <div style={{ margin: "20px", width }}>
        <ContactCard {...args} />
    </div>
);

export const NormalVersion = Template.bind({});

NormalVersion.args = {
    name: "Johnathan Does",
    designation: "UI/UX Designer",
    mobile: "91-9660923541",
    email: "johnathan.doe@think.design",
    width: "400px"
};

export const NormalExpandedVersion = Template.bind({});

NormalExpandedVersion.args = {
    name: "Johnathan Does",
    designation: "UI/UX Designer",
    mobile: "91-9660923541",
    email: "johnathan.doe@think.design",
    showNotes: true,
    width: "400px"
};

export const WideVersion = Template.bind({});

WideVersion.args = {
    name: "Johnathan Does",
    designation: "UI/UX Designer",
    mobile: "91-9660923541",
    email: "johnathan.doe@think.design",
    width: "700px"
};

export const WideExpandedVersion = Template.bind({});

WideExpandedVersion.args = {
    name: "Johnathan Does",
    designation: "UI/UX Designer",
    mobile: "91-9660923541",
    email: "johnathan.doe@think.design",
    showNotes: true,
    width: "700px"
};
