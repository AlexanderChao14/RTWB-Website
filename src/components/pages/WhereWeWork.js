import React from 'react'
import { CardHeading } from '../styled/StyledHeading'
import { TextMedium , TextMediumBold , TextMediumLink } from '../styled/TextStyles'
import PageTitle from '../PageTitle'
import { SectionHeading } from '../styled/StyledHeading'
import ButtonMain from '../ButtonMain'

const WhereWeWork = () => {
  return (
    <React.Fragment>

        <PageTitle title="Where We Work"></PageTitle>

        <section className="sectioncolor-light">
                <div className="container-grid grid-cols-left mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                    <div className="flex-item-dir-cols grid-item-center h-full border-left shadow-br">
                        <CardHeading>Worldwide Operations</CardHeading>
                        <TextMedium>RTWB works with staff and volunteers to give back to communities around the world. We operate in a few select countries. If you plan on joining us or want to know more about the teams that work across the globe, check them out below!</TextMedium>
                    </div>

                    <div className="flex-item-dir-cols grid-item-center items-center w-full h-full border-br shadow-br">
                        <img src="images/critical-care-nurses.jpg" className="card-image border-br"/>
                    </div>
                </div>
        </section>

        <div className="sectioncolor-light-tint pt-12">
                <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                    <div className="self-center text-center p-2 bg-blue-200">
                        <SectionHeading className="font-semibold">Africa</SectionHeading>
                    </div>
                </div>
            <div>

            </div>
        </div>

        <section className="sectioncolor-light-tint pb-16 flex flex-col justify-center">
  
                <div className="container-grid grid-cols-left mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                    <div className="flex flex-col justify-center items-center min-w-80 max-w-sm w-3/5 h-auto max-h-96 justify-self-center shadow-bl">
                        <img src="images/annette-lievaart.jpg" className="h-full w-full object-cover"/>
                    </div>
                    <div className="flex flex-col justify-center items-left mx-4 p-4 bg-themeLightblue border-right border-bl shadow-full-bl">
                        <TextMediumBold className="pt-5">Annette Lievaart, Africa Team Lead</TextMediumBold>
                        <TextMedium>Graduating NAIT in 2008, Annette started work as an RT at Tenwek Mission hospital in Kenya from 2010 to 2011. She had the opportunity to perform a lot of RT work, and often thought to herself of how nice it would be to have an organization that would be able to mobilize RT's around the globe. As she returned to Canada, she was met with RTWB where a new episode of her life started. Annette grew up on a farm in Southern Alberta where she learned the value of hard work, Christian charity and the value of family. Annette wanted to do more for the community, and returned to Tenwek in 2013, and is now presently our Africa team lead.</TextMedium>
                    </div>
                </div>
                 

                <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 mt-16">
                    <div className="w-full">
                            <TextMediumBold className="bg-blue-300 py-1">More about Africa operations</TextMediumBold>
                            <TextMedium className="py-1">Duis nulla dolore dolor commodo minim et exercitation excepteur cillum do reprehenderit. Magna voluptate fugiat pariatur ut enim id aute eiusmod duis consectetur eiusmod Lorem. Laborum dolor sunt fugiat velit deserunt consequat ut. Ex cillum ut cillum duis fugiat reprehenderit ad commodo exercitation adipisicing occaecat nisi. Nostrud cillum sint Lorem minim commodo veniam consectetur incididunt veniam laboris. Sint commodo esse nisi est nisi consectetur excepteur.</TextMedium>
                            <TextMedium className="py-1">Exercitation veniam consectetur officia aliqua ullamco voluptate non fugiat ea. Irure ut reprehenderit voluptate quis dolore sit nostrud laborum sunt eiusmod cupidatat. Occaecat anim occaecat nostrud duis aliqua nulla in nisi consectetur duis. Excepteur amet magna anim officia Lorem dolore aliquip esse sit excepteur. Eu ipsum incididunt esse ex tempor ex reprehenderit incididunt magna fugiat pariatur. Ad tempor tempor occaecat commodo sit velit est quis aliqua est veniam. Aliqua mollit ipsum reprehenderit magna commodo eu.</TextMedium>
                    </div>
                </div>
        </section>

        <div className="sectioncolor-dark pt-14">
                <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-full">
                    <div className="self-center text-center p-2 bg-blue-200">
                        <SectionHeading className="font-semibold">Nepal</SectionHeading>
                    </div>
                </div>
        </div>

        <section className="sectioncolor-dark flex flex-col justify-center">
                <div className="container-grid grid-cols-left mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                    <div className="flex flex-col justify-center items-center min-w-80 max-w-sm w-3/5 h-auto max-h-96 justify-self-center shadow-bl">
                        <img src="images/eric-cheng.jpg" className="h-full w-full object-cover"/>
                    </div>
                    <div className="flex flex-col justify-center items-left mx-4 p-4 bg-themeLightblue border-right border-bl shadow-full-bl">
                        <TextMediumBold className="pt-5">Eric Cheng, Director and Culture Creator</TextMediumBold>
                        <TextMedium>Eric was raised by parents that taught him the value of life and the lives of the people around him. Eric's hardships led him to engaging in capacity building in neonatal/pediatric critical care in 2010. Eric enjoyed making a difference despite the challenges of working in unfamiliar environments, motived with the ideology of 'giving back' to the community. He loves sharing his experiences and found himself meeting other RT's around the world who shared the same idea of "giving back". Thus, RTWB was established to provide RT's a way to "give back" to the global medical community.</TextMedium>
                    </div>
                </div>

                <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 mt-16">
                    <div className="w-full">
                            <TextMediumBold className="bg-blue-300 py-1">More about Nepal operations</TextMediumBold>
                            <TextMedium className="py-1 text-white">Duis nulla dolore dolor commodo minim et exercitation excepteur cillum do reprehenderit. Magna voluptate fugiat pariatur ut enim id aute eiusmod duis consectetur eiusmod Lorem. Laborum dolor sunt fugiat velit deserunt consequat ut. Ex cillum ut cillum duis fugiat reprehenderit ad commodo exercitation adipisicing occaecat nisi. Nostrud cillum sint Lorem minim commodo veniam consectetur incididunt veniam laboris. Sint commodo esse nisi est nisi consectetur excepteur.</TextMedium>
                            <TextMedium className="py-1 text-white">Exercitation veniam consectetur officia aliqua ullamco voluptate non fugiat ea. Irure ut reprehenderit voluptate quis dolore sit nostrud laborum sunt eiusmod cupidatat. Occaecat anim occaecat nostrud duis aliqua nulla in nisi consectetur duis. Excepteur amet magna anim officia Lorem dolore aliquip esse sit excepteur. Eu ipsum incididunt esse ex tempor ex reprehenderit incididunt magna fugiat pariatur. Ad tempor tempor occaecat commodo sit velit est quis aliqua est veniam. Aliqua mollit ipsum reprehenderit magna commodo eu.</TextMedium>
                    </div>
                </div>
        </section>


    </React.Fragment>
    
  )
}

export default WhereWeWork
