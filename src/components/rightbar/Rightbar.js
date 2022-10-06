import React from 'react'
import OnlineFriends from '../onlineFriends/OnlineFriends'

import { Users } from '../../dummyData'
import './rightbar.css'

function Rightbar() {
  return (
    <div className='rightbar'>
        <div className="rightbar-wrapper">
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
    </div>
  )
}

export default Rightbar