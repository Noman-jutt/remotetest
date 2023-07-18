import React from 'react'

const Reactions = ({ data, className }) => {
  return (
    <div className={`com_flex com_items_center Post_reaction com_flex_Wrap com_pr_16 ${className}`}>
      {data.map((obj, i) => (
        <div key={i} className='com_flex com_items_center cout_inner_wrapper '>
          <img src={obj.icon} alt='icon' height={20} width={17} />
          <span className='span_Cout'>{obj.totalCount}</span>
        </div>
      ))}
    </div>
  )
}

export default Reactions