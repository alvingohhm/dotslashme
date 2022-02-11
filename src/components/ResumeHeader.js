import React from "react";

const ResumeHeader = (props) => {
  const { user, profile } = props;
  const { first_name = "", last_name = "", email = "" } = user;
  const { phone = "" } = profile;

  return (
    <div className="flex-col">
      <div className="full-name text-3xl font-medium">
        <span className="first-name">{first_name}&nbsp;</span>
        <span className="last-name">{last_name}</span>
      </div>
      <div className="contact-info">
        <span className="email">Email: </span>
        <span className="email-val">{email}</span>
        <span className="separator"></span>
        <span className="phone">Phone: </span>
        <span className="phone-val">{phone}</span>
      </div>
    </div>
  );
};

export default ResumeHeader;
