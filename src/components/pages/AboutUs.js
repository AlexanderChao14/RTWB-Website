import React from 'react'
import {CardHeading, PageHeading, AboutUsHeading, AboutUsSection, StyledHeading} from '../styled/StyledHeading'
import { TextMedium } from '../styled/TextStyles';
import { motion } from 'framer-motion';
import { useState } from "react";


const AboutUs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEric, setIsOpenEric] = useState(false);

    return (
        <React.Fragment>
            <div className='flex justify-center mx-auto m-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8 bg-blue-100'>
                <PageHeading>
                    About RTWB
                </PageHeading>
            </div>
            <AboutUsSection className='mx-auto m-10 max-w-screen-2xl flex-col'>
                <AboutUsHeading>Our Story</AboutUsHeading>
                <text>
                    The Respiratory Therapy profession finds its roots in people interested in CARING for their patients. 
                    This can be seen in how the Respiratory Therapy Profession was birthed. 
                    Originally, respiratory therapists were a group of 'tank jockeys’- transporting oxygen cylinders to places in need.  
                    Respiratory therapists wanted to learn and do more for their patients so they became inhalation therapists who then spread a contagious vision of being able to assist more people better manage their respiratory condition.
                    <br/>
                    <br/>
                    As one who grew up with asthma, I was a regular visitor to the "puffer parlor" where respiratory therapists have saved my life many times over. So much that they gave me an air compressor to take home. (This air compressor was donated to a hospital in Tequisquiapan, Queretaro, Mexico where my sister lives.) 
                    It was fate that would have me train to be a respiratory therapist.
                    <br/>
                    <br/>
                    In 2007, I traveled to Nepal as a student respiratory therapist to learn about their healthcare system. I was shocked and devastated by what I saw. 
                    (e.g. the standard of care at the only government pediatric hospitals did not include any sedation for burn dressing changes). 
                    I returned keen to qualify myself as an anesthesia assistant and return to help facilitate change where suffering could be minimized.  I then learned from physicians that while anesthesia is needed, the greater need was for respiratory therapy education. 
                    <br/>
                    <br/>
                    In 2010, I made a return trip to Nepal with&nbsp;
                    
                    {/* TODO need to check broken link */}
                    <a href='' className='underline underline-offset-1 text-blue-600 font-medium'>
                        Bringing About Better Understanding (BABU)
                    </a>
                    , a registered Canadian charity with a mission to improve child health care. 
                    I was invited to speak on CPAP therapy for neonates at the Nepal Pediatric Society biennial conference. 
                    The talk was very well received and before the end of the 2.5month trip, 4 hospitals had primitive CPAP setups from unused spare parts from collected from Canadian hospitals. 
                    They were used effectively at the hospitals and I came back considered a hero. The&nbsp; 
                    
                    <a href="https://www.rtso.ca/" className='underline underline-offset-1 text-blue-600 font-medium'>
                        Respiratory Therapy Society of Ontario (RTSO) 
                    </a>
                    
                    &nbsp;gave me an award and invited me to share at the Inspire Educational Forum banquet. 
                    It was then that Rob Bryan and Mike Keim along with several other RTSO members encouraged me to launch a charity for our profession.
                    <br/>
                    <br/>
                    As time lapsed, communications with the hospitals in Nepal waned and the successful reports of CPAP therapy saving lives stopped. 
                    A return trip to Nepal in 2011 would reveal that each CPAP program had fallen apart. 
                    Despite valiant efforts by local healthcare professionals, each of the hospitals needed to give up due to a lack of human resources and supportive infrastructure. 
                    (Electricity and oxygen are not a constant given in these places that see scores of people daily.) 
                    This underscored the need for respiratory therapists worldwide, people who understand bottom lines and can improvise and innovate. 
                    <br/>
                    <br/>
                    Respiratory therapists Annette Lievarrt, Clement Hui, Shona Anderson-Wong and business strategist Pauley Ting stepped up to cast a vision and mission statement for Respiratory Therapists Without Borders. 
                    The team was later joined by Mo Shariff, Arpita Bhattacharya, Wendy Castro and Mike Iwanow. 
                    During this time, seasoned and respected respiratory therapists Les Matthews, Marilyn Hyndman and Rob Bryan advised. 
                    <br/>
                    <br/>
                    RTWB continues to grow. Our vision is to create a culture of respiratory therapy synonymous with 'giving back'. 
                    Just like the respiratory therapy profession, RTWB finds its roots in people filled with compassion for others, work with integrity and innovate to work smarter. 
                    We believe in hard work, but more importantly working smart and strategically to bring about sustainable change to improve respiratory health through educational advancement of local healthcare providers worldwide.
                    <br/>
                    <br/>
                    I'd like to thank each of&nbsp; 

                    {/* TODO either add a volunteer page or remove this link */}
                    <a href="" className='underline underline-offset-1 text-blue-600 font-medium'>
                        our volunteers
                    </a>
                    &nbsp;in the global RTWB Professional Network and generous&nbsp; 

                     {/* TODO redirect to the sponsors page after sponsors page is made */}
                    <a className='underline underline-offset-1 text-blue-600 font-medium'>
                        sponsors 
                    </a>
                    &nbsp;for making RTWB possible. 
                    <br/>
                    <br/>
                    Peace,
                    <br/>
                    <br/>
                    Eric Cheng
                    <br/>
                    Co-Founder & Culture Creator
                </text>
                <a key={"More Stories"} className="max-w-44 place-self-center bg-gray-900 text-white: text-gray-300 hover:bg-gray-700 hover:text-white, rounded-md px-3 py-2 text-sm font-medium" href='https://drive.google.com/drive/u/0/folders/0B1xpscMQ_Xb1MmpOUWZFcmNYbmc?resourcekey=0-1n64kJUJ8ciOgCW127AN9g'>
                    View the full story and more stories.
                </a>
            </AboutUsSection>
            <section>
                <div className='flex flex-col items-center'>
                    <CardHeading>Our Team</CardHeading>
                    <motion.img layout initial={{borderRadius:50}} data-isOpen={isOpenEric} onClick={() => setIsOpenEric(!isOpenEric)} className='team-member-card' src="images/eric-cheng.jpg">
                    </motion.img>
                    <motion.img layout initial={{borderRadius:50}} data-isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} className='team-member-card' src="images/get-involved-photo.jpg">
                    </motion.img>
                </div>
            </section>
            <section className='flex flex-col items-center'>
                <CardHeading>Our Mission</CardHeading>
                <TextMedium>Improve respiratory health through educational advancement of local healthcare providers worldwide.</TextMedium>
                <CardHeading>Culture</CardHeading>
                <CardHeading>Vision</CardHeading>
                <TextMedium>Create a culture of 'giving back' synonymous with Respiratory Therapists.</TextMedium>
                <CardHeading>Our Values</CardHeading>
                <text className='text-3xl'>Compassion</text>
                <TextMedium>
                    We emphasize CARE within healtcare.<br/>
                    The respiratory therapists culture is one of giving back without any compensation - realising that there is no monetary equivalent for the life-saving services we are privileged to provide from the heart.
                </TextMedium>
                <text className='text-3xl'>Integrity</text>
                <TextMedium>
                    We exercise skills, knowledge and judgement in critical situations to provide the best CARE for patients.<br/>
                    As we emphasis on sustainable developments through education, our representatives believe in teaching the proverbial art of fishing for locals instead of catching fish for them. 
                </TextMedium>
                <text className='text-3xl'>Innovation</text>
                <TextMedium className='text-red-700'>
                    Many of the deployment sites at RTWB/ISF will be severely resource limited and require creative juices, RTWB/ISF builds bridges with non-healthcare related partnerships to gain new perspectives and innovate custom solutions for local healthcare needs.
                </TextMedium>
                <TextMedium>
                    
                </TextMedium>
            </section>
            
        </React.Fragment>
    )
}

export default AboutUs;