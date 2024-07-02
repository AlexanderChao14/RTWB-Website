import React from 'react'
import {CardHeading, PageHeading} from '../styled/StyledHeading'
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";


const TestPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEric, setIsOpenEric] = useState(false);

    return (
        <React.Fragment>
            <div className='flex justify-center mx-auto m-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8 bg-blue-100'>
                <PageHeading>
                    Test Page
                </PageHeading>
            </div>
           

            <section>
                <div className='flex flex-col items-center'>

                    <CardHeading>Test Animation</CardHeading>
                    <div className='container-flexbox'>
                        <AnimatePresence>
                            <motion.div layout animate={isOpenEric ? "open": "closed"} initial={{borderRadius:50}} data-isOpen={isOpenEric} onClick={() => setIsOpenEric(!isOpenEric)} className='team-member-card' >
                                <motion.img layout className='team-member-pic' data-isOpen={isOpenEric} src="images/eric-cheng.jpg"></motion.img>
                                <motion.h2 layout className="justify-self-start items-start relative" variants={{open:{
                                    contentVisibility:'visible',
                                    transition: {
                                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.7,
                                        
                                      }
                                },
                                closed:{
                                    contentVisibility:'hidden',
                                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.3
                                      }
                                }
                                }}>Eric Cheng</motion.h2>
                            </motion.div>
                            <motion.img layout initial={{borderRadius:50}} data-isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} className='team-member-card' src="images/get-involved-photo.jpg">
                            </motion.img>
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            
            
        </React.Fragment>
    )
}

export default TestPage;