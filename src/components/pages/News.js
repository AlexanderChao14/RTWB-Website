import React from 'react'
import PageTitle from '../PageTitle'
import InfoCard from '../InfoCard'

const News = () => {
  return (
    <React.Fragment>
      
        <PageTitle title="News and Updates"></PageTitle>

        <section className="container-flexbox justify-center">
            <div className="container">
                <div className="newsGrid">
                    <InfoCard title="Title Here" desc="Description Here"></InfoCard>
                    <InfoCard title="Title Here" desc="Description Here"></InfoCard>
                    <InfoCard title="Title Here" desc="Description Here"></InfoCard>
                    <InfoCard title="Title Here" desc="Description Here"></InfoCard>
                    <InfoCard title="Title Here" desc="Description Here"></InfoCard>
                    <InfoCard title="Title Here" desc="Description Here"></InfoCard>
                    <InfoCard title="Title Here" desc="Description Here"></InfoCard>
                    <InfoCard title="Title Here" desc="Description Here"></InfoCard>
                    <InfoCard title="Title Here" desc="Description Here"></InfoCard>
                    <InfoCard title="Title Here" desc="Description Here"></InfoCard>
                    <InfoCard title="Title Here" desc="Description Here"></InfoCard>
                </div>
            </div>
        </section>        

    </React.Fragment>
  )
}

export default News
