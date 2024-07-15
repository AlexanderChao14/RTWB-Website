import React from 'react'
import {CardHeading, SectionHeading} from '../styled/StyledHeading'
import { TextMedium , TextMediumBold} from '../styled/TextStyles'
import { FlexboxColumnCenter } from '../styled/FlexboxStyles'
import InfoCard from '../InfoCard'
import ButtonMain from '../ButtonMain';



const Home = () => {
    return (
        <React.Fragment>
            
            {/* For now I made the div a container class, and styled it in CSS.
            We can change this later if needed. */}

            {/* Introduction Section */}
            <section className="landing-intro">   
                <div className = "container-flexbox justify-end mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                    <div className="flex-item-dir-cols grid-item-center w-1/2 intro-card rounded-s-3xl rounded-br-3xl shadow-br">
                        <CardHeading>We are Respiratory Therapists Without Borders</CardHeading>
                        <TextMedium>Mission: Improve respiratory health through educational advancement of local healthcare providers worldwide.</TextMedium>
                        <TextMedium>Vision: Create a united Respiratory Therapy culture synonymous with giving back.</TextMedium>
                    </div>
                </div>
            </section>

            {/* About us Second Section*/}
            <section className="sectioncolor-light">
                <div className="container-grid grid-cols-left mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                    <div className="flex-item-dir-cols grid-item-center h-full border-left shadow-br">
                        <CardHeading>About us</CardHeading>
                        <TextMedium>RTWB is a collaborative project to educate and empower health care practitioners initiated by Respiratory Therapists around the globe.</TextMedium>
                        <ButtonMain path="/AboutUs" key="About Us" text="Learn More"></ButtonMain>
                    </div>

                    <div className="flex-item-dir-cols grid-item-center items-center w-full h-full border-br shadow-br">
                        <img src="images/about-us-photo.jpg" className="card-image border-br"/>
                    </div>
                </div>
            </section>

            {/* Eric's Section */}
            <section className="sectioncolor-dark">
                <div className="container-grid grid-cols-left mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                    <div className="flex flex-col justify-center items-center min-w-80 max-w-sm w-3/5 h-auto max-h-96 justify-self-center shadow-bl">
                        <img src="images/eric-cheng-large.png" className="h-full w-full object-cover"/>
                    </div>
                    <div className="flex flex-col justify-center items-left mx-4 p-4 bg-themeLightblue border-right border-bl shadow-full-bl">
                        <TextMedium>Our vision is to create a culture of respiratory therapy synonymous with 'giving back'. Just like the respiratory therapy profession, RTWB finds its roots in people filled with compassion for others, work with integrity and innovate to work smarter. We believe in hard work, but more importantly working smart and strategically to bring about sustainable change to improve respiratory health through educational advancement of local healthcare providers worldwide. </TextMedium>
                        <TextMediumBold className="pt-5">Eric Cheng</TextMediumBold>
                        <TextMediumBold>Co-Founder & Culture Creator</TextMediumBold>
                    </div>
                </div>

            </section>
            
            {/* Make a dynamic grid here for more sections */}
            <section className="sectioncolor-light">
                <FlexboxColumnCenter className="updatesContainer container mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                    {/* <SectionHeading className="text-center">Updates and More</SectionHeading> */}
                    <div className="updatesGrid">

                        <InfoCard img="images/teams-logo.png" title="Meet the team" desc="Learn more about our incredible team." path="/AboutUs" key="About Us"></InfoCard>

                        <InfoCard img="images/world-logo.png" title="Where we Work" desc="See where our charity is deployed around the world." path="/WhereWeWork" key="WhereWeWork"></InfoCard>

                        <InfoCard img="images/megaphone-logo.png" title="Updates and News" desc="See our latest milestones and news." path="/News" key="News"></InfoCard>
                        
                        <InfoCard img="images/handshake-logo.png" title="Sponsors" desc="Our gratitude for these amazing people." path="/Sponsors" key="Sponsors"></InfoCard>
                        
                        <InfoCard img="images/volunteer-logo.png" title="Volunteering" desc="See our volunteering community." path="" key=""></InfoCard>

                        <InfoCard img="images/heart-logo-png.png" title="Healthcare Partners" desc="People we work with." path="" key=""></InfoCard>
                    </div>
                </FlexboxColumnCenter>
            </section>

            {/* Get Involved Section */}
            <section className="sectioncolor-light">
                <div className="container-grid grid-cols-right mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                    <div className="flex-item-dir-cols grid-item-center w-full h-full border-bl shadow-bl z-0 items-center">
                        <img src="images/get-involved-photo.jpg" className="card-image border-bl"/>
                    </div>

                    <div className="flex-item-dir-cols grid-item-center w-full h-full border-right shadow-bl">
                        <CardHeading>Get Involved</CardHeading>
                        <TextMedium>Interested in contributing to our cause? See how you can help our charity here:</TextMedium>
                        <ButtonMain path="/GetInvolved" key="GetInvolved" text="Join us here"></ButtonMain>
                    </div>
                </div> 
            </section>

            
        </React.Fragment>
    )
}

export default Home;