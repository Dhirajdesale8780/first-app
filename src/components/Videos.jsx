import React from 'react'
import './Videos.css'
import Allvideos from './Allvideos'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'
import image7 from '../images/image7.jpg'

function Videos() {
  const VideoStyle = {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "-705px",
    marginLeft: "90px",

  }


  return (
    <div style={VideoStyle}>
      <Allvideos
        image={image2}
        title="Tere Bina  | Lofi Version | Salman Khan Songs | Music"
        channel="Idea Creations"
        views="2.1M"
        uptime="5 months ago"
      />

      <Allvideos
      image={image3}
      title="Ishq Sufiyana  | Irrade | Avitesh ShriVastav Songs | Music"
      channel="YT music Production"
      views="1M"
      uptime="5 days ago"
      />

      <Allvideos 
      image={image4}
      title="Motu Patlu Season-1 (Samosa Gaya Pani Main)  | Comedy Cartoon | Nick Production"
      channel=" Nick Production"
      views="15M"
      uptime="5 year ago"
      />
      <br />

      <Allvideos 
       image={image5}
       title="NCP head Sharad Pawar Live  | Birthday Meeting For Sharad Pawar | NCP"
       channel=" TV9 Marathi"
       views="15k on live"
       uptime="live"
      />

      <Allvideos 
      image={image6}
      title="Devo Ke Dev Mahadev Song  | @akkikalyan | Mahadev songs 2021"
      channel="Dipak Hudda Music"
      views="3k"
      uptime="2 year ago"
      
      />
      <Allvideos 
      image={image7}
      title="Jethalal और Iyer की Auto में हुई लड़ाई | Taarak Mehta Ka Ooltah Chashmah"
      channel="Sony Pal Entertainment"
      views="3.1k"
      uptime="2 day ago"
      />



    </div>
  )
}

export default Videos
