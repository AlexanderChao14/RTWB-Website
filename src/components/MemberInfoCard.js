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
}

const pictureStyle ={
    width: "100px",
    height: "100px",
    borderRadius: "15px",
}


const MemberInfoCard = ({name, title, desc, location, email, pic, quote}) => {
  return (
    <React.Fragment>
          <div style={defaultStyle} >
                <img src={pic} style={pictureStyle} alt={name} className="object-cover"></img>
                <text className="font-bold text-xl">{name}</text>
                <text className="font-bold">{title}</text>
                <p className="">{location}</p>
                <a href={"mailto:"+{email}} className="underline underline-offset-1 text-blue-600 font-medium">{email}</a>
                <p>{desc}</p>
                <p className="italic">{quote}</p>
            </div>
    </React.Fragment>
  )
}

export default MemberInfoCard