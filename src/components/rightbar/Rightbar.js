import React from 'react'
import OnlineFriends from '../onlineFriends/OnlineFriends'

import { Users } from '../../dummyData'
import './rightbar.css'

function Rightbar({profile}) {
  const HomeRightbar = () => {
    return(
            <div v className="rightbar-wrapper">
            <div className="birthday-section">
                <img src="assets/gift.png" alt="" className="gift-img" />
                <span className="birthday-text"> <span className='bold-text'>Kakon Mehedi</span> and <span className='bold-text'>3 other friends</span> have a birthday today</span>
            </div>

            <img src="assets/ad.png" alt="" className="rightbar-img" />
            <span className="online-friends-text">Online Friends</span>
            
            {Users.map(user => 
                <OnlineFriends user = {user} key={user.id} />
            )}
            
        </div>
    )
  }

  const ProfileRightbar = () =>{
    return(
      <div className="profile-bottom-right">
      <div className="user-information">
        <span className="user-information-text">User Information</span>
        <span className="user-info-text">
          <strong> City: </strong> New York
        </span>
        <span className="user-info-text">
          <strong> From: </strong> Madrid
        </span>
        <span className="user-info-text">
          <strong> Relationship: </strong> Married
        </span>
      </div>

      
        <h4 className='user-friends-text'>User Friends</h4>
        <div className="user-friend-img">
          {Users.map(user => {
            return (
              <>
              <div className="user-friend-box" key={user.id}>
                <img src={user.profilePicture} alt="" className="friend-images" />
                <span className="friend-name">{user.username}</span> 
              </div>
              
              
              </>
            )
          } )}
      
       
      </div>
    </div>
    )
  } 


  return (
    <div className='rightbar'>
       {profile? <ProfileRightbar /> : <HomeRightbar /> }
    </div>
  )
}

export default Rightbar