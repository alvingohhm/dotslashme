import React from "react";

const SkillBadge = ({ item }) => {
  const { skill_name } = item;
  return <div className="badge badge-ghost">{skill_name}</div>;
};

export default SkillBadge;
