import { MoreVert } from "@mui/icons-material";
import React, { useState } from "react";

import "./post.css";
import {Users} from '../../dummyData'

function Post({post}) {

    const [like, setlike] = useState(post.like)
    const [isClicked, setIsClicked] = useState(false)

    const user = Users.filter(user => user.id === post.userId)
    const userName = user[0].username
    const profilePicture = user[0].profilePicture

    const handleLikeBtnClicks = () => {
        if(isClicked) {
            setlike(prev => prev - 1)
            setIsClicked(!isClicked) 
        }

        else{
            setlike(prev => prev + 1)
            setIsClicked(!isClicked)
        }
    }

  return (
    <div className="post">
      <div className="post-top">
        <div className="post-top-left">
          <img src={profilePicture} alt="" className="user-profile-picture" />
          <span className="user-name">{userName}</span>
          <span className="post-time">{post.date}</span>
        </div>

        <MoreVert />
      </div>

      <p className="post-caption">{post.desc}</p>

      <img src={post.photo} alt="" className="post-img" />

      <div className="post-bottom">
        <div className="post-bottom-left">
           <img src="assets/like.png" alt="" className= {isClicked ? 'post-like-btn post-like-btn-clicked': 'post-like-btn'} onClick={handleLikeBtnClicks}  />
           <img src="assets/heart.png" alt="" className="post-like-btn" onClick={handleLikeBtnClicks} />
           <span className="total-likes">{like} people like it</span>
        </div>

        <span className="total-comments">{post.comment} comments</span>
      </div>
    </div>
  );
}

export default Post;
