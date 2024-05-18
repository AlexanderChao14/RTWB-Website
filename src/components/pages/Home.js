import React from 'react'
import {CardHeading, SectionHeading, StyledHeading} from '../styled/StyledHeading'
import { GridStyle11, GridStyle12, GridStyle21 } from '../styled/GridStyles'
import { FlexItemLeft, FlexItemCenter } from '../styled/ItemStyles'
import { TextMedium } from '../styled/TextStyles'
import { FlexboxColumnCenter } from '../styled/FlexboxStyles'



const Home = () => {
    return (
        <React.Fragment>
            
            {/* For now I made the div a container class, and styled it in CSS.
            We can change this later if needed. */}

            {/* Introduction Section */}
            <section style={{backgroundColor: "orange"}}>   
                <GridStyle11 className = "container-grid">
                    <FlexItemLeft className="flexItemColumn">
                        <CardHeading>We are RTWB</CardHeading>
                        <TextMedium>Mission: Improve respiratory health through educational advancement of local healthcare providers worldwide.</TextMedium>
                        <TextMedium>Vision: Create a united Respiratory Therapy culture synonymous with giving back.</TextMedium>
                    </FlexItemLeft>

                    <FlexItemCenter className="flexItemColumn">
                        <p>Picture goes here</p>
                    </FlexItemCenter>

                </GridStyle11>
            </section>

            {/* About us Second Section*/}
            <section style={{backgroundColor: "orange"}}>
                <GridStyle12 className="container-grid">
                    <FlexItemLeft className="flexItemColumn">
                        <CardHeading>About us</CardHeading>
                        <TextMedium>RTWB is a collaborative project to educate and empower health care practitioners initiated by Respiratory Therapists around the globe.</TextMedium>
                        <div style={{backgroundColor: "steelblue", width:"30%"}}>Button: Learn More</div>
                    </FlexItemLeft>

                    <FlexItemCenter className="flexItemColumn">
                        <p>Picture goes here</p>
                    </FlexItemCenter>
                </GridStyle12>
            </section>
            
            {/* Volunteer Section */}
            <section style={{backgroundColor: "orange"}}>
                <GridStyle21 className="container-grid">
                    <FlexItemCenter className="flexItemColumn">
                        <CardHeading>Picture Goes Here</CardHeading>
                    </FlexItemCenter>

                    <FlexItemLeft className="flexItemColumn">
                        <CardHeading>Get Involved</CardHeading>
                        <TextMedium>Interested in contributing to our cause? See how you can help our charity here:</TextMedium>
                        <div style={{backgroundColor: "steelblue", width:"30%"}}>Button: Get Involved</div>
                    </FlexItemLeft>
                </GridStyle21>
            </section>

            {/* Make a dynamic grid here for more sections */}
            <section>
                <FlexboxColumnCenter className="updatesContainer">
                    <SectionHeading>Updates and More</SectionHeading>
                    <div className="updatesGrid">
                        <FlexItemCenter className="flexItemColumn">
                            <h1>Header</h1>
                            <p>Description</p>
                            <div>Read More</div>
                        </FlexItemCenter>
                        <FlexItemCenter className="flexItemColumn">
                            <h1>Header</h1>
                            <p>Description</p>
                            <div>Read More</div>
                        </FlexItemCenter>
                        <FlexItemCenter className="flexItemColumn">
                            <h1>Header</h1>
                            <p>Description</p>
                            <div>Read More</div>
                        </FlexItemCenter>
                        <FlexItemCenter className="flexItemColumn">
                            <h1>Header</h1>
                            <p>Description</p>
                            <div>Read More</div>
                        </FlexItemCenter>
                        <FlexItemCenter className="flexItemColumn">
                            <h1>Header</h1>
                            <p>Description</p>
                            <div>Read More</div>
                        </FlexItemCenter>
                        <FlexItemCenter className="flexItemColumn">
                            <h1>Header</h1>
                            <p>Description</p>
                            <div>Read More</div>
                        </FlexItemCenter>
                        <FlexItemCenter className="flexItemColumn">
                            <h1>Header</h1>
                            <p>Description</p>
                            <div>Read More</div>
                        </FlexItemCenter>
                        
                    </div>
                </FlexboxColumnCenter>
            </section>
            
        </React.Fragment>
    )
}

export default Home;