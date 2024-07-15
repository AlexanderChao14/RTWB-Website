import { color, transform } from 'framer-motion'
import React, {useState} from 'react'



const ButtonMain = ({path , key , text}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const mainStyle = {
    // backgroundColor:"rgb(17 24 39)",
    color:"rgb(209 213 219)",
    borderRadius:"0.375rem",
    padding:"8px 12px",
    fontSize:"15px",
    fontWeight: "500",
    width: "fit-content",
    transition: "all .2s ease-in-out",
    transform: isHovered? "scale(1.05)": "",
    webkitBoxShadow: isHovered? "0px 10px 13px -7px #505050, 3px 3px 3px 3px rgba(0,0,0,0.51)":"",
    boxShadow: isHovered? "0px 10px 13px -7px 	#505050, 3px 3px 3px 3px rgba(0,0,0,0.51)":""
  };

  return (
    <>
      <a href={path} key={key} style={mainStyle} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="bg-gray-900  my-3">
          {text}
      </a>
    </>
  )
}

export default ButtonMain
