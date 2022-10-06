import React from 'react'

import './closeFriends.css'

function CloseFriends({user}) {
    
  return (
    <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={user.profilePicture} alt="closeFriendImage" className="sidebarFriendImage" />
                    <span className="sidebarFriendName">{user.username}</span>
                </li>
            </ul>
  )
}

export default CloseFriends