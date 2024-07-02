import React from "react";


const defaultStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "350px",
    width: "450px",
    borderRadius: "15px",
    backgroundColor: "#88a8db",
    padding: "35px 35px",
    margin: "10px 20px",
}

const pictureStyle ={
    width: "100px",
    height: "100px",
    borderRadius: "15px",
}

// const container = {
//   width: "100%",
//   margin: "10px 20px",
  
// }

const MemberInfoCard = ({name, title, desc, location, email, pic}) => {
  return (
    <React.Fragment>
      {/* <div style={container}> */}
          <div style={defaultStyle} >
                <img src={pic} style={pictureStyle} alt={name}></img>
                <text className="font-bold">{name}</text>
                <text className="font-bold">{title}</text>
                <p>{desc}</p>
                <p>{email}</p>
                <p>{location}</p>
            </div>
          {/* </div> */}
    </React.Fragment>
  )
}

export default MemberInfoCard