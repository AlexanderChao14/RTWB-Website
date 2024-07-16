import React from "react";
import ButtonMain from "./ButtonMain";


const NavBar = () =>{
    return(
        <div style={{backgroundColor:"rgb(95, 113, 167)"}}>
            <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-18 items-center justify-between">
                    
                    <div className="flex flex-1 items-center sm:items-stretch ">
                        <div className="flex items-center">
                            {/* TODO either make a new logo or find other solution */}
                            <a href="/" className="navLogo">
                                <img src="images/RTWB_Logo.jpg" alt="RTWB Logo" className="rounded-md h-10 w-auto"/>
                            </a>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {/* <a href="/AboutUs" key={"About Us"} className="bg-gray-900 text-white: text-gray-300 hover:bg-gray-700 hover:text-white, rounded-md px-3 py-2 text-sm font-medium">
                                    About Us
                                </a>
                                <a href="/GetInvolved" key={"GetInvolved"} className="bg-gray-900 text-white: text-gray-300 hover:bg-gray-700 hover:text-white, rounded-md px-3 py-2 text-sm font-medium">
                                    Get Involved
                                </a>
                                <a href="/News" key={"News"} className="bg-gray-900 text-white: text-gray-300 hover:bg-gray-700 hover:text-white, rounded-md px-3 py-2 text-sm font-medium">
                                    News
                                </a> */}
                                <ButtonMain path="/AboutUs" key="About Us" text="About Us"></ButtonMain>
                                <ButtonMain path="/Volunteers" key="Volunteers" text="Our Volunteers"></ButtonMain>
                                <ButtonMain path="/GetInvolved" key="GetInvolved" text="Get Involved"></ButtonMain>
                                <ButtonMain path="/News" key="News" text="News"></ButtonMain>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar