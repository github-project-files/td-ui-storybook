import React from "react";

import TimelineAccordion from "../components/timeline-accordion/TimelineAccordion";

import TimeLine  from "../components/timeline/Timeline";

export default {
  title: 'Example/TimeLine',
  component: TimeLine
};

const STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in-progress",
  COMPLETED: "completed"
};

const rightSideTimeLine = [
  {
    id: 1,
    status: STATUS.COMPLETED,
    components: {
      B: (
        <TimelineAccordion title={<span>Lead Received</span>} status="completed" date={'24 Dec 2020'} showDate={true} showButton={true}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</TimelineAccordion>
        
      )
    }
  },
  {
    id: 2,
    status: STATUS.IN_PROGRESS,
    components: {
      B: (
        <TimelineAccordion title='Lead Validated' status="in-progress">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</TimelineAccordion>
        
      )
    }
  },
  {
    id: 3,
    status: STATUS.PENDING,
    components: {
      B: (
        <TimelineAccordion title='Opportunity Recieved' bodyMaxHeight='100vh' status="pending">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </TimelineAccordion>
       
      )
    }
  },
  {
    id: 4,
    status: STATUS.PENDING,
    components: {
      B: (
        <TimelineAccordion title='Opportunity Validated' bodyMaxHeight='100vh' status="pending">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </TimelineAccordion>
        
      )
    }
  },
  {
    id: 5,
    status: STATUS.PENDING,
    components: {
      B: (
        <TimelineAccordion title='Opportunity Validated' bodyMaxHeight='100vh' status="pending">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </TimelineAccordion>
        
      )
    }
  }
  ,
  {
    id: 6,
    status: STATUS.PENDING,
    components: {
      B: (
        <TimelineAccordion title='Opportunity Validated' bodyMaxHeight='100vh' status="pending">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </TimelineAccordion>
        
      )
    }
  }
];



const timeLineData = [
  {
    id: 1,
    status: STATUS.COMPLETED,
    components: {
      A: <div style={{}}>Hello</div>,
      B: <div style={{}}>World</div>
    }
  },
  {
    id: 2,
    status: STATUS.COMPLETED,
    components: {
      A: <div style={{}}>Hello</div>,
      B: <div style={{}}>World</div>
    }
  },
  {
    id: 3,
    status: STATUS.IN_PROGRESS,
    components: {
      A: <div>Hello</div>,
      B: <div>World</div>
    }
  },
  {
    id: 4,
    status: STATUS.PENDING,
    components: {
      A: <div>Hello</div>,
      B: <div>World</div>
    }
  },
  {
    id: 5,
    status: STATUS.PENDING,
    components: {
      A: <div>Hello</div>,
      B: <div>World</div>
    }
  }
];



export const Default = () => (
  <TimeLine timeLine={timeLineData} marginLeft="6px" marginRight="6px" />
);

export const RightTimeLine = () => <TimeLine timeLine={rightSideTimeLine} />;


