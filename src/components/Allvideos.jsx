import React from 'react'
import './Allvideos.css'

const Allvideos = (props) => {
  return (
    <>
      <div className='video-container'>
        <div className="thumbnail">
          <img src={props.image} alt="" style={{ height: "100%", width: "100%" }} />
        </div>
        <div className="video-info">
          <div className="channel-image">

          </div>
          <div className="channel-info">
            <h3 className="video-title">
              {props.title}
            </h3>
            <p className='channel-name'>{props.channel}</p>
            <p className='view-count'> <span className="views">{props.views} views  |   </span> 
            <span className="upload-time">{  props.uptime}</span></p>
          </div>
        </div>
      </div>
    </>


  )
}

export default Allvideos
