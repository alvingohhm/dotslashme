import React from "react";

const Experience = (props) => {
  console.log(props);
  const { experiences } = props;
  const { title = "" } = experiences;
  return (
    <div>
      <div className="flex justify-between">
        <div id="title">{title}</div>
        <div>
          <div>Start Date: </div>
          <div>End Date Date</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
