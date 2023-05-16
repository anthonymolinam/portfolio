import React, { useState } from 'react'

const List = ({list, filterItems}) => {
  const [active, setActive] = useState(0)
  return (
    <div className='portfolioList'>
      {list.map((category, index)=>{
      return(
          <button className={`${active=== index ? 'active-work':'' 
        } portfolioListItem text-cs`} key={index} 
          onClick={()=>{setActive(index) 
          filterItems(category)}}>
            {category}
          </button>
      )
      })}
    </div>
  )
}

export default List