import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/video.action'
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

  const dispatch = useDispatch()
  const handleClick = value =>{

    setActiveElement(value)
    if(value === "ALL"){
      dispatch(getPopularVideos())
    }
    else{
      dispatch(getVideosByCategory(value))
    }
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
