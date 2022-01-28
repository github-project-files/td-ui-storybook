import React from "react";

import { Bubble } from "../components/bubble/Bubble";

export default {
    title: "Example/Bubble",
    component: Bubble
};

const Template = args => <Bubble {...args} />;

export const Comment = Template.bind({});
Comment.args = {
    bubbleType: "comment",
    message:"Comments written previously will be shown like this. In case it is too long, the content will be overflown into the second line. Every previously written note will be editable on double click.",
    date:"12 Dec 2020 at 5:00 pm"
};

export const Notes = Template.bind({});
Notes.args = {
    bubbleType: "notes",
    message:"Comments written previously will be shown like this. In case it is too long, the content will be overflown into the second line. Every previously written note will be editable on double click.",
    date:"12 Dec 2020 at 5:00 pm"
};

export const Chat = Template.bind({});
Chat.args = {
    bubbleType: "chat",
    message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat.",
    time:"5:00 pm",
    name:"Sumit Kadam",
    width: 308
};

export const UserChat = Template.bind({});
UserChat.args = {
    bubbleType: "userchat",
    message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
    time:"5:00 pm",
    width:308
};

