import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'

const Facilities = () => {
    return (
        <>
            <Hero hero="facility-Hero">
                <Banner title="Just For You" subtitle="Feel the Difference of Our Facilities" children="Return Home" path="/"></Banner>
            </Hero>
            <div className="activity-info">
                <containerFluid>
                    <h1>Restaurant</h1>
                </containerFluid>
            </div>
        </>
        
    )
}
export default Facilities
