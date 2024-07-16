import React from "react";


const defaultStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "450px",
    borderRadius: "15px",
    backgroundColor: "#88a8db",
    padding: "35px 35px",
    margin: "10px 20px",
    borderStartStartRadius: "1.5rem",
    borderEndStartRadius: "1.5rem",
    borderBottomRightRadius: "1.5rem",
}

const pictureStyle ={
    width: "100px",
    height: "100px",
    borderRadius: "15px",
}


const VolunteerInfoCard = ({name, title, pic, location, startDate, message, message2,message3}) => {
  return (
    <React.Fragment>
          <div style={defaultStyle} className="shadow-br">
                <img src={pic} style={pictureStyle} alt={name} className="object-cover"></img>
                <text className="font-bold text-xl">{name}</text>
                <text className="font-bold">{title}</text>
                <text>{"Member since "+startDate}</text>
                <p className="">{location}</p>
                <br/>
                <p className="italic">{message}</p>
                <br/>
                <p className="italic">{message2}</p>
                <p className="italic">{message3}</p>
            </div>
    </React.Fragment>
  )
}

export default VolunteerInfoCard