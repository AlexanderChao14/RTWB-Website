import React from 'react'
import { TextLarge } from './styled/TextStyles'

const defaultStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "350px",
    // width: "100%",
    borderRadius: "15px",
    backgroundColor: "#88a8db",
    padding: "35px 35px",
}

//Need container styling to make hover functions work
const container = {
  width: "100%",
  margin: "10px 20px",
}

const TeamsCard = ({title, desc, path, key}) => {
  return (
    <React.Fragment>
      <div style={container}>
        <a href={path} key={key}>
          <div style={defaultStyle} className="teamsCard">
              <TextLarge className="font-bold">{title}</TextLarge>
              <p>{desc}</p>
          </div>
        </a>
      </div>
    </React.Fragment>
  )
}

export default TeamsCard
