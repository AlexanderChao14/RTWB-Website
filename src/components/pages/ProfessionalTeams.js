import React from 'react'
import PageTitle from '../PageTitle'
import { CardHeading } from '../styled/StyledHeading'
import { TextMedium, TextMediumLink } from '../styled/TextStyles'
import { SectionHeading } from '../styled/StyledHeading'
import { TextMediumBold } from '../styled/TextStyles'

const ProfessionalTeams = () => {
  return (
    <React.Fragment>

        <PageTitle title="Professional Teams"></PageTitle>

        <section className="container-flexbox justify-center">
            <div className="container-grid grid-cols-left mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                <div className="flex-item-dir-cols grid-item-center w-full h-full border-left shadow-full-br items-center">
                    <img src="images/org-map.jpg" className="card-image border-left"/>
                </div>

                <div className="flex-item-dir-cols grid-item-center w-full h-full border-br shadow-full-br">
                    <CardHeading>Professional Network and Organizational Team</CardHeading>
                    <TextMedium>RTWB's operations are run effectively by the help of our Organization Team and experts in the field.</TextMedium>
                    <TextMedium>If you are interested in showing your skills or lending your help with organizing our operations, take a look at our teams below.</TextMedium>
                </div>
            </div>
        </section>

        {/* Section describing the different teams and the application process. */}
        <section className="container-flexbox justify-start bg-slate-100">
            <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-start flex-col items-start py-4 w-full">
                    <div className="self-center text-center my-10 p-2 bg-blue-200 w-full">
                        <SectionHeading className="font-semibold">Professional Network</SectionHeading>
                    </div>
                    <TextMedium>As a charity, established and run on 100% volunteer efforts, your professional skills, knowledge and expertise or organizational support is the foundation to RTWB activities.</TextMedium>
                    
                    <div className="mt-8 w-full">
                        <TextMediumBold className="bg-blue-300">Option 1: Professionals</TextMediumBold>
                        <TextMedium>By joining the Professional Network, you receive free lifetime general membership and quarterly updates on RTWB activities. We encourage you to check the website frequently for different ways that you can get further involved. </TextMedium>
                        <TextMedium>Please watch the <TextMediumLink href="">RTWB Overview</TextMediumLink> and complete the Application for professionals.</TextMedium>
                    </div>

                    <div className="mt-8 w-full">
                        <TextMediumBold className="bg-blue-300">Option 2: Organizational Representatives</TextMediumBold>
                        <TextMedium>By joining the Professional Network, organizations receive recognition on our website and a certificate of support. Membership must be renewed annually with a donation of any sort.</TextMedium>
                        <TextMedium>Please watch the <TextMediumLink href="">RTWB Overview</TextMediumLink> and complete the applicable form.</TextMedium>
                        <TextMedium>Application for first time organizations <TextMediumLink href="">here.</TextMediumLink></TextMedium>
                        <TextMedium>Application for organizations looking to renew their application <TextMediumLink href="">here.</TextMediumLink></TextMedium>
                    </div>

                    <div className="mt-8 w-full">
                        <TextMedium>I look forward to welcoming you to the Professional Network soon! Feel free to email me with any comments, suggestions or feedback.</TextMedium>
                        <TextMedium>Mike Iwanow</TextMedium>
                        <TextMedium>mike.iwanow@rtwb.ca</TextMedium>
                        <TextMedium>Director of Volunteer Relations</TextMedium>
                    </div>


                    <div className="self-center text-center my-10 p-2 bg-blue-200 w-full mt-16">
                        <SectionHeading className="font-semibold">Organizational Team</SectionHeading>
                    </div>

                    <TextMedium>Respiratory Therapists Without Borders is an entirely volunteer run organization. We are always open to new ideas and ways that Respiratory Therapists would like to 'give back' to the global community. </TextMedium>
                    <TextMedium>Positions are open to members of the Professional Network or those who are affiliated with a respiratory care group within the Professional Network. If you're not yet part of the Professional Network, check that out first.</TextMedium>
                    <TextMedium>If you're already plugged into the RTWB family and interested in digging deeper roots, take a look at the vacancies marked with red/orange flags. Feel free to make suggestions or applications to ideas@rtwb.ca</TextMedium>
                    <TextMediumBold>You can view the RTWB/ISF Organization Map <TextMediumLink href="http://www.mindmeister.com/303955624/respiratory-therapists-without-borders">Here.</TextMediumLink></TextMediumBold>


                </div>
            </div>
        </section>

    </React.Fragment>
  )
}

export default ProfessionalTeams
