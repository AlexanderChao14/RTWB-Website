import React from 'react'
import {StyledHeading} from '../styled/StyledHeading'


const Home = () => {
    return (
        <React.Fragment>
            
            {/* For now I made the div a container class, and styled it in CSS.
            We can change this later if needed. */}

            {/* Introduction Section */}
            <section style={{backgroundColor: "orange"}}>   
                <div className = "container-grid">
                    <div className="gridItemCenter">
                        <p>Vision: Duis qui aute commodo eu excepteur sint est ipsum.</p>
                    </div>
                    <div className="gridItemCenter">
                        <p>Picture goes here</p>
                    </div>
                </div>
            </section>

            <section style={{backgroundColor: "yellow"}}>
                <div className="container-grid">
                    <div className="gridItemCenter">
                        <p>Hello World</p>
                    </div>
                    <div className="gridItemCenter">
                        <p>Hello World</p>
                    </div>
                </div>
            </section>
            
            {/* <StyledHeading className="text-green-800 underline">
              Welcome to the homepage
            </StyledHeading> */}
            
        </React.Fragment>
    )
}

export default Home;