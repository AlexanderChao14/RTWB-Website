import React from 'react'
import {CardHeading, SectionHeading} from '../styled/StyledHeading'
import { TextMedium } from '../styled/TextStyles'
import { FlexboxColumnCenter } from '../styled/FlexboxStyles'
import InfoCard from '../InfoCard'



const Home = () => {
    return (
        <React.Fragment>
            
            {/* For now I made the div a container class, and styled it in CSS.
            We can change this later if needed. */}

            {/* Introduction Section */}
            <section className="landing-intro">   

                <div className = "container-flexbox justify-end mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                    <div className="flex-item-dir-cols grid-item-center w-1/2 intro-card">
                        <CardHeading>We are RTWB</CardHeading>
                        <TextMedium>Mission: Improve respiratory health through educational advancement of local healthcare providers worldwide.</TextMedium>
                        <TextMedium>Vision: Create a united Respiratory Therapy culture synonymous with giving back.</TextMedium>
                    </div>

                    {/* <div className="flex-item-dir-cols grid-item-center items-center">
                        <p>Picture goes here</p>
                    </div> */}

                </div>

            </section>

            {/* About us Second Section*/}
            <section className="sectioncolor-light">
                <div className="container-grid grid-cols-left mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                    <div className="flex-item-dir-cols grid-item-center w-11/12 h-full">
                        <CardHeading>About us</CardHeading>
                        <TextMedium>RTWB is a collaborative project to educate and empower health care practitioners initiated by Respiratory Therapists around the globe.</TextMedium>
                        <div style={{backgroundColor: "steelblue", width:"30%"}}>Button: Learn More</div>
                    </div>

                    <div className="flex-item-dir-cols grid-item-center items-center w-11/12 h-full">
                        <p>Picture goes here</p>
                    </div>
                </div>
            </section>
            
            {/* Volunteer Section */}
            <section>
                <div className="container-grid grid-cols-right mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                    <div className="flex-item-dir-cols grid-item-center items-center w-11/12 h-full">
                        <img src="images/get-involved-photo.jpg" className="card-image"/>
                    </div>

                    <div className="flex-item-dir-cols grid-item-center w-11/12 h-full">
                        <CardHeading>Get Involved</CardHeading>
                        <TextMedium>Interested in contributing to our cause? See how you can help our charity here:</TextMedium>
                        <div style={{backgroundColor: "steelblue", width:"30%"}}>Button: Get Involved</div>
                    </div>
                </div> 
            </section>

            {/* Make a dynamic grid here for more sections */}
            <section className="sectioncolor-dark">
                <FlexboxColumnCenter className="updatesContainer container mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                    <SectionHeading className="text-center">Updates and More</SectionHeading>
                    <div className="updatesGrid">

                        <InfoCard title="Meet the team" desc="Learn more about our incredible team."></InfoCard>

                        <InfoCard title="Where we Work" desc="See where our charity is deployed around the world."></InfoCard>

                        <InfoCard title="Updates and News" desc="See our latest milestones and news."></InfoCard>
                        
                        <InfoCard title="Sponsors" desc="Our gratitude for these amazing people."></InfoCard>
                        
                    </div>
                </FlexboxColumnCenter>
            </section>
            
        </React.Fragment>
    )
}

export default Home;