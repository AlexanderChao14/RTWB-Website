import React from 'react'
import { PageHeading, SectionHeading } from '../styled/StyledHeading'
import { CardHeading } from '../styled/StyledHeading'
import { TextMedium } from '../styled/TextStyles'
import InfoCard from '../InfoCard'

const Volunteer = () => {
  return (
    <React.Fragment>
        <div className="flex justify-center mx-auto m-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8">
            <PageHeading className=''>
                Get Involved
            </PageHeading>
        </div>

        <section className="container-flexbox justify-center">
            <div className="container-grid grid-cols-left mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 bg-blue-100">
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

        <section className="container-flexbox justify-start sectioncolor-dark">
            <div className="bg-blue-100 mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-start flex-col items-start py-4 px-5 w-full bg-red-200 rounded-3xl">
                    <div>
                        <SectionHeading className="font-semibold">Volunteering and Deployment</SectionHeading>
                    </div>
                    <TextMedium>RTWB operates fundamentally with the help of our dedicated <a href="">volunteers</a></TextMedium>
                    <TextMedium>Our Volunteers work tirelessly to make a positive impact on the respiratory therapist community, dedicating time to our cause. Without them, we would not be able to operate across the world as we are today.</TextMedium>
                    <TextMedium>All of our volunteer postings are below. If you are interested, please follow the steps below.</TextMedium>
                    <div>
                        <ul className="list-disc px-10">
                            <li>Magna veniam non incididunt labore fugiat ipsum velit exercitation.</li>
                            <li>Ea nostrud nulla ex et labore proident voluptate dolor dolore sunt in Lorem.</li>
                            <li>Irure aliquip elit ex ad duis.</li>
                            <li>Duis ex Lorem cillum occaecat esse magna laborum consectetur adipisicing.</li>
                            <li>Veniam labore aliquip aute deserunt voluptate id pariatur in dolore minim exercitation culpa veniam.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="container=flexbox justify-start sectioncolor-dark">
            <div className="bg-blue-100 mx-auto my-2 max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-start flex-col items-start py-4 px-5 w-full bg-green-300 rounded-3xl">
                    <div>
                        <SectionHeading className="font-semibold">Healthcare Education Partners</SectionHeading>
                    </div>
                    <TextMedium>RTWB operates fundamentally with the help of our dedicated volunteers and devoted staff.</TextMedium>
                    <TextMedium>Our Volunteers work tirelessly to make a positive impact on the respiratory therapist community, dedicating time to our cause. Without them, we would not be able to operate across the world as we are today.</TextMedium>
                </div>
            </div>
        </section>

        <section className="container-flexbox justify-start">
            <div className="bg-blue-100 mx-auto my-2 max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-start flex-col items-start py-4 px-5 w-full bg-orange-200 rounded-3xl">
                    <div>
                        <SectionHeading className="font-semibold">Join our board</SectionHeading>
                    </div>
                    <TextMedium>We're at an exciting time of development (ie. nothing is set in stone). If you are interested in influencing how this RT pandemic takes place, consider joining our board!</TextMedium>
                    <TextMedium>Our board positions include:</TextMedium>
                    <div>
                        <ul className="list-disc px-10">
                            <li>Magna veniam non incididunt labore fugiat ipsum velit exercitation.</li>
                            <li>Ea nostrud nulla ex et labore proident voluptate dolor dolore sunt in Lorem.</li>
                            <li>Irure aliquip elit ex ad duis.</li>
                            <li>Duis ex Lorem cillum occaecat esse magna laborum consectetur adipisicing.</li>
                            <li>Veniam labore aliquip aute deserunt voluptate id pariatur in dolore minim exercitation culpa veniam.</li>
                        </ul>
                    </div>
                    <TextMedium className="py-3">Please email our director Eric Cheng at eric@rtwb.ca in regards to joining our board.</TextMedium>
                </div>
            </div>
        </section>

        {/* Our Teams Section */}
        <section className="container-flexbox justify-start">
            <div className=" bg-blue-100 mx-auto my-2 max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-start flex-col items-start py-4 px-5 w-full bg-purple-300 rounded-3xl">
                    <div>
                        <SectionHeading className="font-semibold">Our Teams</SectionHeading>
                    </div>
                    <TextMedium>We have several teams that help with operations and enable us to handle business properly.</TextMedium>
                    <TextMedium>Check out our teams below in more detail.</TextMedium>
                    <div className=" teamsGrid container-grid justify-evenly items-center bg-red-600 w-full rounded-3xl">
                        {/* <div className="max-w-sm min-w-64 w-full m-5 bg-blue-400 h-4/5"> Item 1</div>
                        <div className="max-w-sm min-w-64 w-full m-5 bg-blue-500 h-4/5"> Item 2</div> */}
                        <InfoCard title="Organizational Team" desc="Our organizational team helps establish new ideas to help us further with our operations."></InfoCard>
                        <InfoCard title="Professional Network" desc="Have skills or expertise you can share with us? Join our professional network!"></InfoCard>
                    </div>
                </div>
            </div>
        </section>

        <section className="container-flexbox justify-start items-center sectioncolor-dark">
            <div className="bg-blue-100 mx-auto my-2 max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-start flex-col items-start py-4 px-5 w-full bg-cyan-300 rounded-3xl">
                    <div>
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
