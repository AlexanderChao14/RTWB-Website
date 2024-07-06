import React from 'react'
import { PageHeading, SectionHeading } from '../styled/StyledHeading'
import { CardHeading } from '../styled/StyledHeading'
import { TextMedium } from '../styled/TextStyles'
import TeamsCard from '../TeamsCard'
import InfoCard from '../InfoCard'
import PageTitle from '../PageTitle'

const Volunteer = () => {
  return (
    <React.Fragment>

        <PageTitle title="Get Involved"></PageTitle>

        <section className="container-flexbox justify-center">
            <div className="container-grid grid-cols-left mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                <div className="flex-item-dir-cols grid-item-center w-full h-full">
                    Picture here
                </div>

                <div className="flex-item-dir-cols grid-item-center w-full h-full">
                    <CardHeading>Our Community</CardHeading>
                    <TextMedium>With a mix of staff, board directors, instructors, sponsors and of course our volunteers, RTWB would not be the the community it is today.</TextMedium>
                    <TextMedium>With the help of everybody's effort, we can continue to move closer towards our goal and vision.</TextMedium>
                    <TextMedium>Below you can read how you can get involved with us and join our endeavors for the future.</TextMedium>
                </div>
            </div>
        </section>

        <section className="container-flexbox justify-startpy-20 bg-slate-200">
            <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                <div className="self-center flex justify-center">
                    <SectionHeading className="font-semibold">Our Teams</SectionHeading>
                </div>
                <div className="teamsFlex flex w-full rounded-3xl items-center">
                    
                    <TeamsCard title="Volunteer" desc="Get deployed and see our volunteer positions" path="/GetDeployed" key="GetDeployed"></TeamsCard>
                    <TeamsCard title="Healthcare Education Partners" desc="Become a Healthcare Education Partner" path="/HealthEducationPartner" key="HealthEducationPartner"></TeamsCard>
                </div>
                <div className=" teamsFlex flex w-full rounded-3xl items-center">
                    <TeamsCard title="Our Board" desc="Join our committee" path="/Board" key="Board"></TeamsCard>
                    <TeamsCard title="The Organizational And Professional Network Team" desc="Develop ideas and share your skills." path="/Teams" key="Teams"></TeamsCard>
                    <TeamsCard title="Our Sponsors" desc="Our heartfelt gratitude." path="/Sponsors" key="Sponsors"></TeamsCard>
                </div>
            </div>
        </section>

        <section className="container-flexbox justify-start items-center sectioncolor-dark">
            <div className="bg-blue-100 mx-auto my-2 max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-start flex-col items-start py-4 px-5 w-full bg-cyan-300 rounded-3xl">
                    <div className="self-center">
                        <SectionHeading className="font-semibold">Donations and Sponsors</SectionHeading>
                    </div>
                    <TextMedium>As an entirely volunteer run charity, our successes are only possible with the generous sponsors who share a common vision of 'giving back'. A big thank you to each of our sponsors, we are eternally grateful for their generosity!</TextMedium>
                    <TextMedium>If you are considering donating and/or looking to provide us with your support, please email Eric Cheng at eric@rtwb.ca for further discussion.</TextMedium>
                </div>
            </div>
        </section>

    </React.Fragment>
  )
}

export default Volunteer
