import React from "react";

import TaskList from "../components/task-list/TaskList";

export default {
    title: "Example/TaskList",
    component: TaskList,
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

const TaskListData = {
    taskId: "#sd1234",
    from: "Abhijeet Rao",
    description: "Task title to be written here in 1 line",
    slaText: "1/3 days left",
    tagData: {
        tagName: "service desk",
        type: "small",
        backgroundColor: "#efebff",
        color: "#000000"
    }

}

const Template = args => <TaskList TaskListData={TaskListData} {...args} />;

export const TaskListCard = Template.bind({});
TaskListCard.args = {
    label: "TaskList",

};




