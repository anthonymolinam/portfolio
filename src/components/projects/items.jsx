import React from 'react'
import{FaArrowRight} from 'react-icons/fa'
import {motion} from 'framer-motion'

const Items = ({projectItems}) => {
  return (
    <>
    {projectItems.map((projectItem) => {
      const {id, img, category, title, description}=projectItem
      return(
        <motion.div 
        layout
        animate={{opacity: 1, scale: 1}}
        initial={{opacity: 0.8, scale: 0.6}}
        exit={{opacity: 0.8, scale:0.6}}
        transition={{duration: 0.3}}
         className="projectItem card cardTwo" key={id}>
          <div className="portfolioImgWrapper">
            <img src={img} alt="" className='portfolioImg' />
          </div>
          <span className='portfolioCat text-cs'>{category}</span>
          <h3 className='portfolioTitle'>{title}</h3>
          <p className='portfolioDes'>{description}</p>

          <a href="" className='link'>
            See Demo
            <FaArrowRight className='linkIcon'></FaArrowRight>
          </a>
        </motion.div>
      )
    })}
    </>
  )
}

export default Items