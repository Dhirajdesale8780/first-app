import React from 'react'
import '../../Style/youtube/NavCenter.css'

function NavCenter() {
  return (
    <div className='Searchbar'>
      <input type="search" placeholder='search' style={{color:"white"}} />
      <div className='Search-icon'>
      <i class="fa-solid fa-magnifying-glass" style={{marginLeft: "-23px",color:"white",marginTop:"6px"}}></i>
      </div>

      <div className="mic-icon">
      <i class="fa-solid fa-microphone fa-beat-fade"></i>
      </div>
    </div>
  )
}

export default NavCenter
