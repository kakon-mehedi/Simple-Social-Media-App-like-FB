import React from "react";
import './userFriend.css'

function UserFriend({user}) {
  return (
    <div className="user-friend-box">
      <img src={user.profilePicture} alt="" className="friend-images" />
      <span className="friend-name">{user.username}</span>
    </div>
  );
}

export default UserFriend;
