import React from 'react'
import { PageHeading } from '../styled/StyledHeading'
import { CardHeading} from '../styled/StyledHeading'
import { TextMedium, TextMediumBold } from '../styled/TextStyles'
import { SectionHeading } from '../styled/StyledHeading'
import TableCell from '../TableCell'
import PageTitle from '../PageTitle'

const director = ["Hello", "Hello2", "Hello3"];

const Board = () => {
  return (
    <React.Fragment> 
        {/* <div className="flex justify-center mx-auto m-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8 bg-blue-100">
            <PageHeading className="">
                Our Board
            </PageHeading>
        </div> */}

        <PageTitle title="Our Board"></PageTitle>

        <section className="container-flexbox justify-center">
            <div className="container-grid grid-cols-right mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 bg-blue-100 w-full">
                <div className="flex-item-dir-cols grid-item-center w-full h-full">
                    <CardHeading>Board Committee</CardHeading>
                    <TextMedium>Our Board Committee helps handle and facilitate a lot of our development planning and future operations. They are a driving factor for our charity.</TextMedium>
                    <TextMedium>We're at an exciting time of development (i.e. othing is set in stone). If you are interested in influencing how this RT pandemic takes place, consider joining our board!</TextMedium>
                </div>

                <div className="flex-item-dir-cols grid-item-center w-full h-full">
                    Picture here
                </div>
            </div>
        </section>

        <section className="container-flexbox justify-start bg-slate-100">
            <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-start flex-col items-start py-4 w-full">
                    
                    <div className="self-center text-center pb-10 w-full">
                        <SectionHeading className="font-semibold bg-blue-200 w-full">Join our Board</SectionHeading>
                    </div>

                    <TextMediumBold>Please read through all of the available positions:</TextMediumBold>
                    
                    <div className="w-full bg-blue-200 boardGrid mt-5">

                        {/* Header for the table */}
                        <div className="h-full w-full bg-blue-500 text-center font-bold p-5">Position Name</div>
                        <div className="h-full w-full bg-blue-500 text-center font-bold p-5">Position Duties</div>

                        {/* Below are is all the content arranged into individual table cells per row. */}
                        <TableCell text="Communications" listItems={["Coordinate all external communications (e.g. web content, quarterly newspaper, PR)." , "Campaign for RTWB Banner/logo." , "Manage quarterly newsletter." , "Organize promotional activities." , "The Successful candidate is articulate, and will be able to organize/convey information updates in an engaging manner."]}></TableCell>
                        <TableCell text="Director" listItems={["Provide direction and vision for RTWB." , "Empower other board members" , "Organize annual board retreat" , "Ensure that the RTWB goals are met." , "Liason with other Respiratory Therapist societies."]}></TableCell>
                        <TableCell text="Donation Distribution" listItems={["Develop relations with hospital liasons for collection of unused supplies, functional equipment, etc." , "Create a collections system and site for donations." , "Coordinate distribution, shipping and tracking of equipment from collection site to end user." , "Build an auditing system utilizing contacts to ensure that all donated equipment is traceable and is in service."]}></TableCell>
                        <TableCell text="Knowledge Share" listItems={["Coordinate team of health care professions to develop nationally recognized professional practise guidelines." , "Coordinate education program development teams to engage, stimulate and empower learners to reach new levels" , "Establish a rigorous and diverse reviewing process scheme." , "Liason with other RT research groups and educational groups."]}></TableCell>                        
                        <TableCell text="Secretary" listItems={["Ensure good standing with Canada Revenue Agency" , "Liason with donor recipient hospitals around the globe." , "Ensure upto date country profiles for communications person." , "Liason with other RT and/or charitable organizations."]}></TableCell>
                        <TableCell text="Treasurer" listItems={["Develop and maintain an accounting program/schedule." , "Ensure accounting procedures according to CRA standards" , "Manage fundraising projects/events." , "Organize and recruit professional fundraisers." ]}></TableCell>
                        <TableCell text="Volunteer Relations" listItems={["Recruit, maintain and retain an expert volunteer base." , "Liason between the volunteer base and committee." , "Organize volunteer appreciation events." , "Creatively put every eager RT to work."]}></TableCell>
                        <TableCell text="Board Member" listItems={["Update tasklist online." , "Provide quarterly updates on project developments" , "Attend annual board development retreat." , "Continually brainstorm and collect new ideas to implement."]}></TableCell>

                    </div>
                    
                    <div>
                        <TextMedium className="pt-10">If there is a position that interests you, email Eric Cheng at eric@rtwb.ca in regards to joining our board. Please include the position(s) you are applying to in your email. You will be contacted shortly for further instructions.</TextMedium>
                    </div>

                </div>
            </div>
        </section>

    </React.Fragment>


  )
}

export default Board
