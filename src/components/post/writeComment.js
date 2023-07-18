import React from 'react'
import ImgIcom from "../../assets/img-icon.svg"

const WriteComment = () => {
  return (
    <div className='comment_Box '>
      <img src={ImgIcom} alt='icon' />
      <input type='text' placeholder='댓글을 남겨주세요.' />
      <button className='btn_registraion'>등록</button>
    </div>

  )
}
export default WriteComment