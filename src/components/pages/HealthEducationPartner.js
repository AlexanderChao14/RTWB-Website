import React from 'react'
import { PageHeading } from '../styled/StyledHeading'
import { TextMedium, TextMediumBold } from '../styled/TextStyles'
import { CardHeading } from '../styled/StyledHeading'
import { SectionHeading } from '../styled/StyledHeading'

const HealthEducationPartner = () => {
  return (
    <React.Fragment>
        <div className="flex justify-center mx-auto m-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8 bg-blue-100">
            <PageHeading className=''>
                Healthcare Education Partners
            </PageHeading>
        </div>

        {/* Introduction Section */}
        <section className="container-flexbox justify-center">
            <div className="container-grid grid-cols-right mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 bg-blue-100 w-full">
                <div className="flex-item-dir-cols grid-item-center w-full h-full">
                    <CardHeading>HEP - Healthcare Education Partners</CardHeading>
                    <TextMedium>RTWB/ISF works exclusively with Healthcare Education Partner (HEP) sites. This is to ensure that thre is a respiratory need that RTWB/ISF can address with a deployment.</TextMedium>
                    <TextMedium>If you are interested in becoming a Healthcare Education Partner, please follow the steps below.</TextMedium>
                </div>

                <div className="flex-item-dir-cols grid-item-center w-full h-full">
                    Picture here
                </div>
            </div>
        </section>

        <section className="container-flexbox justify-start bg-slate-100">
            <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-start flex-col items-start py-4 w-full">
                    <div className="self-center text-center my-10 p-2 bg-blue-200 w-full">
                        <SectionHeading className="font-semibold">Become a Healthcare Education Partner</SectionHeading>
                    </div>

                    <TextMediumBold className="">If you are a representative of a healthcare centre looking for a respiratory therapist, please complete sections 1-4 of the HEP Needs Assessment.</TextMediumBold>                
                    <TextMediumBold className="">If you are a respiratory therapist travelling abroad, you are a key player to complete the HEP Needs Assessment.</TextMediumBold>

                    <TextMediumBold className="pt-5">Required Application Forms:</TextMediumBold>
                    <div>
                        <ul className="list-disc px-10">
                            <li><a href="" className="text-medium-link text-blue-600">Needs Assessment Form (English)</a></li>
                            <li><a href="" className="text-medium-link text-blue-600">Needs Assessment Form (Français)</a></li>
                            <li><a href="" className="text-medium-link text-blue-600">HEP Written Agreement Form</a></li>
                        </ul>
                    </div>
                    

                    <TextMediumBold className="pt-10">HEP Applicant Criteria</TextMediumBold>
                    <div>
                        <ul className="list-disc px-10">
                            <li>Applicants must be a registered healthcare facility with the local government.</li>
                            <li>Applicants must be a functional healthcare facility in a good standing with the public.</li>
                            <li>Applicants must facilities with access to a fresh and clean water supply.</li>
                            <li>Applicants must have an indentified need for a respiratory therapist through the Needs Assessment.</li>
                            <li>Applicants must have completed the HEP Written Agreement.</li>
                        </ul>
                    </div>

                    <TextMediumBold className="pt-10">HEP Intake Process (3 Easy Steps)</TextMediumBold>
                    <div>
                        <ul className="list-disc px-10">
                            <li>Complete sections 1-4 of the HEP Needs Assessment form and email it to the Director of International Relations at dan.elliot@rtwb.ca</li>
                            <li>The Director of HEP Relations will complete Sections 5-6 and the HEP Written Agreement together with you.</li>
                            <li>The completed Needs Asssessment will be processed by the Board of Directors within a month.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
        

    </React.Fragment>
  )
}

export default HealthEducationPartner
