import React from 'react'
import Banner from '../Components/Banner'
import Hero from "../Components/Hero"

export default function Error() {
    return (
        <Hero hero="defaultHero">
            <Banner title="404" subtitle="This Page Is not exist" children="Return Home" path="/"></Banner>   
        </Hero>
    )
}
