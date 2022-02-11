import { useContext, useEffect, useState } from "react";
import Experience from "../../components/Experience";
import ResumeHeader from "../../components/ResumeHeader";
import Summary from "../../components/Summary";
import UserContext from "../../context/UserContext";

const Resume = () => {
  const { getResume, defaultResume } = useContext(UserContext);
  useEffect(() => {
    const getData = async () => {
      await getResume();
    };
    getData();
  }, []);

  // console.log(defaultResume);

  return (
    <div className="text-black p-20 container mx-auto max-w-screen-xl bg-slate-50 h-full overflow-y-scroll">
      <ResumeHeader user={defaultResume.user} profile={defaultResume.profile} />
      <Summary summary={defaultResume.summary} />
      <div className="mt-6 text-2xl font-semibold text-blue-600">
        Work Experience
      </div>
      {/* <Experience experiences={defaultResume.experiences} /> */}
    </div>
  );
};

export default Resume;
