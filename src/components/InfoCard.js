import React from 'react'
import { MoreNewsCard } from './styled/ItemStyles'
import { color } from 'framer-motion'

const descStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#7796CB",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: "15px",
    borderRadius: "0px 0px 10px 10px",
}

const cardStyle = {
    backgroundColor: "#E1E3DE",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "2fr 1fr",
    minHeight: "360px",
    height: "100%",
    maxHeight: "300px",
    width: "340px",
    borderRadius: "13px",
    border:"3px solid #385398"
}

const imageStyle = {
    objectFit: "contain",
    height:"100%",
    width: "auto",
}

const imageContainer = {
    width: "100%",
    height: "70%",  
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
}

const InfoCard = ({title, desc, path, key, img}) => {
  return (
    <>
        <a style={cardStyle} className="grid-item-center items-center my-8 infoCard" href={path} key={key}>
            <div style={imageContainer}>
                <img src={img} style={imageStyle}>
                </img>
            </div>
            <div style={descStyle}>
                <p style={{justifySelf:"center" , fontWeight:"500" , fontSize:"28px"}}>{title}</p>
                {/* <p style={{justifySelf:"left", margin:"10px 0px"}}>{desc}</p> */}
            </div>
        </a>
    </>
  )
}

export default InfoCard
