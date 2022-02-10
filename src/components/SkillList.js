import React from "react";

const SkillList = (props) => {
  const { id, skill_name } = props.item;
  const { skilldelete } = props;
  return (
    <div
      id={id}
      className="mx-8 md:mx-12 lg:mx-24 xl:mx-36 pt-2 bg-gray-50 md:bg-white  dark:bg-gray-900 md:dark:bg-gray-800
                     md:p-5 md:shadow-lg md:rounded-lg mb-5 flex justify-between items-center"
    >
      <div className="flex">
        <div>
          <p className="sm:text-sm md:text-lg lg:text-xl font-medium text-gray-900 dark:text-white">
            {skill_name}
          </p>
        </div>
      </div>
      <button
        className="btn btn-primary"
        role="button"
        onClick={(evt) => {
          skilldelete(evt, id);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default SkillList;
