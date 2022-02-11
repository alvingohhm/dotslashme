import React from "react";

const Summary = (props) => {
  const { summary } = props;
  const { headline = "", prof_summary = "" } = summary;
  return (
    <div className="mt-3">
      <div className="text-xl underline">{headline}</div>
      <div className="">{prof_summary}</div>
    </div>
  );
};

export default Summary;
