import React from 'react'
import { PageHeading } from '../styled/StyledHeading'
import { CardHeading } from '../styled/StyledHeading'
import { TextMedium } from '../styled/TextStyles'

const Volunteer = () => {
  return (
    <React.Fragment>
        <div className="flex justify-center mx-auto m-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8">
            <PageHeading className=''>
                Volunteer With Us
            </PageHeading>
        </div>

        <section className="container-flexbox justify-center">
            <div className="container-grid grid-cols-left mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                <div className="flex-item-dir-cols grid-item-center w-11/12 h-full">
                    Picture here
                </div>

                <div className="flex-item-dir-cols grid-item-center w-11/12 h-full">
                    <CardHeading>Volunteering</CardHeading>
                    <TextMedium>RTWB operates fundamentally with the help of our dedicated volunteers and devoted staff.</TextMedium>
                    <p>Our Volunteers work tirelessly to make a positive impact on the respiratory therapist community, dedicating time to our cause. Without them, we would not be able to operate as large as we would today.</p>
                    <p></p>
                </div>
            </div>
        </section>

        <section className="container-flexbox justify-center">
            <div className="flex justify-center">
               <TextMedium>Explain more about getting deployed here</TextMedium>
            </div>
        </section>

    </React.Fragment>
  )
}

export default Volunteer
