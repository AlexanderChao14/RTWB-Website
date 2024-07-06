import React from 'react'
import { MoreNewsCard } from './styled/ItemStyles'
import { color } from 'framer-motion'

const descStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#7796CB",
    alignItems: "left",
    width: "100%",
    height: "100%",
    padding: "15px",
    borderRadius: "0px 0px 10px 10px",
}

const cardStyle = {
    backgroundColor: "goldenrod",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "2fr 1fr",
    minHeight: "360px",
    height: "100%",
    maxHeight: "300px",
    width: "340px",
    borderRadius: "10px",
}

const InfoCard = ({title, desc}) => {
  return (
    <>
        <div style={cardStyle} className="grid-item-center items-center my-8 infoCard">
            <p>Picture Here</p>
            <div style={descStyle}>
                <p style={{justifySelf:"left" , fontWeight:"600"}}>{title}</p>
                <p style={{justifySelf:"left", margin:"10px 0px"}}>{desc}</p>
            </div>
        </div>
    </>
  )
}

export default InfoCard
