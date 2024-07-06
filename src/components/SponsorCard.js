import React from 'react'
import { TextMedium, TextMediumBold } from './/styled/TextStyles'

// const cardFormat = {
//   display: "grid",
//   gridTemplateRows: "2fr 1fr",
//   gridTemplateColumns: "1fr",
//   maxHeightheight: "500px",
//   maxWidth: "500px",
//   backgroundColor: "lightblue",
//   padding: "10px",
// }

const cardFormat = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  width: "450px",
  maxHeight: "400px",
  margin: "2em 1em",
  backgroundColor: "lightblue",
}

const imgContainer = {
  height: "150px",
  maxHeight: "150px"
  // backgroundColor: "red",
}

const imageStyle = {
  objectFit: "fill"
}


const SponsorCard = ( {path , sponsName, text} ) => {
  return (
    <React.Fragment>
      
        <div style={cardFormat}>
          <div className="flex justify-center w-full h-full" style={imgContainer}>
            <img src={path} style={imageStyle}></img>
          </div>
          
          <div className="flex flex-col justify-center items-center w-full">
            <TextMediumBold>{sponsName}</TextMediumBold>
            <TextMedium className="">{text}</TextMedium>
          </div>
        </div>

    </React.Fragment>
  )
}

export default SponsorCard
