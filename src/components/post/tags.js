import React from 'react'

const Tags = ({ data }) => {
  return (
    <div className='com_flex com_items_center tags com_flex_Wrap com_px_16'>
      {data.map((tag) => <p key={tag} className='p_tag'>#{tag}</p>)}
    </div>
  )
}
export default Tags