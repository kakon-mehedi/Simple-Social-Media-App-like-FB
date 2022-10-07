import React from "react";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile-container">
        <Sidebar />

        <div className="profile-right">
          <div className="profile-right-top">
            <div className="cover-photo-section">
              <img
                src="assets/post/3.jpeg"
                alt="CoverPhoto"
                className="cover-photo"
              />

              <img
                src="assets/person/8.jpeg"
                alt="profilePicture"
                className="profile-picture"
              />
            </div>

            <div className="profile-info">
              <h4 className="profile-info-name">Kakon Mehedi</h4>
              <p className="profile-info-text">Hello Friends </p>
            </div>
          </div>

          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
