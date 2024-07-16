import React from "react";

const Footer  = () =>{
    return(
        <div className="footer-back">
            <div className="footer mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                <div className="footerCard flex w-full h-36 my-5">
                    <img src="images/rtwb-banner.png" className="object-contain shadow-bl max-h-44"/>
                </div>
                <div className="footerCard">
                    <p className="listHeader">Get Involved</p>
                    <ul className = "footerList">
                        <li><a href="/GetInvolved" key="GetInvolved">Join us</a></li>
                        <li><a href="/GetDeployed" key="GetDeployed">Deployment</a></li>
                        <li><a href="/Sponsors" key="Sponsors">Sponsors</a></li>
                    </ul>
                </div>
                <div className="footerCard">
                    <p className="listHeader">Organization</p>
                    <ul className = "footerList">
                        <li><a href="/AboutUs" key="About Us">Our Mission</a></li>
                        <li><a href="/Volunteers" key="Volunteers">Volunteer Team</a></li>
                        <li><a href="/HealthEducationPartner" key="HealthEducationPartner">Healthcare Partners</a></li>
                        <li><a href="/WhereWeWork" key="WhereWeWork">Where we work</a></li>
                    </ul>
                </div>
                <div className="footerCard">
                    <p className = "listHeader">Get In Touch</p>
                    <ul className = "footerList">
                        <li><a href="">Facebook</a></li>
                        <li><a href="AboutUs" key="About Us">Email</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer