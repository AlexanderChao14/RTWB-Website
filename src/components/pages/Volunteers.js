import React from 'react'
import { PageHeading } from '../styled/StyledHeading';
import VolunteerInfoCard from '../VolunteerInfoCard';
import { OurTeamSubHeading } from '../styled/StyledHeading';

const Volunteers = () =>{

    return(
        <React.Fragment>
            <div className='flex justify-center mx-auto m-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8 bg-blue-100 intro-card rounded-s-3xl rounded-br-3xl shadow-br'>
                <PageHeading>
                    Our Volunteers
                </PageHeading>
            </div>
            <section className='container-flexbox justify-start'>
                <div className='flex w-full rounded-3xl items-start justify-center mx-auto max-w-screen-2xl flex-wrap'>
                    <VolunteerInfoCard name="Archna Mathur" title="Equipment Donations Coordinator" pic="images/archna-mathur.jpg" location="Nanaimo, British Columbia, Canada" startDate="January 2016" 
                                    message="Hi, I’m Archna, I am a respiratory therapist who graduated from Thompson Rivers University in 2014. Currently I am living in Nanaimo, BC, with my pup Luna. I have lived in every province growing up. I love music and I do write my own songs and sing as well. In my spare time I like to go for hikes, caving, finding new secluded camping spots and spinning fire poi." 
                                    message2="The reason I wanted to become involved with RT's without borders was to make a positive difference throughout the world. I want to share my knowledge and collaborate ideas through which I expect to learn a lot more about how an RRT can help."/>
                    <VolunteerInfoCard name="Tom Wannop" title="Conestoga College Student Representative" pic="images/tom-wannop.jpg" location="Waterloo, Ontario, Canada" startDate="November 2015" 
                                    message="Hello, I am currently in 2nd year Respiratory Therapy at Conestoga. I have been blessed to have gone to both Guatemala and Belize on short-term missions trips in the past and wanted to continue to find ways to reach out to others in the future. At Conestoga College I have been happy to provide my stories and share experiences with fellow students who are interested in missions, and Respiratory Therapists Without Borders." 
                                    message2="RTWB is operated by many volunteers who are passionate about caring, hard work, and adventures. It has been encouraging to collaborate with RTs who are so willing to take on new challenges for the sake of others. My favourite experience so far, with RTWB, has been participating in fundraising events at the College. It is great to be a part of the team!"
                    />
                    <VolunteerInfoCard name="Ramiza Kokub" title="Onboarding Coordinator" pic="images/ramiza-kokub.png" location="Toronto, Ontario, Canada" startDate="November 2015" 
                                    message="My name is Ramiza Kokub, and I have recently (2015) graduated with Honours Bachelor of Life Science Degree from McMaster University. I am currently enrolled in 1st year Respiratory Therapy program at The Michener Institute for Applied Health Sciences. Being grown up in a small town I saw the importance of outreaching in the community, thus throughout my high school and undergraduate years I have been volunteering at the Cambridge Memorial Hospital, Queen Victoria Elementary School and McMaster Student Success Center. Upon joining The Michener Institute I heard a lot of incredible stories about RTWB and their hard work towards the community. By joining the RTWB team I believe I will not only get the amazing opportunity to enhance my leadership and healthcare skills but I will also be provided with the chance of giving back to my community. - ramiza.kokub@rtwb.ca" 
                    />
                    <VolunteerInfoCard name="Mira Tusha" title="Deployment Team" pic="images/mira-tusha.jpg" location=" Toronto, Ontario, Canada" startDate="September 2015" 
                                    message="I am a Student Respiratory Therapist currently doing my clinical placement in Toronto. Over the past two years while studying at The Michener Institute I loved hearing stories about passionate and innovative respiratory therapists utilizing their skills in challenging situations. The work that RTWB does is a great example of that. I believe respiratory therapists have a lot to offer to improve the care patients receive around the world. As a young professional I look forward to helping make good quality health care globally accessible while advocating for our profession. - mira.tusha@rtwb.ca"
                    />
                    <VolunteerInfoCard name="Taylor Driscoll" title="Deployment Team" pic="images/taylor-driscoll.jpg" location="Toronto, Ontario, Canada" startDate="September 2015" 
                                    message="I am currently a 3rd year Student Respiratory Therapist at The Michener Institute, completing my clinical placement in Toronto. Before coming to Michener I studied life science at McMaster University. During the school year I work part-time as a respiratory technician and a swimming instructor. For as long as I can remember I have always had passions for healthcare, volunteering and travel. During previous trips to southern Africa and South America, I was able to personally witness healthcare systems in developing countries. Those experiences really opened my eyes to many of the gaps that need to be filled in order to provide better medical care in the developing world. I believe respiratory therapists have the skills and expertise required to help close these gaps and improve healthcare worldwide. Working with RTWB I have the opportunity to give back to these amazing communities in a sustainable way and advocate for the profession of respiratory therapy all at once - I can't imagine anything more rewarding. - taylor.driscoll@rtwb.ca" 
                    />
                </div>
            </section>
            <OurTeamSubHeading className="font-semibold flex self-center justify-center">Seasoned Volunteers (Thanks for your continued service!)</OurTeamSubHeading>
            <section className='container-flexbox justify-start'>
                <div className='flex w-full rounded-3xl items-start justify-center mx-auto max-w-screen-2xl flex-wrap'>
                    <VolunteerInfoCard name="Amanda Rampersaud" title="Social Media Coordinator" pic="images/amanda-rampersaud.jpg" location="Ontario, Canada" startDate="April 2015" 
                                    message="My name is Amanda Rampersaud, and I am currently enrolled at the Michener Institute for Applied Health Sciences studying Respiratory Therapy, having just completed my first year. Prior to this, I received my Bachelors of Science at the University of Waterloo. At this time, I am working as a Respiratory Technician at The Hospital for Sick Children. My passion, is and has always been charity and a love for the greater good. I am an advocate of mental health awareness, and am now so excited to be joining the Respiratory Therapists without Borders team! Looking forward to spreading the word about this initiative, and educating the public about all the amazing work RTWB has accomplished via social media.  - amanda.rampersaud@rtwb.ca " 
                    />
                    <VolunteerInfoCard name="Candy Law" title="Fundraising Coordinator" pic="images/candy-law.jpg" location="Ontario, Canada" startDate="April 2015" 
                                    message="“I have been working as an RRT in acute care facilities since 2010.  I have always wanted to be involved with a charitable organization that is aligned with my passion for giving back, whileallowing me to make effective use of my expertise and knowledge in respiratory care. Thank you RTWB! As a fundraiser coordinator, I look forward to help raise awareness of RTWB’s causesand all the hard work that we do globally.”  - candy.law@rtwb.ca" 
                                    message2="I graduated from the Respiratory Therapy program at Thompson Rivers University in 2011. I have worked in three different hospitals across Western Canada, most recently specializing at BC Children's Hospital with our Pediatric Home Tracheostomy and Ventilation Program. I love learning and teaching and the fact that our profession allows us to help others. Travelling the world with my husband (who is also a RT) has opened my eyes to the struggles that others have getting access to medical care and expertise."
                                    />
                    <VolunteerInfoCard name="Alisha Nelson" title="BCSRT Conference Representative" pic="images/alisha-nelson.jpg" location="Vancouver, BC, Canada" startDate="March 2015" 
                                    message="RTWB was an organization that I was drawn to right away for the simple fact that what they do is sustainable. Helping our partners in healthcare near and far and educating them to take care of their communities inspires me!"
                    />
                    <VolunteerInfoCard name="Vilija Seselja" title="Healthcare Education Partner Liaison (International Friendship Children's Hospital)" pic="images/vilija-seselija.jpg" location="Oakville, Ontario, Canada" startDate="February 2015" 
                                    message="Hello! As a Respiratory Therapist who has been previously involved with RTWB, and who is passionate about the field, I am eager to join this new professional network working towards improving worldwide respiratory health and education."
                    />
                    <VolunteerInfoCard name="Annika Janssens" title="Healthcare Education Partner Liaison (Patan Hospital, Kathmandu, Nepal)" pic="images/annika-janssens.jpg" location="Langley, British Columbia, Canada" startDate="September 2014" 
                                    message="I have been an RRT for a long time mostly in critical care but also in lung health education and in homecare sleep disorders therapy.  I have always felt I was helping people, in this case patients.  When I got the opportunity to teach the doctors and nurses of Patan Hospital how to use CPAP and a few months later, BIPAP to treat ailments that often patients died of until this time, the feeling was incredible.  I was so humbled by the difference in my world compared to theirs and this experience has opened my eyes to the need for our help around the world to places less priviledged than ours.  It has also motivated me to continue to help at RTWB however I am able because I truly believe they are doing an incredible amount of good! - annika.janssens@rtwb.ca "
                    />
                    <VolunteerInfoCard name="Mike Yung" title="Operational Standards Manager" pic="images/mike-yung.jpg" location="Markham, Ontario, Canada" startDate="August 2013" 
                                    message="“Hi, I'm Mike. I am a officer in the Canadian Army. I joined because I wanted to help the most vulnerable. I would like to be part of RTWB because I want to support the work it does in providing, teaching and sustaining this life saving skill, knowledge and care to those who really need it.“ - mike.yung@rtwb.ca"
                    />
                    <VolunteerInfoCard name="Sarah Ng" title="Finance Team - Accountant" pic="images/no-pfp.jpg" startDate="August 2013" 
                                    message="“I was a friendly visitor for seniors for 6-7 years, I like volunteering. Currently, I am working in a retail apparel company as a financial analyst. I like RTWB’s Mission and Vision, and would like to support.“ - sarah.ng@rtwb.ca"
                    />
                    <VolunteerInfoCard name="Genevieve Fortin" title="French Translator" pic="images/no-pfp.jpg" location="Vancouver, British Columbia, Canada" startDate="February 2013" 
                                    message="“Since i was a child, i've always wanted to volunteer and being a health care professional.  This dream of volunteering have always been in my mind until the day that i decided that my dream needed to come true.  3 years ago, i went to Nepal by myself with the firm intention of volunteering in an hospital.  My 12 yrs of experience as an RT helped me to quickly asssess the need of the Kantipur Hospital and helped them to improve PFTs testing and diagnosing COPDier.  I felt in love with Nepal and volunteering. It is my goal to go help again.  I feel like i share the same vision and values than RTWB and it inspires me to go foward in the dream of helping others.“ - genevieve.fortin@rtwb.ca"
                    />
                    <VolunteerInfoCard name="Mike Iwanow" pic="images/no-pfp.jpg" location="Toronto, Ontario"
                                    message="“I have been a Registered Respiratory Therapist since 1992 and have worked primarily in the hospital setting for more than 20 years. Currently, I am a Supervisor for Inter-professional Practice at a Toronto community teaching hospital. I have volunteered locally and have always had a passion to continue this in a more global and meaningful way. In essence, to give back to those less fortunate as it relates to local innovative healthcare opportunities.“"
                    />
                    <VolunteerInfoCard name="Arpita Bhattacharya" title="Infection Prevention and Control Consultant" pic="images/no-pfp.jpg" location="Toronto, Ontario, Canada"
                                    message="“I am a Registered Respiratory Therapist (RRT) who has been involved in the acute care hospital setting for the past 10 yrs.  Recently I have made a career shift as an RRT in the field of Infection Prevention and Control.  Respiratory Therapists Without Borders (RTWB) is an exciting way to advocate for our profession while helping those in need. It is an honour to be part of this organization, and I look forward to helping RTWB grow and develop further across the globe.“"
                    />
                    <VolunteerInfoCard name="Kayla Manuel" title="Country Lead " pic="images/no-pfp.jpg"
                                    message="Hola! My name is Kayla and I have been an RT for the last five years. I started my career in Edmonton at the Royal Alexandra Hospital and for the last year and a half have been working in Vancouver at Vancouver General. I'm excited to become a part of the RTWB team. Volunteering has been a key interest of mine since my early days as a Girl Guide (nerd alert!) and travelling has always been a passion. The one thing I envied about nursing is that they always seemed to have more of an opportunity to provide international aid than our profession. However, RTWB is crushing that belief! I'm inspired by what RTWB has been able to do already and look forward to opening more doors for RTs everywhere! Cheers :) -kayla.manuel@hotmail.com"
                    />
                    <VolunteerInfoCard name="Rita Mok" title="Finance Team - Auditor" pic="images/rita-mok.jpg" location="Toronto, Ontario, Canada" startDate="October 2012"
                                    message="Rita Mok is a CGA (Certificate General Accountant) since 1984. Business Admin, York University, Ontario. Currently is working with YM Inc., a clothing retail chain with over 600 stores across Canada and USA, as Director of Finance, Shared Services."
                                    message2="Reason for involvement : To support the Mission & Vision of RTWB."
                    />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Volunteers;