import { color } from 'framer-motion'
import React from 'react'

const mainStyle = {
    // backgroundColor:"rgb(17 24 39)",
    color:"rgb(209 213 219)",
    borderRadius:"0.375rem",
    padding:"8px 12px",
    fontSize:"15px",
    fontWeight: "500",
    width: "fit-content"
}

const ButtonMain = ({path , key , text}) => {
  return (
    <>
      <a href={path} key={key} style={mainStyle} className="bg-gray-900 hover:bg-gray-700 hover:text-white my-3">
          {text}
      </a>
    </>
  )
}

export default ButtonMain
