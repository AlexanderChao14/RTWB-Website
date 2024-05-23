import React from 'react'
import {CardHeading, SectionHeading} from '../styled/StyledHeading'
import { GridStyle11, GridStyle12, GridStyle21 } from '../styled/GridStyles'
import { TextMedium } from '../styled/TextStyles'
import { FlexboxColumnCenter } from '../styled/FlexboxStyles'
import { MoreNewsCard } from '../styled/ItemStyles'



const Home = () => {
    return (
        <React.Fragment>
            
            {/* For now I made the div a container class, and styled it in CSS.
            We can change this later if needed. */}

            {/* Introduction Section */}
            <section style={{backgroundColor: "orange"}}>   
                <GridStyle11 className = "container-grid mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                    <div className="flex-item-dir-cols grid-item-center">
                        <CardHeading>We are RTWB</CardHeading>
                        <TextMedium>Mission: Improve respiratory health through educational advancement of local healthcare providers worldwide.</TextMedium>
                        <TextMedium>Vision: Create a united Respiratory Therapy culture synonymous with giving back.</TextMedium>
                    </div>

                    <div className="flex-item-dir-cols grid-item-center items-center">
                        <p>Picture goes here</p>
                    </div>

                </GridStyle11>
            </section>

            {/* About us Second Section*/}
            <section style={{backgroundColor: "orange"}}>
                <GridStyle12 className="container-grid mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                    <div className="flex-item-dir-cols grid-item-center">
                        <CardHeading>About us</CardHeading>
                        <TextMedium>RTWB is a collaborative project to educate and empower health care practitioners initiated by Respiratory Therapists around the globe.</TextMedium>
                        <div style={{backgroundColor: "steelblue", width:"30%"}}>Button: Learn More</div>
                    </div>

                    <div className="flex-item-dir-cols grid-item-center items-center">
                        <p>Picture goes here</p>
                    </div>
                </GridStyle12>
            </section>
            
            {/* Volunteer Section */}
            <section style={{backgroundColor: "orange"}}>
                <GridStyle21 className="container-grid mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                    <div className="flex-item-dir-cols grid-item-center items-center">
                        <CardHeading>Picture Goes Here</CardHeading>
                    </div>

                    <div className="flex-item-dir-cols grid-item-center">
                        <CardHeading>Get Involved</CardHeading>
                        <TextMedium>Interested in contributing to our cause? See how you can help our charity here:</TextMedium>
                        <div style={{backgroundColor: "steelblue", width:"30%"}}>Button: Get Involved</div>
                    </div>
                </GridStyle21>
            </section>

            {/* Make a dynamic grid here for more sections */}
            <section>
                <FlexboxColumnCenter className="updatesContainer container mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                    <SectionHeading>Updates and More</SectionHeading>
                    <div className="updatesGrid">
                        <MoreNewsCard className="grid-item-center items-center">
                            <p>Picture here</p>
                            <p>Hello World</p>
                        </MoreNewsCard>

                        <MoreNewsCard className="grid-item-center items-center">
                            <p>Picture here</p>
                            <p>Hello World</p>
                        </MoreNewsCard>

                        <MoreNewsCard className="grid-item-center items-center">
                            <p>Picture here</p>
                            <p>Hello World</p>
                        </MoreNewsCard>
                        <MoreNewsCard className="grid-item-center items-center">
                            <p>Picture here</p>
                            <p>Hello World</p>
                        </MoreNewsCard>

                       

                       
                        
                    </div>
                </FlexboxColumnCenter>
            </section>
            
        </React.Fragment>
    )
}

export default Home;