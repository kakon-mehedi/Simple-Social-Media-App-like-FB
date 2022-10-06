import React from 'react'
import {PhotoLibrary, Label, LocationOn, EmojiEmotions  } from '@mui/icons-material'

import './share.css'

function Share() {
  return (
    <div className="share">
        <div className="share-top">
            <img src="/assets/person/1.jpeg" alt="" className="share-profile-picture" />
            <input type="text" className="share-caption" placeholder="What's in your mind Kakon?"  />
        </div>

        <hr className="share-hr" />

        <div className="share-bottom">
            <div className="share-icon-list">
                <div className="share-icon-item">
                    <PhotoLibrary htmlColor='tomato' className='share-icon' />
                    <span className="share-icon-text">Photo or Video</span>
                </div>

                <div className="share-icon-item">
                    <Label className='share-icon' htmlColor='blue' />
                    <span className="share-icon-text">Tag</span>
                </div>

                <div className="share-icon-item">
                    <LocationOn htmlColor='green' className='share-icon' />
                    <span className="share-icon-text">Location</span>
                </div>

                <div className="share-icon-item">
                    <EmojiEmotions htmlColor='tomato' className='share-icon' />
                    <span className="share-icon-text">Feelings</span>
                </div>

            </div>

            <button className="share-button"> Share</button>
        </div>
    </div>
  )
}

export default Share