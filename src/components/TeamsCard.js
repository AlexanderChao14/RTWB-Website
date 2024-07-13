import React from 'react'
import { TextLarge } from './styled/TextStyles'
import { infoCardStyle } from './styled/ItemStyles'

const defaultStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "350px",
    borderRadius: "15px",
    padding: "35px 35px",
    backgroundColor: "#7796cb",
    border: "2px solid #385398"
}

//Need container styling to make hover functions work
const container = {
  width: "100%",
  margin: "10px 20px",
}

const imgContainer = {
  width: "100%",
  height: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden"
}

const imgStyle = {
  objectFit: "cover",
  height: "auto",
  width: "100%",
  overflow: "hidden",
  borderRadius:"15px"
}


const TeamsCard = ({title, desc, path, key, img}) => {

  return (
    <React.Fragment>
      <div style={container}>
        <a href={path} key={key}>
          <div style={defaultStyle} className="teamsCard">
            <div style={imgContainer}>
              <img src={img} style={imgStyle}></img>
            </div>
            <TextLarge className="font-bold">{title}</TextLarge>
            <p>{desc}</p>
          </div>
        </a>
      </div>

      {/* <div style={container}>
        <div style={{backgroundImage:`url(${img})` , borderRadius:"15px" , objectFit:"cover"}}>
          <a href={path} key={key}>
            <div style={defaultStyle} className="teamsCard">
                <TextLarge className="font-bold">{title}</TextLarge>
                <p>{desc}</p>
            </div>
          </a>
        </div>
      </div> */}
    </React.Fragment>
  )
}

export default TeamsCard
