import React from 'react'
import {CardHeading, PageHeading, AboutUsHeading, AboutUsSection, SectionHeading, OurTeamSubHeading} from '../styled/StyledHeading'
import { TextMedium, TextMediumPre } from '../styled/TextStyles';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";
import MemberInfoCard from "../MemberInfoCard"


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
                    <br/>
                    <br/>
                    <a key={"More Stories"} className="max-w-44 place-self-center bg-gray-900 text-white: text-gray-300 hover:bg-gray-700 hover:text-white, rounded-md px-3 py-2 text-sm font-medium" href='https://drive.google.com/drive/u/0/folders/0B1xpscMQ_Xb1MmpOUWZFcmNYbmc?resourcekey=0-1n64kJUJ8ciOgCW127AN9g'>
                        View the full story and more stories.
                    </a>
                </text>
            </AboutUsSection>

            <section className='container-flexbox justify-start'>
                <div className='mx-auto max-w-screen-2xl'>
                    <div className=' mx-auto m-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8 bg-blue-100'>
                        <SectionHeading className="font-semibold flex self-center justify-center">Our Team</SectionHeading>
                    </div>
                    
                    <OurTeamSubHeading className="font-semibold flex self-center justify-center">Executive Board</OurTeamSubHeading>
                    <div className='flex w-full rounded-3xl items-start justify-center max-w-screen-2xl flex-wrap'>
                        <MemberInfoCard name="Annette Lievaart" title="Director, Africa Lead" email="annette@rtwb.ca" location="Edmonton, Alberta" pic="images/annette-lievaart.jpg" quote="&quot;From October 2010-March 2011 I worked as a RT at Tenwek Mission hospital in Kenya. 
                                                                                                                                                                                            Getting there was a lot of work and through the process I often thought I wish there was an organization that would mobilize RT’s. 
                                                                                                                                                                                            What a great surprise a few months after I came back to Canada I discovered RTWB, and here I am. A little more about me I grew up on a farm in Southern Alberta where I learned the value of hard work, Christian charity and the value of family. 
                                                                                                                                                                                            I graduated from NAIT’s respiratory therapy program in 2008 and started working. After some experience working as an RT in Alberta, I had a yearning to do something more. 
                                                                                                                                                                                            As a child I always wanted to be a missionary, I found a way to combine my love of Respiratory and love of God by serving at Tenwek Hospital. I am currently preparing to return to Tenwek for 2 years starting in early 2013.&quot;"/>
                        <MemberInfoCard name="Clement Hui" title="Director of Deployments" email="clement@rtwb.ca" location="Toronto, Ontario" pic="images/clement-hui.jpg" quote="&quot;No one can do everything, but everyone can do something...those are certainly not my words, but is something I like to live by. When the chance came by to be part of RTWB, the opportunity was just too good to pass up. It is not everyday you get to impact the world doing something you like.&quot;" />
                        <MemberInfoCard name="Dan Elliot" title="Director of International Relations" email="dan.elliot@rtwb.ca" location="London, Ontario, Canada" pic="images/dan-elliot.jpg" desc="Dan, a Respiratory Therapist with 15 years of experience as a Paramedic and 20 years of first aid instruction, as well as several years of project management experience is excited to take on this new role. 
                                                                                                                                                                                            Dan brings with him, several years of involvement with other charities. As an advisor of a 4500 member first aid group and the president of an outdoor education and enablement organization for people with challenges, he is motivated, not discouraged by challenges, and seeks out opportunities to better the organizations he is involved with to help them grow whenever and wherever possible. 
                                                                                                                                                                                            Dan is looking forward to share his knowledge and help broaden the public and professional awareness of RTWB." />
                        <MemberInfoCard name="Eric Cheng" title="Director, Culture Creator"  email="eric@rtwb.ca" location="Port Moody, British Columbia" pic="images/eric-cheng.jpg" quote="&quot;I was blessed with parents that taught me to value life and the lives of people around me. 
                                                                                                                                                                                            Rooted in the Christian faith, I wrestled with the need to put my money where my faith was and took a 3month leave of absence to do some capacity building in neonatal/pediatric critical care in 2010. 
                                                                                                                                                                                            The need here is great; hence a return trip in 2011. Despite the challenges of working in a different culture and healthcare system, the joys of making a difference are unprecedented and truly life-giving. 
                                                                                                                                                                                            After sharing my developing world experiences, I was encouraged to find that fellow RTs around the world were just as keen in &quot;giving back&quot; through their profession. 
                                                                                                                                                                                            And so RTWB was birthed to provide RTs a way to give back to the global medical community.&quot;"/>
                        <MemberInfoCard name="Pauley Ting" title="Director of Organizational Strategy" email="TestEmail@mail.com" location="Toronto, Ontario" pic="images/pauley-ting.jpg" quote="&quot;Having spent most of my working career helping large-scale organizations with their corporate strategy and operational improvement initiatives, I was excited about the opportunity to help build up a not-for-profit organization with local roots and a focus on emerging markets abroad. 
                                                                                                                                                                                                I look forward to applying my consulting experience and MBA background to help RTWB get up and running and ensure that each dollar is used in a meaningful and sustainable manner.&quot;" />
                        
                    </div>
                    <div className=' mx-auto mt-10 max-w-screen-2xl pt-2 sm:pt-6 lg:pt-8'>
                        <OurTeamSubHeading className="font-semibold flex self-center justify-center">Advisors</OurTeamSubHeading>
                    </div>
                    <div className='flex w-full rounded-3xl items-start justify-center max-w-screen-2xl flex-wrap'>

                        <MemberInfoCard name="Les Matthews"  email="les.matthews@rtwb.ca" location="Kamloops, British Columbia" pic="images/les-matthews.jpg" desc="Les Matthews is an Associate Professor in the Faculty of Science teaching in the respiratory therapy program at Thompson Rivers University. 
                                                                                                                                                                    He has held the positions of Chairperson of the Canadian Board for Respiratory Care, Co-Editor of the Canadian Journal for Respiratory Therapy and President of the British Columbia Society of Respiratory Therapists. 
                                                                                                                                                                    He was the Respiratory Therapy Program clinical coordinator for 10 years from 1984 to 1993. He has 28 years experience as an educator and is presently teaching Human Assessment and neonatal, pediatric respiratory care at Thompson Rivers University in Kamloops. 
                                                                                                                                                                    Les is a published author in cardiopulmonary physiology and has lectured internationally on various topics in respiratory care. He established the Thompson Rivers University Sleep Clinic in 1998 and continues to be active as a clinician and researcher in the study of obstructive sleep apnea syndrome." 
                                                                                                                                                                quote="&quot;I believe Respiratory Therapists can contribute significantly to global health. I have had an opportunity to see the difference Respiratory Therapists can make when they work independently or with medical staff in remote and under privileged locations. The need for our skill set is apparent to anyone that looks closely at communities around the world both in urban and remote locations. It is for this reason I think RTWB is an important organization and has the potential for making a difference in peoples lives anywhere in the world.&quot;"/>
                        <MemberInfoCard name="Marilyn Hyndman" email="marilyn.hyndman@rtwb.ca" location="Toronto, Ontario" pic="images/marilyn-hyndman.jpg" desc="30 years neonatal RRT & 24 years neonatal respiratory educator at Sunnybrook. Taught and presented neonatal ventilation (invasive and non invasive) internationally over many years. 

                                                                                                                                                                NRP intructor trainer

                                                                                                                                                                STABLE instuctor

                                                                                                                                                                ORCS research and fellowship grants committee

                                                                                                                                                                Steering committee NRP Canada (CSRT representative)

                                                                                                                                                                NRP research subcommittee" />
                        <MemberInfoCard name="Mo Shariff" email="mo.shariff@rtwb.ca" pic="images/mo-shariff.png" quote="&quot;Mo graduated from Respiratory Therapy school in 1986. Two years later he ventured into Anesthesia and Respiratory medical equipment enterprise.  Mo started his own company, CAREstream Medical where he became CEO. After 20 years the company grew to employ close to a hundred people across North America. In 2014, Mo was the recipient of a life time achievement award at the Canadian Society of Respiratory Therapists (CSRT). In 2014, Mo needed to take time away to focus on health and well-being. Mo’s involvement in RTWB is his way of giving back to the community.&quot;" />
                        <MemberInfoCard name="Rob Bryan" email="rob.bryan@rtwb.ca" location="North York, Ontario" pic="images/no-pfp.jpg" desc="Rob Bryan is a licensed health care professional practicing in Anaesthesia Care, Adult and Neonatal Critical Care and Emergency Medicine. He is a staff Registered Respiratory Therapist and Anaesthesia Assistant at a community hospital in Richmond Hill, Ontario and a Paramedic with York Region Emergency Medical Services. He has extensive experience and current evidence based knowledge in anaesthetic care standards including clinical, technical and equipment standards, point of care lab testing, and air quality/OR pollution control quality assurance programming. 
                                                                                                                                                    He is also a member of the Canadian Standards Association Perioperative Technical Committee and the Canadian Advisory Committee to ISO/TC121 for Anaesthesia and Respiratory Equipment." />
                        <MemberInfoCard name="Wendy Castro" email="wendy.castro@rtwb.us" location="Texas, USA" pic="images/no-pfp.jpg"  />
                    </div>
                    
                </div>
            </section>

            
            <section>
                <div className="mx-auto max-w-screen-2xl items-center flex flex-col text-center">

                    <CardHeading>Our Mission</CardHeading>
                    <TextMedium>Improve respiratory health through educational advancement of local healthcare providers worldwide.</TextMedium>
                    <div className=' mx-auto m-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8 bg-blue-100'>

                        <CardHeading>Culture</CardHeading>
                        <TextMedium>RTWB/ISF is rooted in the skills, knowledge and expertise respiratory therapists have to offer the world. Together respiratory therapists from around the globe stand proudly as allied health professionals with a culture of giving back to the global community. 
                                    <br/><br/>
                                    RTWB/ISF is a collaborative project to educate and empower health care practitioners initiated by concerned Respiratory Therapists around the globe. The primary drive is you - the experts in airway, ventilatory and oxygen management. Respiratory therapy is at the infancy stage of our profession. 
                                    As such, the time is now to set precedence and establish ourselves in the global marketplace. This is our chance to advocate for our profession worldwide. Join us in sharing our skills/knowledge/expertise with a hungry world!
                        </TextMedium>
                    </div>
                    <CardHeading>Vision</CardHeading>
                    <TextMedium>Create a culture of 'giving back' synonymous with Respiratory Therapists.</TextMedium>
                </div>
            </section>
            <section>
                <div className="mx-auto max-w-screen-2xl items-center flex flex-col text-center">
                    <CardHeading>Our Values</CardHeading>
                    <div className=' mx-auto m-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8 bg-blue-100'>
                        <text className='text-3xl'>Compassion</text>
                        <TextMedium>
                            We emphasize CARE within healtcare.<br/><br/>
                            The respiratory therapists culture is one of giving back without any compensation - realising that there is no monetary equivalent for the life-saving services we are privileged to provide from the heart.
                        </TextMedium>
                    </div>
                    <text className='text-3xl'>Integrity</text>
                    <TextMedium>
                        We exercise skills, knowledge and judgement in critical situations to provide the best CARE for patients.<br/>
                        As we emphasis on sustainable developments through education, our representatives believe in teaching the proverbial art of fishing for locals instead of catching fish for them. 
                    </TextMedium>
                    <div className=' mx-auto m-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8 bg-blue-100'>
                        <text className='text-3xl'>Innovation</text>
                        <TextMedium>
                            Many of the deployment sites at RTWB/ISF will be severely resource limited and require creative juices, RTWB/ISF builds bridges with non-healthcare related partnerships to gain new perspectives and innovate custom solutions for local healthcare needs.
                        </TextMedium>
                    </div>
                </div>
            </section>
            
        </React.Fragment>
    )
}

export default AboutUs;