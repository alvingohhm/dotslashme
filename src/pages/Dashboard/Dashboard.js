import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import EditSkill from "./EditSkill";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-[calc(100vh_-_80px)]">
      <div className="rounded-lg h-screen shadow bg-base-200 drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col items-center justify-center drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="mb-4 btn btn-primary drawer-button lg:hidden"
          >
            open menu
          </label>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/skill/edit" element={<EditSkill />} />
          </Routes>

          {/* for other component */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard/profile" className="mb-1">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile/edit">Edit Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/skill/edit">Edit Skill</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
