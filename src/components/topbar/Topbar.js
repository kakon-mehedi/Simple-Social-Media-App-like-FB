import React from 'react'
import { useNavigate } from 'react-router-dom'

import './topbar.css'
import {Search,Person,Message,Notifications } from '@mui/icons-material'



function Topbar() {
  const navigate = useNavigate();


  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className='topbarLogo' onClick={()=> navigate('/')}>K-mSocial</span>
        </div>
        <div className="topbarCenter">
          <Search className='searchIcon' />
          <input type="text" className='searchInput' placeholder='Search for friend, post or video' />
        </div>
        <div className="topbarRight">
          <ul className="topbarRightList">
            <li className="topbarRightListItem" onClick={()=> navigate('/')}>Homepage</li>
            <li className="topbarRightListItem" onClick={()=> navigate('/profile')}>Timeline</li>
          </ul>

          <div className="topbarRightIconsList">
            <div className="topbarRightIconItem">
              <Person />
              <span className='topbarRightIconNumber'>1</span>
            </div>
            
            <div className="topbarRightIconItem">
              <Message />
              <span className='topbarRightIconNumber'>2</span>
            </div>
            
            <div className="topbarRightIconItem">
              <Notifications />
              <span className='topbarRightIconNumber'>3</span>
            </div>

            
          </div>

          <img src='/assets/person/1.jpeg' alt="profileImage" className="profilePicture" onClick={()=> navigate('/profile')} />
        </div>
    </div>
  )
}

export default Topbar