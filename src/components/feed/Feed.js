import React from 'react'


import Post from '../post/Post'
import Share from '../share/Share'
import {Posts} from '../../dummyData'
import './feed.css'


function Feed() {
  return (
    <div className='feed'>
        <div className="feed-wrapper">
            <Share />
            {Posts.map(post => <Post post={post} key={post.id} /> )}
             
        </div>
        
    </div>
  )
}

export default Feed