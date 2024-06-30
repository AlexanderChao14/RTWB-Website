import React from "react";


const NavBar = () =>{
    return(
        <div style={{backgroundColor:"rgb(95, 113, 167)"}}>
            <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">


                        Toggle Drop down navbar
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            {/* TODO either make a new logo or find other solution */}
                            <a href="/">
                                <img src="images/RTWB_Logo.jpg" alt="RTWB Logo" className="rounded-md h-10 w-auto"/>
                            </a>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="/AboutUs" key={"About Us"} className="bg-gray-900 text-white: text-gray-300 hover:bg-gray-700 hover:text-white, rounded-md px-3 py-2 text-sm font-medium">
                                    About Us
                                </a>
                                <a href="/GetInvolved" key={"GetInvolved"} className="bg-gray-900 text-white: text-gray-300 hover:bg-gray-700 hover:text-white, rounded-md px-3 py-2 text-sm font-medium">
                                    Get Involved
                                </a>
                                <a href="/News" key={"News"} className="bg-gray-900 text-white: text-gray-300 hover:bg-gray-700 hover:text-white, rounded-md px-3 py-2 text-sm font-medium">
                                    News
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar