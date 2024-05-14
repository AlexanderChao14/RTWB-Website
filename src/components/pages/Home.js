import React from 'react'
import {StyledHeading} from '../styled/StyledHeading'


const Home = () => {
    return (
        <React.Fragment>
            <h1>Home page</h1>
            <StyledHeading className="text-green-800 underline">
              Hello world!
          </StyledHeading>
        </React.Fragment>
    )
}

export default Home;