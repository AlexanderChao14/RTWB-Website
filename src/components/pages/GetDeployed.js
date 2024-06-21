import React from 'react'
import { PageHeading } from '../styled/StyledHeading'
import { CardHeading } from '../styled/StyledHeading'
import { TextMedium } from '../styled/TextStyles'
import { SectionHeading } from '../styled/StyledHeading'

const GetDeployed = () => {
  return (
    <>
        <div className="flex justify-center mx-auto m-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8">
            <PageHeading className=''>
                Volunteering and Deployment
            </PageHeading>
        </div>

        {/* Introduction Section */}
        <section className="container-flexbox justify-center">
            <div className="container-grid grid-cols-right mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 bg-blue-100 w-full">
                <div className="flex-item-dir-cols grid-item-center w-full h-full">
                    <CardHeading>Deployment</CardHeading>
                    <TextMedium>RTWB operates fundamentally with the help of our dedicated <a href="">volunteers.</a></TextMedium>
                    <TextMedium>Our Volunteers work tirelessly to make a positive impact on the respiratory therapist community, dedicating time to our cause. Without them, we would not be able to operate across the world as we are today.</TextMedium>
                    <TextMedium>If you are interesting in volunteering, check out our opportunities to get deployed.</TextMedium>
                </div>

                <div className="flex-item-dir-cols grid-item-center w-full h-full">
                    Picture here
                </div>
            </div>
        </section>

        {/* Application process section, with all relevant information. */}
        <section className="container-flexbox justify-start bg-slate-100">
            <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-start flex-col items-start py-4 px-5 w-full">
                    <div className="self-center text-center pb-10">
                        <SectionHeading className="font-semibold">Application Process</SectionHeading>
                    </div>
                    <TextMedium>The application process has 4 phases, all listed below.</TextMedium>

                    {/* Set of list items for Phase 1 */}
                    <TextMedium className="font-extrabold">Phase 1: Application</TextMedium>
                    <div>
                        <ul className="list-disc px-10">
                            <li>Review the Deployment Package <a href="" className="text-medium-link text-blue-600">here.</a></li>
                            <li>Review the Needs Assessments <a href="" className="text-medium-link text-blue-600">here</a> and find a suitable match for your skills.</li>
                            <li>Complete the application form <a href="" className="text-medium-link text-blue-600">here.</a></li>
                            <li>Sign the Waiver & Release of Liabilities document <a href="" className="text-medium-link text-blue-600">here.</a> Email the completed document with your resume/CV to our Director of Deployments at clement@rtwb.ca</li>
                            <li>Your application is complete. Expect to hear from the Deployment Coordinator within 2 weeks for further information. Suitable candidates will be offered an online interview within a month. Once you have received a response, move on to Phase 2.</li>
                        </ul>
                    </div>
                    
                    {/* Next set of list items for Phase 2 */}
                    <TextMedium className="font-extrabold pt-5">Phase 2: I've got an interview!</TextMedium>
                    <div>
                        <ul className="list-disc px-10">
                            <li>In preparation for the interview, download <a href="" className="text-medium-link text-blue-600">Google Hangouts.</a> This is mandatory.</li>
                            <li>Your interview will be conducted by two persons - one of which will be the Regional Representative who will be able to provide more culturally relevant information. Google Hangouts will be used to screen share photos/videos sothat you have a better idea of what you are potentially getting into.</li>
                            <li>Please feel free to come with questions, as this interview is also a chance for you to see if this is the right fit for you as a potential candidate.</li>
                        </ul>
                    </div>

                    {/* Next set of list items for Phase 3 */}
                    <TextMedium className="font-extrabold pt-5">Phase 3: I'm getting deployed!</TextMedium>
                    <div>
                        <ul className="list-disc px-10">
                            <li>It is your responsibility to establish travel logistics with the HEP. When you have finalized travel dates, notify the Deployment Coordinator. They will arrange for your medical coverage while abroad.</li>
                            <li>Confirm your medical coverage before you go. Continue to keep in touch with the Regional Representative if you have and questions or concerns throughout your preparation, departure and debriefing.</li>
                            <li>Please feel free to come with questions, as this interview is also a chance for you to see if this is the right fit for you as a potential candidate.</li>
                        </ul>
                    </div>

                    {/* Next set of list items for Phase 4. */}
                    <TextMedium className="font-extrabold pt-5">Phase 4: After Deployment</TextMedium>
                    <div>
                        <ul className="list-disc px-10">
                            <li>Please complete the Post Deployment Record <a href="" className="text-medium-link">here </a> (feedback survey) to help us improve our services for future deployments.</li>
                            <li>Inspire otheres by sharing your experience.</li>
                            <li>Lastly, go again!</li>
                        </ul>
                    </div>

                    <div className="pt-16">
                        <TextMedium>If you have any questions, please feel free to fire questions my way.</TextMedium>
                        <TextMedium>Clement Hui, Director of Deployments</TextMedium>
                        <TextMedium>clement@rtwb.ca</TextMedium>
                    </div>

                </div>
            </div>
        </section>


    </>
  )
}

export default GetDeployed
