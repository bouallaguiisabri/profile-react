import React from 'react'
import MyImage from "./MyImage.jpg"
const ProfilePhoto = () => {
  return (
    <div> 
      <img className ="image" src={MyImage} alt="Image" />;
    </div>
  )
}

export default ProfilePhoto