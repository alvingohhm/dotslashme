import { FaRegUser } from "react-icons/fa";
import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import SkillBadge from "../../components/SkillBadge";

const Profile = () => {
  const { err, user, getUser, skills, getSkills } = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      await getUser();
      await getSkills();
    };
    getData();
  }, []);

  const skillBadgeList = skills.map((item, index) => {
    return <SkillBadge item={item} key={index} />;
  });

  const img = user.profile_img
    ? user.profile_img + "?s=400&d=identicon"
    : "https://picsum.photos/400/400";

  return (
    <div className="w-full mx-auto lg:w-11/12 ">
      <div className="grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3 lg:bg-base-200 rounded-box">
        {/* Email Input */}
        {err !== "" ? (
          <span className=" text-md font-medium text-pink-600">{err}</span>
        ) : null}
        <div className="card row-span-3 shadow-lg compact bg-base-100 p-4">
          <figure>
            <img src={img} className="mask mask-hexagon-2" />
          </figure>
          <div className="flex-row items-center space-x-4 card-body">
            <div>
              <h2 className="card-title">
                {user.first_name
                  ? user.first_name + " " + user.last_name
                  : "NA"}
              </h2>
            </div>
          </div>
        </div>
        <div className="card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100">
          <div className="card-body">
            <div className="flex">
              <FaRegUser className="my-5 text-2xl md:text-4xl" />
              <h2 className="my-4 text-4xl font-bold card-title">Biography</h2>
            </div>
            <p>{user.bio ? user.bio : "NA"}</p>
            <div className="mt-4 mb-4 space-x-2 card-actions">
              {skillBadgeList}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
