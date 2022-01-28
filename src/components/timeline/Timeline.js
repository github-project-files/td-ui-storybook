import React from "react";
import * as PropTypes from "prop-types";

import TimeLineItem from "./Timelineitem";

const STATUS = {
    PENDING: "pending",
    IN_PROGRESS: "in-progress",
    COMPLETED: "completed"
};

const TimeLine = props => {
    const { timeLine, marginLeft, marginRight } = props;

    return (
        <>
            {timeLine.map((timeLineItem, index) => (
                <React.Fragment key={timeLineItem.id}>
                    <TimeLineItem
                        {...timeLineItem}
                        index={index + 1}
                        totalCount={timeLine && timeLine.length}
                        marginLeft={marginLeft}
                        marginRight={marginRight}
                    />
                </React.Fragment>
            ))}
        </>
    );
};

TimeLine.propTypes = {
    timeLine: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ),
    marginLeft: PropTypes.string,
    marginRight: PropTypes.string
};
TimeLine.defaultProps = {
    timeLine: [],
    marginLeft: "20px",
    marginRight: "20px"
};

TimeLine.STATUS_LIST = STATUS;

export default TimeLine;
