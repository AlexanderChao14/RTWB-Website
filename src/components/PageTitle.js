import React from 'react'
import { PageHeading } from './styled/StyledHeading'

const PageTitle = ({title}) => {
  return (
    <React.Fragment>
        <div className="flex justify-center mx-auto m-10 max-w-screen-2xl px-2 sm:px-6 lg:px-8 bg-blue-100 text-center intro-card rounded-s-3xl rounded-br-3xl shadow-br">
            <PageHeading className="">
                {title}
            </PageHeading>
        </div>
    </React.Fragment>
  )
}

export default PageTitle
