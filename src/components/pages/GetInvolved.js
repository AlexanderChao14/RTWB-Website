import React from 'react'
import { PageHeading, SectionHeading } from '../styled/StyledHeading'
import { CardHeading } from '../styled/StyledHeading'
import { TextMedium } from '../styled/TextStyles'
import TeamsCard from '../TeamsCard'
import PageTitle from '../PageTitle'

const Volunteer = () => {
  return (
    <React.Fragment>

        <PageTitle title="Get Involved"></PageTitle>

        <section className="container-flexbox justify-center">
            <div className="container-grid grid-cols-left mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                <div className="flex-item-dir-cols grid-item-center w-full h-full border-left shadow-full-br">
                    Picture here
                </div>

                <div className="flex-item-dir-cols grid-item-center w-full h-full border-br shadow-full-br">
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
                    
                    <TeamsCard title="Volunteer" desc="Get deployed and see our volunteer positions" path="/GetDeployed" key="GetDeployed" img="images/volunteer-teams.png"></TeamsCard>
                    <TeamsCard title="Healthcare Education Partners" desc="Become a Healthcare Education Partner" path="/HealthEducationPartner" key="HealthEducationPartner" img="images/example-2.jpg"></TeamsCard>
                </div>
                <div className=" teamsFlex flex w-full rounded-3xl items-center">
                    <TeamsCard title="Our Board" desc="Join our committee" path="/Board" key="Board" img="images/board.jpg"></TeamsCard>
                    <TeamsCard title="The Organizational And Professional Network Team" desc="Develop ideas and share your skills." path="/Teams" key="Teams" img="images/example-2.jpg"></TeamsCard>
                    <TeamsCard title="Our Sponsors" desc="Our heartfelt gratitude." path="/Sponsors" key="Sponsors" img="images/sponsors-card.png"></TeamsCard>
                </div>
            </div>
        </section>

    </React.Fragment>
  )
}

export default Volunteer
