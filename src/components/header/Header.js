import React from 'react'
import "./_header.scss"

import avatar from "./avatar.png"
import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications, MdApps} from "react-icons/md"


const Header = ({handleToggleSidebar}) => {
  return (
    <div className="border border-dark header">
      
      <FaBars 
        className="header_menu" 
        size={26}
        onClick={ () => handleToggleSidebar()}
      />
      <img 
        src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt= ""  
        className= "header_logo"
      />
    
    
      <form> 
        <input type="text" placeholder="search"/>
        <button type = "submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <dic className="header_icons">
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src={avatar} 
          alt="Avatar"
        />
      </dic>
    </div>


  )
}

export default Header;
