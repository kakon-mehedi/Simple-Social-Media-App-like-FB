import React from "react";

import './onlineFriend.css'

function onlineFriends({user}) {
  return (
    
      <div className="online-friends">
        <div className="friend-img-box">
          <img
            src={user.profilePicture}
            alt="friendImage"
            className="friend-img"
          />
          <span className="online-status-symbol"></span>
        </div>
        <span className="online-friend-name">{user.username}</span>
      </div>

  );
}

export default onlineFriends;
