import React from 'react'
import { MoreNewsCard } from './styled/ItemStyles'

const descStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "lavender",
    alignItems: "left",
    width: "100%",
    height: "100%",
    padding: "15px"
}

const button = {
    backgroundColor: "steelblue",
    justifySelf: "left",
    padding: "5px"
}

const InfoCard = ({title, desc}) => {
  return (
    <>
        <MoreNewsCard className="grid-item-center items-center infoCard">
            <p>Picture Here</p>
            <div style={descStyle}>
                <p style={{justifySelf:"left" , fontWeight:"600"}}>{title}</p>
                <p style={{justifySelf:"left", margin:"10px 0px"}}>{desc}</p>
                {/* <div style={{margin:"10px 0px"}}>
                    <button style={ button }>Read More</button>
                </div> */}
            </div>
        </MoreNewsCard>
    </>
  )
}

export default InfoCard
