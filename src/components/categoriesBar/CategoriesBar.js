import React from 'react'
import { useState } from 'react'
import "./_categoriesBar.scss"



const keywords = [
  "All",
  "coding",
  "Football",
  "Nollywood",
  "React.js",
  "Angular.js",
  "Cryptocurrency",
  "Stocks",
  "Music",
  "Art",
  "Science",
  "Money",
  "Dance",
  "Basketball",
  "Finance",
  "Real Estate",
  "Education",
  "Codewithmosh"
]


const CategoriesBar = () => {

  const[activeElement, setActiveElement] = useState("All")

  const handleClick = value =>{
    setActiveElement(value)
  }
  return  <div className = "categoriesBar">

    {
      keywords.map((value,i) =>(
        <span 
          onClick = {() => handleClick(value)}
          key={i} className = {activeElement === value ? "active" : " "} >{value}

        </span>
      ))
    }
  </div>
}

export default CategoriesBar
