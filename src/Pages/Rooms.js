import React from 'react'
import Hero from '../Components/Hero'
import Banner from "../Components/Banner"
import Title from "../Components/Title"

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Featured Rooms" subtitle="Enjoy the day and feel the real freedom." children="return Home" path="/"></Banner>
            </Hero>

            <Title title="Services" />

        </>
        
    )
}
export default Rooms
