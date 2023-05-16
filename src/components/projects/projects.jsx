import React, { useState } from 'react'
import List from './list'
import Items from './items'
import { projects } from '../../Data'
import './projects.css'
import { AnimatePresence } from 'framer-motion'

const allNavList = ['all', ...new Set(projects.map((project) => project.category)
)]
console.log(allNavList)

const Projects = () => {
  const [projectItems, setMenuItems] = useState(projects)
  const [navList, setCategories] = useState(allNavList)

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(projects)
      return
    }
    const newProjectItems = projects.filter((item) => 
    item.category === category)
    setMenuItems(newProjectItems) 
  }
  return (
    <section className='portfolio section' id='work'>
      <h2 className="sectionTitle text-cs">Portfolio</h2>
      <p className="sectionSubtitle">
      My <span>work</span> 
      </p>
      <List list = {navList} filterItems={filterItems}/>
      <div className="portfolioContainer container grid">
        <AnimatePresence initial={false}>
        <Items projectItems={projectItems}/>
        </AnimatePresence>

      </div>
      <div className="spacer wave2"></div>
    </section>
  )
}

export default Projects