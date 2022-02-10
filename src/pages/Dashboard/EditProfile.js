import React from "react";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";

const EditProfile = () => {
  const initialState = {
    email: "",
    first_name: "",
    last_name: "",
    profile_img: "",
    bio: "",
    phone: "",
    street_address: "",
    country: "",
    postal: "",
    linkedin_account: "",
  };
  const { err, user, getUser, updateUser } = useContext(UserContext);
  const [profile, setProfile] = useState(initialState);

  useEffect(() => {
    const getData = async () => {
      await getUser();
      setProfile({ ...profile, ...user });
    };
    getData();
  }, []);

  const updateRequest = async () => {
    try {
      const { id, ...updateData } = profile;
      await updateUser(updateData);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (evt) => {
    setProfile({ ...profile, [evt.target.name]: evt.target.value });
  };

  return (
    <div className="w-full mx-auto lg:w-9/12">
      <div class="grid grid-cols-2 rounded-box">
        <div className="bg-base-100 px-4 pt-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              name="first_name"
              type="text"
              placeholder="first name"
              className="input input-bordered"
              required
              onChange={onChangeHandler}
              value={profile.first_name}
            />
          </div>
        </div>

        <div className="compact bg-base-100 px-4 pt-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              name="last_name"
              type="text"
              placeholder="last name"
              className="input input-bordered"
              required
              onChange={onChangeHandler}
              value={profile.last_name}
            />
          </div>
        </div>

        <div className="compact bg-base-100 px-4 pt-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              onChange={onChangeHandler}
              value={profile.email}
            />
          </div>
        </div>

        <div className="compact bg-base-100 px-4 pt-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered"
              required
              onChange={onChangeHandler}
              value={profile.phone}
            />
          </div>
        </div>

        <div className="compact bg-base-100 px-4 pt2 col-span-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Street Address</span>
            </label>
            <input
              name="street_address"
              type="text"
              placeholder="street address"
              className="input input-bordered"
              required
              onChange={onChangeHandler}
              value={profile.street_address}
            />
          </div>
        </div>

        <div className="compact bg-base-100 px-4 pt-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <input
              name="country"
              type="text"
              placeholder="Country"
              className="input input-bordered"
              required
              onChange={onChangeHandler}
              value={profile.country}
            />
          </div>
        </div>

        <div className="compact bg-base-100 px-4 pt-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Postal</span>
            </label>
            <input
              name="postal"
              type="text"
              placeholder="postal"
              className="input input-bordered"
              required
              onChange={onChangeHandler}
              value={profile.postal}
            />
          </div>
        </div>

        <div className="compact bg-base-100 px-4 pt-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Linkedin Account</span>
            </label>
            <input
              name="linkedin_account"
              type="text"
              placeholder="linkedin url"
              className="input input-bordered"
              required
              onChange={onChangeHandler}
              value={profile.linkedin_account}
            />
          </div>
        </div>

        <div className="compact bg-base-100 px-4 pt-2"></div>

        <div className="compact bg-base-100 px-4 pt-2 pb-4 col-span-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your bio</span>
            </label>
            <textarea
              name="bio"
              className="textarea h-24 textarea-bordered"
              placeholder="Bio"
              onChange={onChangeHandler}
              value={profile.bio}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="shadow-lg bg-base-100 px-4 pt-2 pb-10">
        <button className="btn btn-primary" onClick={updateRequest}>
          update
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
