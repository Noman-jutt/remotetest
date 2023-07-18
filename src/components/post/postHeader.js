import React from 'react'
import ArrowLeftIcon from '../../assets/arrowleft-icon.svg';
import BellIcon from '../../assets/bell.svg';

const PostHeader = ({ title }) => {
  return (
    <div className='com_flex com_items_center com_justify_between post_header'>
      <img src={ArrowLeftIcon} alt='arrow-icon' />
      <p className='p_header_title'>{title}</p>
      <img src={BellIcon} alt='bell-icon' />
    </div>
  )
}

export default PostHeader