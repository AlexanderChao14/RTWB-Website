import React from 'react'
import {CardHeading, StyledHeading} from '../styled/StyledHeading'
import { GridStyle11, GridStyle12, GridStyle21 } from '../styled/GridStyles'
import { FlexItemColumn, FlexItemRow, FlexItemSingle } from '../styled/ItemStyles'
import { TextMedium } from '../styled/TextStyles'



const Home = () => {
    return (
        <React.Fragment>
            
            {/* For now I made the div a container class, and styled it in CSS.
            We can change this later if needed. */}

            {/* Introduction Section */}
            <section style={{backgroundColor: "orange"}}>   
                <GridStyle11 className = "container-grid">
                    <FlexItemColumn className="gridItemLeft">
                        <CardHeading>We are RTWB</CardHeading>
                        <TextMedium>Mission: Improve respiratory health through educational advancement of local healthcare providers worldwide.</TextMedium>
                        <TextMedium>Vision: Create a united Respiratory Therapy culture synonymous with giving back.</TextMedium>
                    </FlexItemColumn>

                    <FlexItemSingle className="gridItemCenter">
                        <p>Picture goes here</p>
                    </FlexItemSingle>

                </GridStyle11>
            </section>

            {/* About us Second Section*/}
            <section style={{backgroundColor: "orange"}}>
                <GridStyle12 className="container-grid">
                    <FlexItemColumn className="gridItemLeft">
                        <CardHeading>About us</CardHeading>
                        <TextMedium>RTWB is a collaborative project to educate and empower health care practitioners initiated by Respiratory Therapists around the globe.</TextMedium>
                        <div style={{backgroundColor: "steelblue", width:"30%"}}>Button: Learn More</div>
                    </FlexItemColumn>

                    <FlexItemSingle className="gridItemCenter">
                        <p>Picture goes here</p>
                    </FlexItemSingle>
                </GridStyle12>
            </section>
            
            {/* Volunteer Section */}
            <section style={{backgroundColor: "orange"}}>
                <GridStyle21 className="container-grid">
                    <FlexItemSingle className="gridItemCenter">
                        <CardHeading>Picture Goes Here</CardHeading>
                    </FlexItemSingle>

                    <FlexItemColumn className="gridItemLeft">
                        <CardHeading>Get Involved</CardHeading>
                        <TextMedium>Interested in contributing to our cause? See how you can help our charity here:</TextMedium>
                        <div style={{backgroundColor: "steelblue", width:"30%"}}>Button: Get Involved</div>
                    </FlexItemColumn>
                    

                </GridStyle21>
            </section>

            {/* <StyledHeading className="text-green-800 underline">
              Welcome to the homepage
            </StyledHeading> */}
            
        </React.Fragment>
    )
}

export default Home;