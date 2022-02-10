import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import SkillList from "../../components/SkillList";

const EditSkill = () => {
  const initialState = {
    skill_name: "",
  };
  const { skills, getSkills, deleteSkill, addSkill } = useContext(UserContext);
  const [skill, setSkill] = useState(initialState);

  useEffect(() => {
    const getData = async () => {
      await getSkills();
    };
    getData();
  }, []);

  const skilldelete = async (evt, id) => {
    evt.stopPropagation();
    await deleteSkill(id);
  };

  const skillAdd = async () => {
    if (skill.length === 0) {
      return;
    }
    await addSkill(skill);
    setSkill(initialState);
  };

  const onChangeHandler = (evt) => {
    setSkill({ ...skill, [evt.target.name]: evt.target.value });
  };

  const SkillLists = skills.map((item) => {
    return <SkillList item={item} key={item.id} skilldelete={skilldelete} />;
  });

  return (
    <div className="w-full h-full mx-auto lg:w-11/12">
      <div className="form-control w-60">
        <div className="relative mt-5">
          <input
            name="skill_name"
            type="text"
            placeholder="Add Skill"
            className="w-full pr-16 input input-primary input-bordered"
            value={skill.skill_name}
            onChange={onChangeHandler}
          />
          <button
            className="absolute top-0 right-0 rounded-l-none btn btn-primary"
            onClick={skillAdd}
          >
            Add
          </button>
        </div>
      </div>
      <div class="divider"></div>
      {SkillLists}
    </div>
  );
};

export default EditSkill;
