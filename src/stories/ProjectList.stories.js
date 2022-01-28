import React from "react";

import ProjectList from "../components/project-list/ProjectList";

export default {
    title: "Example/ProjectList",
    component: ProjectList,
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

const ProjectListData = {
    projectId: "P#123",
    by: "Rishabh Kumar",
    planName:"New Term Life Insurance Plan",
}

const Template = args => <ProjectList ProjectListData={ProjectListData} {...args} />;

export const ProjectListCard = Template.bind({});
ProjectListCard.args = {
    label: "ProjectList",

};




