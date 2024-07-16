import React from "react";
import { TextMedium } from "./styled/TextStyles";


const ValuesCard = ({header, text, bgMode}) => {
    if(bgMode === "dark"){
        return (
        
            <React.Fragment>
                  <div className=' bg-themeLightblue mx-auto m-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-1/4  h-5/6 content-center rounded-s-3xl rounded-br-3xl shadow-br'>
                                    <text className='text-3xl'>{header}</text>
                                    <TextMedium>
                                        {text}
                                    </TextMedium>
                                </div>
            </React.Fragment>
          )    
    }else{
        return (
        
            <React.Fragment>
                  <div className='bg-blue-100 mx-auto m-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8 w-1/4  h-5/6 content-center rounded-s-3xl rounded-br-3xl shadow-br'>
                                    <text className='text-3xl'>{header}</text>
                                    <TextMedium>
                                        {text}
                                    </TextMedium>
                                </div>
            </React.Fragment>
          )
    }
    
}

export default ValuesCard