import React from 'react'
import PageTitle from '../PageTitle'
import { SectionHeading } from '../styled/StyledHeading'
import { TextLarge, TextMedium } from '../styled/TextStyles'
import InfoCard from '../InfoCard'
import SponsorCard from '../SponsorCard'

const Sponsors = () => {
  return (
    <React.Fragment>

        <PageTitle title="Our Sponsors"></PageTitle>

        <section className="container-flexbox justify-start bg-slate-100">
            <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-start flex-col text-center py-4 w-full">
                    
                    <TextLarge>As an entirely volunteer run charity, our successes are only possible with the generous sponsors who share a common vision of "giving back". A big thank you to each of our sponsors!</TextLarge>
                    
                    <div className="self-center text-center my-10 p-2 bg-blue-200 w-full mt-16">
                        <SectionHeading className="font-semibold">Platinum Sponsors</SectionHeading>
                    </div>

                    <div className="sponsorsFlex">
                        <SponsorCard path="images/get-involved-photo.jpg" sponsName="Mo and Helen Shariff" text="legal fees for non-profit organization registration and $25,000 donation towards deployments"></SponsorCard>
                    </div>


                    <div className="self-center text-center my-10 p-2 bg-blue-200 w-full mt-16">
                        <SectionHeading className="font-semibold">Silver Sponsors</SectionHeading>
                    </div>

                    <div className="sponsorsFlex">
                        <SponsorCard path="images/carestream-logo.jpg" sponsName="CAREStream Medical" text="$25,000 - pledge to match donations dollar for dollar"></SponsorCard>
                        <SponsorCard path="images/coastal-sleep-logo.png" sponsName="Coastal Sleep" text="Provided our organization with 4 CPAP units, tubing and interfaces"></SponsorCard>
                        <SponsorCard path="images/carestream-logo.jpg" sponsName="Conestoga College Students" text="Donation of $2,508.93"></SponsorCard>
                        <SponsorCard path="images/carestream-logo.jpg" sponsName="Strategic Charitable Giving Foundation" text="Donation of $1,201.85"></SponsorCard>
                    </div>

                    <div className="self-center text-center my-10 p-2 bg-blue-200 w-full mt-16">
                        <SectionHeading className="font-semibold">Bronze Sponsors</SectionHeading>
                    </div>

                </div>
            </div>
        </section>

    </React.Fragment>
  )
}

export default Sponsors