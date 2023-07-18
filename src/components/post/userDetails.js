import React from 'react'
import ThreeDotIcon from "../../assets/dots-icon.svg"

const UserDetail = ({ profileImg, userName, lastActive, activityIcon, weight, size, isShowForComment, className }) => {
  return (
    <div className={`com_flex com_items_center com_justify_between com_px_16 ${className}`}>
      <div className='user_info com_flex com_items_center'>
        <div className='img_wrapper'>
        <img src={profileImg} alt='icon' className='user_img' />

        </div>
      
        <div>
          <p className='user_name'>
            {userName}
            <img src={activityIcon} alt='icon' className='activity_icon' />
            <span className='activity_time'>{lastActive}</span>
          </p>
          {!isShowForComment &&
            <>
              <span className='user_size'>{size}cm</span>
              <span className='user_size'>{weight}kg</span>
            </>
          }
        </div>
      </div>
      {isShowForComment ? <img src={ThreeDotIcon} alt='icon' className='Three_Dot_icon' /> : <button className='follow_btn'>팔로우</button>}

    </div>
  )
}

export default UserDetail